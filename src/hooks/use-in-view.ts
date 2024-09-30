import * as React from 'react'
import { DEFAULT_INTERSECTION_OBSERVER_OPTIONS } from '~ek/utils'

interface UseInViewParams {
  ref: React.RefObject<HTMLElement>
  cb: () => void
  options?: IntersectionObserverInit
  shouldUnobserve?: boolean
}

export function useInView({
  ref,
  cb,
  options = DEFAULT_INTERSECTION_OBSERVER_OPTIONS,
  shouldUnobserve,
}: UseInViewParams): void {
  React.useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry], observer: IntersectionObserver) => {
        if (entry.isIntersecting) {
          cb()

          if (shouldUnobserve) {
            observer.unobserve(entry.target)
          }
        }
      },
      options,
    )

    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [ref, options, cb, shouldUnobserve])
}
