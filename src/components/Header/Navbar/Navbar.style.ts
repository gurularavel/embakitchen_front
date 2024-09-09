export const navbarStyles: TailwindStyle = {
  nav: 'shrink w-full h-full flex justify-between items-center',
  menuWrapper: 'h-full',
  menu: 'h-full flex items-center gap-x-4',
  menuItem: 'h-full flex',
  options: 'h-full flex items-center justify-between gap-x-5',
  link: 'h-full flex items-center text-sm font-medium leading-5 text-white',
  highlightedLink: '[&]:text-secondary-2',
  specialOrder: 'border border-solid border-semi-gray-4 py-2.5 px-6 rounded-lg',
  dropdown: 'group relative [&>a]:flex [&>a]:gap-x-0.5',
  dropdownIcon: 'transition-transform duration-200 group-hover:rotate-180',
  dropdownWrapper:
    'absolute top-full left-1/2 -translate-x-1/2 z-20 bg-dark-blue scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100',
  dropdownItem: 'h-18 hover:bg-dark-gray-3',
  dropdownLink:
    'h-full flex items-center px-6 whitespace-nowrap text-base font-medium leading-6 text-white',
  phone: 'flex items-center gap-x-2',
  phoneIcon: 'w-[30px] h-[30px]',
  phoneNumber: 'text-xl font-medium leading-7 text-secondary-2',
  searchBtn: 'flex',
  searchIcon: 'w-6 h-6',
  additionalOptions: 'flex items-center gap-x-3',
  selectedLanguage:
    'flex items-center gap-x-2 p-2.5 rounded-lg text-base font-medium leading-6 text-light-gray-10 bg-light-gray-3 cursor-pointer',
  profileLink:
    'flex items-center justify-between gap-x-2 py-2.5 px-6 bg-light-gray-3 rounded-lg text-base font-semibold leading-6 text-white',
  profileIcon: 'w-6 h-6',
}

// export const navbarStyles: TailwindStyles = {
//   navbar: 'mobile-s:hidden laptop:flex gap-x-[16px] items-center',
//   navbarItem:
//     'flex mobile-s:justify-between laptop:justify-start gap-x-[2px] relative hover:cursor-pointer',
//   dropdownItems:
//     'absolute top-[48px] desktop:left-[-76px] laptop:left-[-50px] z-[2] desktop:w-[240px] laptop:w-[180px]',
//   dropdownItem:
//     'text-white h-[72px] bg-[#31373D] hover:bg-[#3D454C] hover:cursor-pointer pl-[24px] flex items-center',
//   dropdownParagraph: 'leading-[24px]',
//   paragraph: 'text-white font-medium text-sm leading-5',
//   active: '!text-[#FFC35C]',
//   specialOrder:
//     'w-[135px] h-[44px] flex justify-center items-center text-[#FFC35C] border-[1px] border-[#5F6B77] rounded-lg font-medium text-base leading-6 box-content',
//   navbarMobile: 'absolute top-0 left-0 w-full h-screen border-white border',
//   mobileDropdownItems:
//     'desktop:left-[-76px] laptop:left-[-50px] z-[2] desktop:w-[240px] laptop:w-[180px] mt-[20px]',
//   navbarMobileItem: 'px-[40px] flex flex-col gap-y-[24px]',
//   mobileDropdownItem:
//     'text-white h-[32px] bg-[#31373D] hover:bg-[#3D454C] hover:cursor-pointer pl-[24px] flex items-center',
//   mobileParagraph: 'text-white font-normal text-base',
//   closeMenu: 'w-full h-[76px] flex justify-end items-center px-[44px]',
//   mobileBottom: 'px-[40px] absolute bottom-[40px] w-full',
//   mobileTel: 'flex gap-[8px]  items-center text-[#FFC35C] text-xl',
//   mobileButtons:
//     'flex mobile-s:flex-wrap tablet:flex-nowrap gap-[24px] mt-[24px]',
//   mobilePrivateCabinet:
//     'w-full h-[44px] bg-[#49525B] flex justify-center items-center rounded-lg text-white text-base gap-[8px]',
//   mobileLang:
//     'w-full h-[44px] bg-[#49525B] flex justify-center items-center rounded-lg text-white text-base gap-[8px]',
// }
