export const orderStageItemStyles: TailwindStyle = {
  container:
    'group py-14 px-4 desktop:px-16 flex-1 flex flex-col justify-end cursor-pointer overflow-y-hidden border-solid border-white border-b laptop:border-b-0 laptop:border-r laptop:last:border-r-0',
  content:
    'flex flex-col gap-y-4 transition-transform duration-300 translate-y-0 laptop:translate-y-[calc(100%-174px)] laptop:group-hover:translate-y-0',
  row: 'text-[100px] font-semibold leading-[121.9px]',
  title:
    'text-2xl desktop:text-2.5xl font-semibold text-white leading-8 laptop:leading-9',
  description:
    'text-sm font-medium text-semi-gray-1 leading-6 transition-transform duration-300 translate-y-0 laptop:translate-y-full laptop:group-hover:translate-y-0',
}
