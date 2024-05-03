import type { TailwindStyles } from '@embakitchen/types'

export const styles: TailwindStyles = {
  main: {
    container: 'relative',
    slider: 'main-slider dekstop:h-[582px] tablet:h-[493px] h-[565px]',
    slide: 'desktop:px-[100px] tablet:px-[60px] mobile-s:px-[41px]',
    textSection: 'absolute top-[138px] tablet:w-auto w-full border-2 border-solid border-red-900',
    title: 'text-white flex flex-col mb-10',
    titleMedium: 'font-medium text-[56px] leading-[90px]',
    titleBold: 'font-bold text-7xl leading-[90px]',
    buttons: 'flex gap-x-6 tablet:w-auto w-full tablet:justify-start justify-stretch',
    specialOrder:
      'h-[56px] px-6 bg-primary text-white font-semibold text-base leading-6 rounded-md',
    showProducts:
      'h-[56px] px-6 bg-white text-dark-grey font-medium text-base leading-6 rounded-md',
  },
}
