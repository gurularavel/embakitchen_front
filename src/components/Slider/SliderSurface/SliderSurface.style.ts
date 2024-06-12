export const sliderSurfaceStyles: TailwindStyle = {
  main: {
    fixedSection:
      'absolute top-0 left-0 right-0 bottom-0 px-[17px] tablet:px-[41px] laptop:px-15 desktop:px-[100px] pt-18 tablet:pt-[111px] desktop:pt-[138px] pb-16 tablet:pb-0 flex flex-col justify-between tablet:block',
    text: 'text-white flex flex-col items-start mobile:mb-15 laptop:mb-10',
    textTop:
      'text-3xl tablet:text-4xl desktop:text-6xl font-medium leading-11 tablet:leading-14 desktop:leading-16 whitespace-nowrap relative z-10',
    textBottom:
      'text-3xl tablet:text-4xl desktop:text-7xl font-bold leading-11 tablet:leading-14 desktop:leading-16 relative z-10',
    buttons:
      'flex flex-col tablet:flex-row gap-y-3 tablet:gap-y-0 gap-x-0 tablet:gap-x-3 laptop:gap-x-6 w-full tablet:w-auto font-semibold text-base leading-6',
    specialOrder:
      'h-14 w-full tablet:w-1/2 laptop:w-auto text-center bg-primary-1 rounded-md text-white px-0 laptop:px-6 relative z-10',
    showProducts:
      'h-14 w-full tablet:w-1/2 laptop:w-auto text-center bg-white rounded-md text-dark-gray-1 px-0 laptop:px-6 relative z-10',
  },
  gallery: {
    wrapper:
      'gallery-slider-surface bg-dark-gray-1 rounded-lg py-3 px-6 mobile:w-[254px] laptop:w-[183px] absolute bottom-4 left-4 right-4 mobile:left-1/2 mobile:right-auto mobile:-translate-x-1/2 laptop:left-auto laptop:right-4 laptop:translate-x-full laptop:opacity-0 laptop:invisible laptop:group-hover:visible laptop:group-hover:opacity-100 laptop:group-hover:translate-x-0 transition-all duration-200',
    tag: 'text-sm font-medium text-secondary-2 leading-5 mb-1',
    title: 'text-base font-medium text-white leading-6',
  },
}
