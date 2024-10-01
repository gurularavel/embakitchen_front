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
