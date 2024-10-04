'use client'

import * as React from 'react'
import Image, { type StaticImageData } from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Button, SocialContacts } from '~ek/components'
import { useScreenSize } from '~ek/hooks'
import { SCREENS } from '~ek/utils'
import type { SliderVariant } from '~ek/types'
import 'swiper/css'
import 'swiper/css/pagination'
import mainSliderImg from '/public/assets/images/slider/main-slider-img.png'
import partner1 from '/public/assets/images/slider/partners/partner-1.png'
import partner2 from '/public/assets/images/slider/partners/partner-2.png'
import partner3 from '/public/assets/images/slider/partners/partner-3.png'
import partner4 from '/public/assets/images/slider/partners/partner-4.png'
import partner5 from '/public/assets/images/slider/partners/partner-5.png'
import partner6 from '/public/assets/images/slider/partners/partner-6.png'

interface SliderProps {
  variant: SliderVariant
}

interface MainSliderEntry {
  img: StaticImageData
  text: string
}

const sliders: Readonly<Record<SliderVariant, React.ReactElement>> = {
  main: <Main />,
  gallery: <Gallery />,
  partners: <Partners />,
}

const sliderStyles: Readonly<TwClasses> = {
  main: {
    slider:
      'h-[565px] tablet:h-[493px] laptop:h-[582px] mb-6 laptop:mb-25 relative',
    swiper: 'h-full',
    img: 'w-auto widescreen:w-full h-full object-cover',
    surface: '',
    overlay:
      'absolute top-0 left-0 right-0 bottom-0 px-[17px] tablet:px-[41px] laptop:px-15 widescreen:px-[100px] pt-18 tablet:pt-[111px] desktop:pt-[138px] pb-16 tablet:pb-[84px] laptop:pb-0 mb-0 tablet:mb-6 flex flex-col justify-between laptop:block',
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
  partners: {
    slider: 'mb-6 laptop:mb-25',
    title: 'text-xl leading-7 font-medium text-center text-gray-9 mb-10',
    sliderWrapper: 'px-4 laptop:px-15 widescreen:px-25',
    swiper: 'h-12',
    slide: '!w-auto h-auto',
  },
}
const styles = sliderStyles as Readonly<StyleRecord>
const mainSliderStyles = sliderStyles.main as Readonly<StyleRecord>
const partnersSliderStyles = sliderStyles.partners as Readonly<StyleRecord>

function Main(): React.ReactElement {
  const { width } = useScreenSize()
  const [isClient, setIsClient] = React.useState<boolean>(false)

  React.useEffect(() => setIsClient(true), [])

  return (
    <div className={`main-slider ${mainSliderStyles.slider}`}>
      <Swiper
        loop={true}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        className={mainSliderStyles.swiper}
      >
        {Array<MainSliderEntry>(3)
          .fill({
            img: mainSliderImg,
            text: 'Embakitchen homepage slider mock image',
          })
          .map((item, i) => (
            <SwiperSlide key={i}>
              <Image
                src={item.img}
                alt={item.text}
                className={mainSliderStyles.img}
              />
            </SwiperSlide>
          ))}
      </Swiper>

      <div
        className={mainSliderStyles.surface}
        style={{ border: '2px solid red' }}
      >
        <div
          className={mainSliderStyles.overlay}
          style={{ border: '2px solid green' }}
        >
          <h3 className={mainSliderStyles.text}>
            <span className={mainSliderStyles.textTop}>Büdcənizə uyğun</span>
            <span className={mainSliderStyles.textBottom}>Mətbəx mebeli</span>
          </h3>

          <div className={mainSliderStyles.buttons}>
            <Button classes={mainSliderStyles.specialOrder}>
              Özəl sifariş yarat
            </Button>
            <Button classes={mainSliderStyles.showProducts}>
              Məhsullara bax
            </Button>
          </div>
        </div>

        {isClient && width >= SCREENS.laptop && (
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
  return (
    <div>
      <p>Gallery Slider</p>
    </div>
  )
}

function Partners(): React.ReactElement {
  const partners: Array<StaticImageData> = Array(2)
    .fill([partner1, partner2, partner3, partner4, partner5, partner6])
    .flat()

  return (
    <div className={partnersSliderStyles.slider}>
      <h4 className={partnersSliderStyles.title}>Əməkdaşlarımız</h4>

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
          {partners.map((partner: StaticImageData, i: number) => (
            <SwiperSlide
              key={i}
              className={partnersSliderStyles.slide}
            >
              <Image
                src={partner}
                alt='Embakitchen partner'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export function Slider({ variant }: Readonly<SliderProps>): React.ReactElement {
  return sliders[variant]
}
