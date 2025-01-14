import * as React from 'react'
import { intervalToDuration, type Duration } from 'date-fns'

interface UseTimerParams {
  end: Date
}

export function useTimer({ end }: UseTimerParams): Duration {
  const [duration, setDuration] = React.useState<Duration>(() =>
    intervalToDuration({ start: new Date(), end }),
  )

  React.useEffect(() => {
    const interval = setInterval(() => {
      const newDuration = intervalToDuration({
        start: new Date(),
        end,
      })
      setDuration(newDuration)
    }, 1000)

    return () => clearInterval(interval)
  }, [end])

  return duration
}
