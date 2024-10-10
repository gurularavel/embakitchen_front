'use client'

import * as React from 'react'
import { useTimer } from '~ek/hooks'

const printTime = (number: number | undefined, isDay?: boolean): string => {
  if (isDay) {
    return number ? `${number} gün` : ''
  }

  return number ? `${number >= 10 ? number : `0${number}`}` : '00'
}

interface TimerProps {
  end: Date
}

const timerStyles: Readonly<TwClasses> = {
  container:
    'h-14 w-full mobile:w-1/2 laptop:w-full desktop:w-1/2 flex items-center border border-solid border-gray-9 px-6',
  content:
    'text-base font-semibold leading-6 text-primary-1 whitespace-nowrap tabular-nums',
}
const styles = timerStyles as Readonly<StyleRecord>

export function Timer({ end }: Readonly<TimerProps>): React.ReactElement {
  const [isClient, setIsClient] = React.useState<boolean>(false)
  const duration = useTimer({ end })

  React.useEffect(() => setIsClient(true), [])

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {isClient && (
          <p>
            {printTime(duration.days, true)}&nbsp;
            {printTime(duration.hours)}:{printTime(duration.minutes)}:
            {printTime(duration.seconds)}
          </p>
        )}
      </div>
    </div>
  )
}
