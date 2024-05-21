import { TailwindStyles } from '@embakitchen/_types'

export const headerStyles: TailwindStyles = {
  header:
    'relative bg-[#31373D] desktop:px-[100px] min-[1200px]:px-[30px] mobile-s:px-[20px] mobile-s:h-screen laptop:h-[76px] flex justify-between tablet:text-sm laptop:text-base',
  left: 'flex items-center h-full desktop:gap-x-[70px] min-[1200px]:gap-x-[50px] laptop:gap-x-[5px]',
  logo: 'mobile-s:hidden laptop:inline-block mt-[-10px] w-[158px] h-[27px] relative',
  right: 'flex items-center gap-x-[20px]',
  tel: 'mobile-s:hidden laptop:flex items-center gap-x-[8px] text-[#FFC35C] text-[20px] leading-[30px] font-medium',
  search: 'mobile-s:hidden laptop:flex justify-center items-center',
  lang: 'laptop:w-[50px] desktop:w-[67px] h-[44px] mobile-s:hidden min-[1150px]:flex justify-center items-center text-white laptop:gap-x-[1px] desktop:gap-x-[8px] bg-[#49525B] rounded-lg',
  privateCabinet:
    'laptop:w-[150px] desktop:w-[187px] h-[44px] mobile-s:hidden min-[1150px]:flex justify-center items-center text-white gap-x-[8px] bg-[#49525B] rounded-lg',
  mobileMenuBtn: 'mobile-s:hidden laptop:inline-block',
  mobileMenu: 'laptop:hidden h-full mobile-s:w-[50px] mobile:w-[90px] flex items-center',
}
