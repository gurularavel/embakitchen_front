import { TailwindStyles } from '@embakitchen/types'

export const styles: TailwindStyles = {
  navbar: 'mobile-s:hidden laptop:flex gap-x-[16px] items-center',
  navbarItem: 'flex gap-x-[2px] relative hover:cursor-pointer',
  dropdownItems:
    'absolute top-[48px] desktop:left-[-76px] laptop:left-[-50px] z-[2] desktop:w-[240px] laptop:w-[180px]',
  dropdownItem:
    'text-white h-[72px] bg-[#31373D] hover:bg-[#3D454C] hover:cursor-pointer pl-[24px] flex items-center',
  dropdownParagraph: 'leading-[24px]',
  paragraph: 'text-white font-medium text-sm leading-5',
  active: '!text-[#FFC35C]',
  specialOrder:
    'w-[135px] h-[44px] flex justify-center items-center text-[#FFC35C] border-[1px] border-[#5F6B77] rounded-lg font-medium text-base leading-6 box-content',
}
