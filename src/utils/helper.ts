import type { LayoutOption } from '~ek/types'
import { STATISTICS_INTERVAL_LIMIT } from '~ek/utils'

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
      }, STATISTICS_INTERVAL_LIMIT / quantity)
    })
  }
}
