'use client'

import * as React from 'react'
import Image, { type StaticImageData } from 'next/image'
import { useParams } from 'next/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Autoplay,
  FreeMode,
  Grid,
  Navigation,
  Pagination,
  Thumbs,
} from 'swiper/modules'
import SwiperCore, { type Swiper as SwiperType } from 'swiper'
import { twMerge } from 'tailwind-merge'
import { useLocale, useTranslations } from 'next-intl'
import { Button, Icon, NavLink, SocialContacts } from '~ek/components'
import { useScreenSize, useStore } from '~ek/hooks'
import {
  defaultApiQueryParams,
  omit,
  SCREENS,
  transformToUiData,
} from '~ek/utils'
import type {
  Language,
  MainSliderEntry,
  MediaFile,
  ModifiedCategoryProduct,
  PaginatedCategoryProducts,
  PartnersSliderEntry,
  ProductEntry,
  SliderVariant,
} from '~ek/types'
import {
  getBestSellingProducts,
  getMainSliderContent,
  getPartnersSliderContent,
  getProductDetails,
} from '~ek/services'
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/thumbs'
import 'swiper/css/pagination'

SwiperCore.use([Thumbs, Grid])

interface SliderProps {
  variant: SliderVariant
}

type OmittedMainSliderEntry = Omit<MainSliderEntry<string>, 'status' | 'image'>
interface ModifiedMainSliderEntry extends OmittedMainSliderEntry {
  image: MediaFile
}

type OmittedPartnersSliderEntry = Omit<
  PartnersSliderEntry<string>,
  'status' | 'image'
>
interface ModifiedPartnersSliderEntry extends OmittedPartnersSliderEntry {
  image: MediaFile
}

const sliders: Readonly<Record<SliderVariant, React.ReactElement>> = {
  main: <Main />,
  gallery: <Gallery />,
  partners: <Partners />,
  product: <Product />,
}

const sliderStyles: Readonly<TwClasses> = {
  main: {
    slider:
      'h-[565px] tablet:h-[493px] laptop:h-[582px] mb-6 laptop:mb-25 relative',
    swiper: 'h-full',
    img: 'w-auto widescreen:w-full h-full object-cover',
    surface: '',
    overlay:
      'absolute top-0 left-0 right-0 bottom-0 px-[17px] tablet:px-[41px] laptop:px-15 widescreen:px-[100px] pt-18 tablet:pt-[111px] desktop:pt-[138px] pb-16 tablet:pb-[84px] laptop:pb-0 flex flex-col justify-between laptop:block bg-supplementary-2/60',
    text: 'flex flex-col items-start mb-0 mobile:mb-15 laptop:mb-10 text-white',
    textTop:
      'relative z-10 text-3xl tablet:text-4xl laptop:text-[56px] font-medium leading-12 tablet:leading-15 laptop:leading-[90px] whitespace-nowrap',
    textBottom:
      'relative z-10 text-3xl tablet:text-4xl laptop:text-[68px] font-bold leading-12 tablet:leading-15 laptop:leading-[90px]',
    buttons:
      'w-full tablet:w-auto flex flex-col tablet:flex-row gap-y-3 tablet:gap-y-0 gap-x-0 tablet:gap-x-3 laptop:gap-x-6',
    specialOrder:
      'w-full tablet:w-1/2 laptop:w-auto h-14 px-0 laptop:px-6 relative z-10 bg-primary-1 rounded-md text-white text-base font-semibold',
    showProducts:
      'w-full tablet:w-1/2 laptop:w-auto h-14 px-0 laptop:px-6 relative z-10 bg-white rounded-md text-tertiary-2 text-base font-semibold',
    socialContacts:
      'hidden laptop:block absolute z-10 laptop:top-[117px] widescreen:top-1/2 laptop:right-15 widescreen:right-25 widescreen:-translate-y-1/2',
  },
  gallery: {
    slider:
      'h-[420px] laptop:h-[513px] bg-gray-1 mb-6 laptop:mb-25 px-[17px] tablet:px-10 laptop:px-[148px] widescreen:px-25 flex items-center',
    sliderWrapper: 'w-full h-[372px] relative',
    swiper: 'gallery-slider h-full cursor-pointer',
    slide:
      'group laptop:!h-[340px] laptop:[&.swiper-slide-next]:!h-[372px] laptop:!flex laptop:items-center laptop:[&.swiper-slide-active]:!w-[calc((100%-570px)/2)] laptop:[&.swiper-slide-next]:!w-[570px] laptop:[&.swiper-slide-next+.swiper-slide]:!w-[calc((100%-570px)/2)] widescreen:[&.swiper-slide-active]:!w-1/3 widescreen:[&.swiper-slide-next]:!w-1/3 widescreen:[&.swiper-slide-next+.swiper-slide]:!w-1/3',
    img: 'w-full h-full object-cover',
    nav: 'absolute top-1/2 -translate-1/2 z-10 w-[33.33px] h-[33.33px] flex items-center justify-center bg-supplementary-2/80',
    prev: 'left-[3.33px] laptop:-left-[calc(33.33px/2)] rounded-full',
    next: 'right-[3.33px] laptop:-right-[calc(33.33px/2)] rounded-full',
    surface:
      'w-auto mobile:min-w-[254px] laptop:min-w-[183px] bg-tertiary-2 rounded-lg py-3 px-6 absolute bottom-4 left-4 right-4 mobile:left-1/2 mobile:right-auto mobile:-translate-x-1/2 laptop:translate-x-full laptop:right-4 laptop:opacity-0 laptop:invisible laptop:group-hover:visible laptop:group-hover:opacity-100 laptop:group-hover:translate-x-0 transition-all duration-200',
    tag: 'text-sm font-medium text-secondary-4 leading-5 mb-1',
    title: 'text-base font-medium text-white leading-6',
  },
  partners: {
    slider: 'mb-6 laptop:mb-25',
    title: 'text-xl leading-7 font-medium text-center text-gray-900 mb-10',
    sliderWrapper: 'px-4 laptop:px-15 widescreen:px-25',
    swiper: 'h-12',
    slide: '!w-auto h-auto',
    imageWrapper: 'relative',
    image: 'w-full h-12',
  },
  product: {
    main: 'h-[300px] laptop:h-[480px] mb-6',
    thumb: 'h-[280px]',
  },
}
const mainSliderStyles = sliderStyles.main as Readonly<StyleRecord>
const gallerySliderStyles = sliderStyles.gallery as Readonly<StyleRecord>
const partnersSliderStyles = sliderStyles.partners as Readonly<StyleRecord>
const productSliderStyles = sliderStyles.product as Readonly<StyleRecord>

function Main(): React.ReactElement {
  const { width } = useScreenSize()
  const { isClientRendering } = useStore(state => state.clientSlice)
  const locale = useLocale()
  const [mainSliderContent, setMainSliderContent] = React.useState<
    ModifiedMainSliderEntry[]
  >([])
  const t = useTranslations('buttons')

  React.useEffect(() => {
    async function initializeMainSliderContent() {
      const content: MainSliderEntry[] = await getMainSliderContent(
        defaultApiQueryParams,
      )
      const contentWithoutStatus = content.map(c =>
        omit({
          source: c,
          fields: ['status'],
        }),
      )
      const uiData = transformToUiData(
        contentWithoutStatus,
        locale as Language,
      ) as ModifiedMainSliderEntry[]
      setMainSliderContent(uiData)
    }

    initializeMainSliderContent()
  }, [locale])

  return (
    <div className={`main-slider ${mainSliderStyles.slider}`}>
      <Swiper
        loop={true}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        className={mainSliderStyles.swiper}
      >
        {mainSliderContent.map((item: ModifiedMainSliderEntry) => (
          <SwiperSlide key={item.id}>
            <Image
              src={item.image.original_url}
              alt={item.title}
              className={mainSliderStyles.img}
              fill
            />

            <div className={mainSliderStyles.surface}>
              <div className={mainSliderStyles.overlay}>
                <h3 className={mainSliderStyles.text}>
                  <span className={mainSliderStyles.textTop}>{item.title}</span>
                  <span className={mainSliderStyles.textBottom}>
                    {item.excerpt}
                  </span>
                </h3>

                <div className={mainSliderStyles.buttons}>
                  <Button classes={mainSliderStyles.specialOrder}>
                    {t('createCustomOrder')}
                  </Button>
                  <Button classes={mainSliderStyles.showProducts}>
                    {t('viewProducts')}
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={mainSliderStyles.surface}>
        {isClientRendering && width >= SCREENS.laptop && (
          <div className={mainSliderStyles.socialContacts}>
            <SocialContacts
              layout='vertical'
              colorScheme='light'
              gap={12}
            />
          </div>
        )}
      </div>
    </div>
  )
}

function Gallery(): React.ReactElement {
  const gallerySliderRef = React.useRef<SwiperType>()
  const locale = useLocale()
  const [bestSellingProductContent, setBestSellingProductContent] =
    React.useState<PaginatedCategoryProducts>({} as PaginatedCategoryProducts)

  React.useEffect(() => {
    async function initializeBestSellingProductsContent() {
      const bestSellingProductContent = await getBestSellingProducts(
        defaultApiQueryParams,
      )

      const uiData = transformToUiData(
        bestSellingProductContent,
        locale as Language,
      ) as PaginatedCategoryProducts
      setBestSellingProductContent(uiData)
    }

    initializeBestSellingProductsContent()
  }, [locale])

  return (
    <div className={gallerySliderStyles.slider}>
      <div className={gallerySliderStyles.sliderWrapper}>
        <Swiper
          className={gallerySliderStyles.swiper}
          onBeforeInit={swiper => (gallerySliderRef.current = swiper)}
          slidesPerView={1}
          spaceBetween={0}
          breakpoints={{
            1024: {
              slidesPerView: 3,
              spaceBetween: 27,
            },
            1920: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          modules={[Navigation]}
          touchEventsTarget='container'
        >
          {bestSellingProductContent?.data?.map(
            (product: ModifiedCategoryProduct, i: number) => (
              <SwiperSlide
                key={i}
                className={gallerySliderStyles.slide}
              >
                <NavLink href={`/products/${product.category}/${product.slug}`}>
                  <Image
                    src={product.bannerImage.original_url}
                    alt={product.title}
                    className={gallerySliderStyles.img}
                    fill
                  />

                  <div className={gallerySliderStyles.surface}>
                    {product?.tags?.length &&
                      product?.tags?.map(tag => (
                        <span
                          key={tag.id}
                          className={gallerySliderStyles.tag}
                        >
                          {tag.title}
                        </span>
                      ))}
                    <h6 className={gallerySliderStyles.title}>
                      {product.title}
                    </h6>
                  </div>
                </NavLink>
              </SwiperSlide>
            ),
          )}
        </Swiper>

        <Button
          classes={twMerge(gallerySliderStyles.nav, gallerySliderStyles.prev)}
          onClick={() => gallerySliderRef.current?.slidePrev()}
        >
          <Icon
            variant='arrow-left'
            sizes='w-3 h-2.5'
          />
        </Button>
        <Button
          classes={twMerge(gallerySliderStyles.nav, gallerySliderStyles.next)}
          onClick={() => gallerySliderRef.current?.slideNext()}
        >
          <Icon
            variant='arrow-right-gray'
            sizes='w-3 h-2.5'
          />
        </Button>
      </div>
    </div>
  )
}

function Partners(): React.ReactElement {
  const t = useTranslations('titles')
  const locale = useLocale()
  const [partnersSliderContent, setPartnersSliderContent] = React.useState<
    ModifiedPartnersSliderEntry[]
  >([])

  React.useEffect(() => {
    async function initializePartnersSliderContent() {
      const partnersSliderContent = await getPartnersSliderContent(
        defaultApiQueryParams,
      )

      const uiData = transformToUiData(
        partnersSliderContent,
        locale as Language,
      ) as ModifiedPartnersSliderEntry[]
      setPartnersSliderContent(uiData)
    }

    initializePartnersSliderContent()
  }, [locale])

  return (
    <div className={partnersSliderStyles.slider}>
      <h4 className={partnersSliderStyles.title}>{t('partnersSlider')}</h4>

      <div className={partnersSliderStyles.sliderWrapper}>
        <Swiper
          loop={true}
          modules={[Autoplay]}
          className={partnersSliderStyles.swiper}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          slidesPerView='auto'
          spaceBetween={16}
          breakpoints={{
            1024: {
              spaceBetween: 48,
            },
            1440: {
              spaceBetween: 100,
            },
          }}
        >
          {Array(3)
            .fill(partnersSliderContent)
            .flat()
            .map((content: ModifiedPartnersSliderEntry, i: number) => (
              <SwiperSlide
                key={i}
                className={partnersSliderStyles.slide}
              >
                <div className={partnersSliderStyles.imageWrapper}>
                  <Image
                    src={content.image.original_url}
                    alt='Embakitchen partner'
                    className={partnersSliderStyles.image}
                    width={200}
                    height={48}
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  )
}

function Product(): React.ReactElement {
  const [thumbsSwiper, setThumbsSwiper] = React.useState<SwiperType | null>(
    null,
  )
  const { slug } = useParams() as { slug: string }
  type SliderProduct = Pick<ProductEntry<string>, 'title' | 'images'>
  const [product, setProduct] = React.useState<SliderProduct>(
    {} as SliderProduct,
  )
  const locale = useLocale() as Language

  React.useEffect(() => {
    async function fetchProductImages(slug: string): Promise<void> {
      const fetchedProduct: ProductEntry = await getProductDetails(slug)
      setProduct({
        title: fetchedProduct.title[locale],
        images: fetchedProduct.images,
      })
    }

    fetchProductImages(slug)
  }, [slug, locale])

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className={productSliderStyles.main}
      >
        {product.images?.map((image: MediaFile) => (
          <SwiperSlide key={image.uuid}>
            <Image
              src={image.original_url}
              alt={product.title}
              fill
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={24}
        slidesPerView={2}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={productSliderStyles.thumb}
      >
        {product.images?.map((image: MediaFile) => (
          <SwiperSlide key={image.uuid}>
            <Image
              src={image.original_url}
              alt={product.title}
              fill
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export function Slider({ variant }: Readonly<SliderProps>): React.ReactElement {
  return sliders[variant]
}
