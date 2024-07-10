'use client'

import React, { useEffect, useState } from 'react'
import { intervalToDuration, Duration } from 'date-fns'
import { timerStyles } from '@embakitchen/components/Campaigns/CampaignItem/Timer/Timer.style'

interface TimerProps {
  endDate: string | Date
}

export const Timer: React.FC<TimerProps> = ({ endDate }) => {
  const styles: Dictionary<string> = timerStyles as Dictionary<string>

  const initialDuration: Duration = intervalToDuration({
    start: new Date(),
    end: endDate,
  })
  const [duration, setDuration] = useState<Duration>(initialDuration)
  const [isClient, setIsClient] = useState<boolean>(false)

  useEffect(() => {
    setIsClient(true)

    const interval = setInterval(() => {
      setDuration(
        intervalToDuration({
          start: new Date(),
          end: endDate,
        }),
      )
    }, 1000)

    return () => clearInterval(interval)
  }, [endDate])

  return (
    <div className={styles.timer}>
      <span className={styles.text}>
        {isClient &&
          `${duration.days} gün ${duration.hours}:${duration.minutes}:${duration.seconds}`}
      </span>
    </div>
  )
}
