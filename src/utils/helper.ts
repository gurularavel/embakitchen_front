import { Modal } from 'antd'
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

const isMultilingualText = (obj: unknown): boolean => {
  const languageKeys = new Set(Object.values(Language))

  if (!Array.isArray(obj) && typeof obj === 'object' && obj !== null) {
    return Object.entries(obj).every(
      ([key, value]) =>
        languageKeys.has(key as Language) && typeof value === 'string',
    )
  }

  return false
}

const isMediaFile = (value: unknown): boolean => {
  if (
    Array.isArray(value) &&
    typeof value[0] === 'object' &&
    value[0] !== null
  ) {
    return 'original_url' in value[0]
  }

  return false
}

const isNestedObject = (value: unknown): value is Record<string, unknown> => {
  return (
    typeof value === 'object' && value !== null && !isMultilingualText(value)
  )
}

export const setUiData = (value: unknown, locale: Language): unknown => {
  if (isMultilingualText(value)) {
    return (value as MultilingualText<Language>)[locale]
  } else if (isMediaFile(value)) {
    return (value as [MediaFile])[0]
  } else if (isNestedObject(value)) {
    if (Array.isArray(value)) {
      return value.map((v: MultilingualText<Language>) => {
        if (v[locale]) {
          return v[locale]
        }

        return transformToUiData(v, locale)
      })
    }

    return transformToUiData(value, locale)
  }

  return value
}

export const transformToUiData = (data: object, locale: Language): object => {
  if (Array.isArray(data)) {
    return data.map(d => setUiData(d, locale))
  }

  return Object.entries(data).reduce(
    (result, [key, value]) => ({
      ...result,
      [key]: setUiData(value, locale),
    }),
    {},
  )
}

interface OmitParams<T> {
  source: T
  fields: (keyof T)[]
}
export const omit = <T>({
  source,
  fields,
}: OmitParams<T>): Omit<T, keyof T> => {
  if (!source || !fields || !Array.isArray(fields)) {
    throw new Error(
      'Invalid input: Source object and fields array are required.',
    )
  }

  const sourceArrayWithOmittedKeys = Object.entries(source).filter(
    ([key]) => !fields.includes(key as keyof T),
  )
  return Object.fromEntries(sourceArrayWithOmittedKeys) as Omit<T, keyof T>
}

export const removeBrowserAuthData = (): void => {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  const paths = ['/', '/az', '/ru', '/en']
  paths.forEach(
    path =>
      (document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path};`),
  )
}

type ConfirmModalOptions = {
  title: string
  onOk: VoidFunction
  onCancel?: VoidFunction
  okText?: string
  cancelText?: string
}
export function confirmModal({
  title,
  onOk,
  onCancel,
  okText,
  cancelText,
}: ConfirmModalOptions): void {
  Modal.confirm({
    title,
    okText,
    cancelText,
    onOk,
    onCancel,
    okButtonProps: {
      style: {
        backgroundColor: '#E55E25',
      },
    },
    cancelButtonProps: {
      style: {
        borderColor: '#E55E25',
        color: '#49525B',
      },
    },
  })
}
