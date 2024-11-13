import {
  Language,
  type MediaFile,
  type MultilingualText,
  type LayoutOption,
  type ScreenBreakpoint,
} from '~ek/types'
import {
  PROJECTS_QUANTITY_ON_BREAKPOINTS,
  SCREENS,
  STATISTICS_SECTION_INTERVAL_LIMIT,
} from '~ek/utils'

export const getGapProperty = (
  layout: LayoutOption,
): keyof React.CSSProperties => {
  return layout === 'horizontal' ? 'columnGap' : 'rowGap'
}

export const statisticsObserverCallback = (
  container: HTMLElement | null,
): void => {
  if (container) {
    const statisticQuantityWrappers: HTMLElement[] = Array.from(
      container.querySelectorAll('[data-quantity]'),
    )

    statisticQuantityWrappers.forEach((wrapper: HTMLElement) => {
      const quantity: number = +wrapper.dataset.quantity!

      const interval: ReturnType<typeof setInterval> = setInterval(() => {
        if (+wrapper.textContent! < quantity) {
          wrapper.textContent = (+wrapper.textContent! + 1).toString()
        } else {
          if (!wrapper.textContent?.includes('+')) {
            wrapper.textContent += '+'
          }
          clearInterval(interval)
        }
      }, STATISTICS_SECTION_INTERVAL_LIMIT / quantity)
    })
  }
}

export const getProjectsQuantity = (width: number): number => {
  let selectedQuantity: number = 5

  for (const [breakpoint, quantity] of Object.entries(
    PROJECTS_QUANTITY_ON_BREAKPOINTS,
  )) {
    if (width >= SCREENS[breakpoint as ScreenBreakpoint]) {
      selectedQuantity = quantity
    } else {
      break
    }
  }

  return selectedQuantity
}

export const updatePrimitiveState = <T extends boolean | number | string>(
  newState: T,
  setter: (newState: T) => void,
): void => setter(newState)

export const isMultilingualText = (obj: unknown): boolean => {
  const languageKeys = new Set(Object.values(Language))

  if (typeof obj === 'object' && obj !== null) {
    return Object.entries(obj).every(
      ([key, value]) =>
        languageKeys.has(key as Language) && typeof value === 'string',
    )
  }

  return false
}

export const isMediaFile = (value: unknown): boolean => {
  if (
    Array.isArray(value) &&
    typeof value[0] === 'object' &&
    value[0] !== null
  ) {
    return 'original_url' in value[0]
  }

  return false
}

export const setUiData = (value: unknown, locale: Language) => {
  if (isMultilingualText(value)) {
    return (value as MultilingualText<Language>)[locale]
  } else if (isMediaFile(value)) {
    return (value as [MediaFile])[0]
  }

  return value
}

export const transformToUiData = (data: object, locale: Language): unknown => {
  return Object.entries(data).reduce(
    (result, [key, value]) => ({
      ...result,
      [key]: setUiData(value, locale),
    }),
    {},
  )
}
