import { defineRouting } from 'next-intl/routing'
import { createSharedPathnamesNavigation } from 'next-intl/navigation'
import { Language } from '~ek/types'
import { LOCALIZED_PATHNAMES } from '~ek/utils'

export const routing = defineRouting({
  locales: Object.values(Language),
  defaultLocale: Language.Azerbaijani,
  pathnames: LOCALIZED_PATHNAMES,
})

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing)
