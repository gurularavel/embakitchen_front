'use client'

import * as React from 'react'
import { StatisticItem } from '~ek/components'
import { useInView } from '~ek/hooks'
import type { StatisticEntry, StatisticsContext } from '~ek/types'
import {
  DEFAULT_INTERSECTION_OBSERVER_OPTIONS,
  statisticsObserverCallback,
} from '~ek/utils'

interface StatisticsProps {
  context: StatisticsContext
}

const statisticItems: StatisticEntry[] = [
  {
    quantity: 30,
    label: 'Çeşid',
  },
  {
    quantity: 20,
    label: 'Material',
  },
  {
    quantity: 100,
    label: 'Müştəri',
  },
  {
    quantity: 200,
    label: 'Layihə',
  },
]

const statisticsStyles: Readonly<TwClasses> = {
  home: {
    statistics:
      'w-full laptop:max-w-4xl desktop:max-w-[1096px] widescreen:max-w-[1461px] laptop:mx-auto mb-6 laptop:mb-8 px-10 mobile:px-15 flex flex-wrap mobile:flex-nowrap mobile:justify-between mobile:items-stretch gap-y-6',
  },
  about: {
    statistics: '',
  },
}

export function Statistics({
  context,
}: Readonly<StatisticsProps>): React.ReactElement {
  const statisticsRef = React.useRef<HTMLDivElement | null>(null)
  useInView({
    ref: statisticsRef,
    cb: () => statisticsObserverCallback(statisticsRef.current),
    options: {
      ...DEFAULT_INTERSECTION_OBSERVER_OPTIONS,
      threshold: 0.15,
    },
    shouldUnobserve: true,
  })
  const styles = statisticsStyles[context] as Readonly<StyleRecord>

  return (
    <div
      ref={statisticsRef}
      className={`statistics ${styles.statistics}`}
    >
      {statisticItems.map((item: StatisticEntry, i: number) => (
        <StatisticItem
          key={item.label}
          entry={item}
          isLast={i === statisticItems.length - 1}
          context={context}
        />
      ))}
    </div>
  )
}
