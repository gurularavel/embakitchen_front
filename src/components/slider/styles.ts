import type { TailwindStyles } from '@embakitchen/types'

export const styles: TailwindStyles = {
  main: {
    container: 'relative',
    slider: 'main-slider dekstop:h-[582px] tablet:h-[493px] h-[565px]',
    slide: 'desktop:px-[100px] tablet:px-[60px] mobile-s:px-[41px]',
    img: 'object-cover',
    textSection:
      'absolute mobile:top-[138px] top-0 tablet:w-auto w-[calc(100%-82px)] mobile:h-auto h-full mobile:py-0 pt-[72px] pb-[64px] mobile:block flex flex-col justify-between',
    title: 'text-white flex flex-col mb-10',
    titleMedium:
      'font-medium laptop:text-[56px] tablet:text-[40px] text-[32px] laptop:leading-[90px] tablet:leading-[60px] leading-[48px]',
    titleBold:
      'font-bold laptop:text-[68px] tablet:text-[40px] text-[32px] laptop:leading-[90px] tablet:leading-[60px] leading-[48px]',
    buttons:
      'flex gap-x-6 tablet:w-auto w-full tablet:justify-start justify-stretch mobile:flex-row flex-col mobile:items-start items-stretch mobile mobile:gap-y-0 gap-y-3',
    specialOrder:
      'h-[56px] px-6 bg-primary text-white font-semibold text-base leading-6 rounded-md tablet:w-auto mobile:w-1/2 w-full',
    showProducts:
      'h-[56px] px-6 bg-white text-dark-grey font-medium text-base leading-6 rounded-md tablet:w-auto mobile:w-1/2 w-full',
  },
}
