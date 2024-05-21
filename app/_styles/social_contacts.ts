import type { TailwindStyles } from '@embakitchen/_types'

export const socialContactsStyles: TailwindStyles = {
  wrapper: 'absolute right-[100px] top-1/2 -translate-y-1/2 z-10',
  layout: layout => `flex ${layout === 'horizontal' ? '' : 'flex-col gap-y-3'}`,
  link: 'flex items-center justify-center w-10 h-10 rounded bg-half-white',
  icon: 'w-6 h-6',
}
