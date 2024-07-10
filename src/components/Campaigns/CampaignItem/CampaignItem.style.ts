export const campaignItemStyles: TailwindStyle = {
  container:
    'w-full laptop:w-1/3 widescreen:w-1/4 laptop:last:hidden widescreen:last:block',
  content: '',
  imgWrapper: 'h-60',
  img: 'w-full h-full',
  body: 'p-6 border border-solid border-semi-gray-8 border-t-0',
  dates:
    'text-sm font-semibold leading-5 text-semi-gray-4 inline-block mb-2.5 [&>strong]:font-semibold',
  title: 'text-xl font-semibold leading-5 text-dark-blue mb-[33px]',
  info: 'flex justify-between gap-x-6',
  link: 'flex-1 flex justify-between items-center p-4 text-base font-medium leading-6 text-dark-gray-3 border border-solid border-semi-gray-9',
}
