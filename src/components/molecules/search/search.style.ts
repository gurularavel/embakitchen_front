export const searchStyles: TailwindStyle = {
  container: (isSearchShown: unknown) =>
    `h-11 bg-light-gray-4 absolute left-0 right-0 flex gap-x-2 px-3.5 rounded-lg transition-all duration-300 ${isSearchShown ? 'scale-1 top-14 opacity-100' : 'scale-0 -top-full opacity-0'}`,
  input:
    'placeholder:text-light-gray-10 placeholder:font-normal placeholder:text-sm text-light-gray-10',
}
