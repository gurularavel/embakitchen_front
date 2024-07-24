export const sidebarStyles: TailwindStyle = {
  container: 'flex',
  sidebarContent: (isSidebarVisible: unknown) =>
    `fixed top-0 right-0 bottom-0 left-0 z-10 bg-dark-gray-1 origin-top-left transition-all duration-500 ${(isSidebarVisible as boolean) ? 'scale-1 opacity-100' : 'scale-0 opacity-0'}`,
}
