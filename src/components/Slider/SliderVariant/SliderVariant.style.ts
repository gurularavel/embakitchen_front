export const sliderVariantStyles: TailwindStyle = {
  gallery: {
    container:
      'bg-dark-blue mb-6 laptop:mb-25 px-[17px] tablet:px-10 laptop:px-[148px] widescreen:px-25 flex items-center h-[420px] laptop:h-[513px]',
    wrapper: 'w-full relative',
    slider: '',
    slide: 'group laptop:[&.swiper-slide-active_img]:h-[372px] cursor-pointer',
    img: 'w-full h-[372px] laptop:h-[340px] object-cover',
    nav: 'absolute top-1/2 -translate-1/2 z-10',
    prev: 'w-[33.33px] h-[33.33px] bg-semi-gray-2 flex items-center justify-center rounded-full left-[3.33px] laptop:-left-[calc(33.33px/2)]',
    next: 'w-[33.33px] h-[33.33px] bg-semi-gray-2 flex items-center justify-center rounded-full right-[3.33px] laptop:-right-[calc(33.33px/2)]',
  },
}
