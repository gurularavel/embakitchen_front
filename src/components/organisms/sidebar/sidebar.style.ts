export const sidebarStyles: TailwindStyle = {
  container: 'flex',
  sidebarContent: (isSidebarVisible: unknown) =>
    `p-10 fixed top-0 right-0 bottom-0 left-0 z-10 bg-dark-gray-1 origin-top-left transition-all duration-300 ease-in ${(isSidebarVisible as boolean) ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`,
  closeBtnWrapper: 'h-6 mb-6 flex justify-end',
}
