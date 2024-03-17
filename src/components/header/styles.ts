import { ITailwindStyles } from '@embakitchen/types'

export const styles: ITailwindStyles = {
  header:
    'bg-[#31373D] desktop:px-[100px] min-[1200px]:px-[30px] min-mobile:px-[20px] h-[76px] flex justify-between',
  left: 'flex items-center h-full desktop:gap-x-[70px] min-[1200px]:gap-x-[50px] laptop:gap-x-[5px]',
  logo: 'mt-[-10px]',
  logoImg: 'max-w-unset',
  right: 'flex items-center gap-x-[20px]',
  tel: 'flex items-center gap-x-[8px] text-[#FFC35C] text-[20px] leading-[30px] font-medium',
  privateCabinet:
    'w-[187px] h-[44px] min-mobile:hidden laptop:flex justify-center items-center text-white gap-x-[8px] bg-[#49525B] rounded-lg',
  mobileMenu: 'laptop:hidden h-full min-mobile:w-[50px] mobile:w-[90px] flex items-center',
}
