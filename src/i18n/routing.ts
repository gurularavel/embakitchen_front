import { defineRouting } from 'next-intl/routing'
import { createSharedPathnamesNavigation } from 'next-intl/navigation'

export const routing = defineRouting({
  locales: ['az', 'ru', 'en'],
  defaultLocale: 'az',
})

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing)
