export const dropdownStyles: TailwindStyle = {
  container: '',
  dropdownToggler: (isOpen: unknown) =>
    `w-full mb-6 flex justify-between items-center text-base font-normal leading-6 text-white [&>img]:transition-transform [&>img]:duration-300 ${(isOpen as boolean) ? '[&>img]:rotate-180' : '[&>img]:rotate-0'}`,
  dropdownContent: (isOpen: unknown) =>
    `${(isOpen as boolean) ? 'block' : 'hidden'}`,
}
