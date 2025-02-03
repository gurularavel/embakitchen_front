'use client'

import * as React from 'react'
import type { Duration } from 'date-fns'
import { useTranslations } from 'next-intl'
import { useStore, useTimer } from '~ek/hooks'

interface TimerProps {
  end: Date
}

const timerStyles: Readonly<TwClasses> = {
  container:
    'h-14 w-full mobile:w-1/2 laptop:w-full desktop:w-1/2 flex justify-center items-center border border-solid border-gray-9',
  content:
    'text-base font-semibold leading-6 text-primary-1 whitespace-nowrap tabular-nums',
}
const styles = timerStyles as Readonly<StyleRecord>

const printDays = (days: number | undefined): string =>
  days ? `${days} gün` : ''

const getTimePartial = (number: number | undefined): string =>
  `${number ?? 0}`.padStart(2, '0')

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

export function Timer({
  end,
}: Readonly<TimerProps>): React.ReactElement | null {
  const duration = useTimer({ end })
  const { isClientRendering } = useStore(state => state.clientSlice)
  const t = useTranslations('texts')
  const isCampaignFinished =
    !Object.keys(duration).length ||
    Object.values(duration).some((value: number) => value < 0)

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {isClientRendering &&
          (isCampaignFinished ? (
            <span>{t('campaignFinished')}</span>
          ) : (
            printDuration(duration)
          ))}
      </div>
    </div>
  )
}
