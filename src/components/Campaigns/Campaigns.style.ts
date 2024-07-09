export const campaignsStyles: TailwindStyle = {
  container: 'mb-6 desktop:mb-25',
  wrapper:
    'px-0 widescreen:px-25 mx-4 tablet:mx-5 desktop:mx-15 widescreen:mx-0',
  titleWrapper: 'relative flex justify-between gap-x-10 mb-10',
  title:
    'text-[30px] tablet:text-3xl font-medium leading-9 tablet:leading-10 text-semi-dark border-b-2 border-solid border-dark-gray-1 whitespace-nowrap h-[54px] tablet:h-[58px]',
  titleWrapperBg:
    'hidden mobile:block absolute laptop:static -left-10 right-0 top-0',
  titleWrapperBgImg: 'h-[61px] w-full laptop:object-cover',
  campaigns: 'flex flex-col laptop:flex-row justify-between gap-6',
}
