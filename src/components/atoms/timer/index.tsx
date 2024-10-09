'use client'

import * as React from 'react'
import { Duration, intervalToDuration } from 'date-fns'

interface TimerProps {
  start: string | Date
  end: string | Date
}

const timerStyles: Readonly<TwClasses> = {}
const styles = timerStyles as Readonly<StyleRecord>

export function Timer({
  start,
  end,
}: Readonly<TimerProps>): React.ReactElement {
  const initialDuration: Duration = intervalToDuration({
    start: new Date(start),
    end: new Date(end),
  })
  const [duration, setDuration] = React.useState<Duration>(initialDuration)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setDuration(
        intervalToDuration({
          start,
          end,
        }),
      )
    }, 1000)

    return () => clearInterval(interval)
  }, [start, end])

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p>
          {duration.days} gün {duration.hours}:{duration.minutes}:
          {duration.seconds}
        </p>
      </div>
    </div>
  )
}
