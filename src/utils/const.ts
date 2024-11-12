import type { ScreenBreakpoint } from '~ek/types'

export const SCREENS: Readonly<Record<ScreenBreakpoint, number>> = {
  compact: 375,
  mobile: 576,
  tablet: 768,
  laptop: 1024,
  desktop: 1440,
  widescreen: 1920,
}

export const DEFAULT_INTERSECTION_OBSERVER_OPTIONS: Readonly<IntersectionObserverInit> =
  {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  }

export const STATISTICS_SECTION_INTERVAL_LIMIT: number = 1500

interface LocalizedPathname {
  az: string
  ru: string
  en: string
}
export const LOCALIZED_PATHNAMES: Record<string, LocalizedPathname> = {
  '/about': {
    az: '/haqqımızda',
    ru: '/о-нас',
    en: '/about',
  },
  '/projects': {
    az: '/layihələr',
    ru: '/проекты',
    en: '/projects',
  },
  '/blogs': {
    az: '/bloqlar',
    ru: '/блоги',
    en: '/blogs',
  },
}

export const PROJECTS_QUANTITY_ON_BREAKPOINTS: Readonly<
  Record<ScreenBreakpoint, number>
> = {
  compact: 5,
  mobile: 5,
  tablet: 4,
  laptop: 9,
  desktop: 9,
  widescreen: 12,
}
