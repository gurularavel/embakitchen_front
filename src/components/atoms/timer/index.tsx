'use client'

import * as React from 'react'
import type { Duration } from 'date-fns'
import { useTimer } from '~ek/hooks'
import { useClientStore } from '~ek/providers'

const printDays = (days: number | undefined): string =>
  days ? `${days} gün` : ''

const getTimePartial = (number: number | undefined): string =>
  number ? `${number >= 10 ? number : `0${number}`}` : '00'

const printTime = (duration: Duration): string => {
  const { hours, minutes, seconds } = duration
  return [hours, minutes, seconds].map(getTimePartial).join(':')
}

const printDuration = (duration: Duration): JSX.Element => {
  return (
    <p>
      {printDays(duration.days)} {printTime(duration)}
    </p>
  )
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
  const duration = useTimer({ end })
  const { isClientRendering } = useClientStore(state => state)

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {isClientRendering && printDuration(duration)}
      </div>
    </div>
  )
}
