import * as React from 'react'
import type { ScreenSize, TimeoutId } from '~ek/types'

/**
 * @description Custom hook to track current screen size with debounced resizing
 * @returns ({ width: number, height: number }) - Current screen width and height
 */
export function useScreenSize(): ScreenSize {
  const [screenSize, setScreenSize] = React.useState<ScreenSize>({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  })

  React.useEffect(() => {
    if (typeof window === 'undefined') return

    let timeoutId: TimeoutId = null

    const handleResize = (): void => {
      if (timeoutId) clearTimeout(timeoutId)

      timeoutId = setTimeout(() => {
        setScreenSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }, 200)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      if (timeoutId) clearTimeout(timeoutId)

      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return screenSize
}
