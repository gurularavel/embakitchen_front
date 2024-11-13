import type { LayoutOption, ScreenBreakpoint } from '~ek/types'
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
