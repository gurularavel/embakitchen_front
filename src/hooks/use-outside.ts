import * as React from 'react'

export function useClickOutside(
  selector: string,
  callback: () => void,
  isActive: boolean,
) {
  React.useEffect(() => {
    if (!isActive) return

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!document.querySelector(selector)?.contains(target)) {
        callback()
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isActive, selector, callback])
}
