import { TailwindStyles } from '@embakitchen/_types'

export const statisticsStyles: TailwindStyles = {
  statistics:
    'laptop:mt-[100px] mobile-s:mt-[24px] desktop:px-[125px] laptop:px-[129px] tablet:px-[12px] mobile-s:px-[40px] flex mobile-s:flex-wrap justify-between mobile-s:gap-y-[24px] tablet:gap-y-0',
  statisticsItem:
    'flex flex-col items-center mobile:w-1/4 mobile-s:w-1/2 tablet:h-[95px] mobile-s:h-[69px] w-full mobile-s:border-r border-[#E6E6E6] mobile-s:even:border-r-0 mobile:even:border-r',
  number:
    'font-bold tablet:text-[40px] tablet:leading-[60px] mobile-s:text-[32px] mobile-s:leading:[40px] text-[#EA7F52]',
  name: 'font-medium tablet:text-xl tablet:leading-[30px] mobile-s:text-base mobile-s:leading-6 text-[#1A1A1A]',
}
