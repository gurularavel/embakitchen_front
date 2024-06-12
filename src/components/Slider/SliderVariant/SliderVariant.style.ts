export const sliderVariantStyles: TailwindStyle = {
  main: {
    wrapper:
      'h-[565px] tablet:h-[493px] laptop:h-[582px] relative mb-6 laptop:mb-25',
    slider: 'h-full',
    img: 'w-auto widescreen:w-full h-full object-cover',
  },
  gallery: {
    container:
      'bg-dark-blue mb-6 laptop:mb-25 px-[17px] tablet:px-10 laptop:px-[148px] widescreen:px-25 flex items-center h-[420px] laptop:h-[513px]',
    wrapper: 'w-full relative',
    slider: '',
    slide: 'laptop:[&.swiper-slide-active_img]:h-[372px]',
    img: 'w-full h-[372px] laptop:h-[340px] object-cover',
    nav: 'absolute top-1/2 -translate-1/2 z-10',
    prev: 'w-[33.33px] h-[33.33px] bg-semi-gray-2 flex items-center justify-center rounded-full left-[3.33px] laptop:-left-[calc(33.33px/2)]',
    next: 'w-[33.33px] h-[33.33px] bg-semi-gray-2 flex items-center justify-center rounded-full right-[3.33px] laptop:-right-[calc(33.33px/2)]',
  },
  partners: {
    container: 'mb-6 laptop:mb-25',
    title: 'text-xl leading-7 font-medium text-center text-dark-gray-2 mb-10',
    wrapper: 'px-4 laptop:px-15 widescreen:px-25',
    slider: 'h-12',
    slide: '!w-auto !h-auto px-3.5',
  },
}
