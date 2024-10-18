import { defineRouting } from 'next-intl/routing'
import { createSharedPathnamesNavigation } from 'next-intl/navigation'
import { Language } from '~ek/types'

export const routing = defineRouting({
  locales: Object.values(Language),
  defaultLocale: Language.Azerbaijani,
})

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing)
