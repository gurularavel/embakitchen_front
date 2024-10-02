'use client'

import Image, { type StaticImageData } from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import type { SliderVariant } from '~ek/types'
import 'swiper/css'
import 'swiper/css/pagination'
import partner1 from '/public/assets/images/slider/partners/partner-1.png'
import partner2 from '/public/assets/images/slider/partners/partner-2.png'
import partner3 from '/public/assets/images/slider/partners/partner-3.png'
import partner4 from '/public/assets/images/slider/partners/partner-4.png'
import partner5 from '/public/assets/images/slider/partners/partner-5.png'
import partner6 from '/public/assets/images/slider/partners/partner-6.png'

interface SliderProps {
  variant: SliderVariant
}

const sliders: Readonly<Record<SliderVariant, React.ReactElement>> = {
  main: <Main />,
  gallery: <Gallery />,
  partners: <Partners />,
}

const sliderStyles: Readonly<TwClasses> = {
  partners: {
    slider: 'mb-6 laptop:mb-25',
    title: 'text-xl leading-7 font-medium text-center text-gray-9 mb-10',
    sliderWrapper: 'px-4 laptop:px-15 widescreen:px-25',
    swiper: 'h-12',
    slide: '!w-auto h-auto',
  },
}
const styles = sliderStyles as Readonly<StyleRecord>
const partnersSliderStyles = sliderStyles.partners as Readonly<StyleRecord>

function Main(): React.ReactElement {
  return (
    <div>
      <p>Main Slider</p>
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
