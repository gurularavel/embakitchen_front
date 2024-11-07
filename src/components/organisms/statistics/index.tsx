'use client'

import * as React from 'react'
import { useLocale } from 'next-intl'
import { StatisticItem } from '~ek/components'
import { useInView } from '~ek/hooks'
import type { Language, StatisticEntry, StatisticsContext } from '~ek/types'
import {
  DEFAULT_INTERSECTION_OBSERVER_OPTIONS,
  statisticsObserverCallback,
} from '~ek/utils'

interface StatisticsProps {
  context: StatisticsContext
}

const statisticsStyles: Readonly<TwClasses> = {
  home: {
    statistics:
      'w-full laptop:max-w-4xl desktop:max-w-[1096px] widescreen:max-w-[1461px] laptop:mx-auto mb-6 laptop:mb-8 px-10 mobile:px-15 flex flex-wrap mobile:flex-nowrap mobile:justify-between mobile:items-stretch gap-y-6',
  },
  about: {
    statistics:
      'flex flex-wrap mobile:flex-nowrap justify-between gap-[49px] pt-[50px] tablet:pt-0 px-8 tablet:px-[72px] desktop:max-w-[1096px] desktop:mx-auto',
  },
}

export function Statistics({
  context,
}: Readonly<StatisticsProps>): React.ReactElement {
  const locale = useLocale() as `${Language}`
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
  const [statisticItems, setStatisticItems] = React.useState<StatisticEntry[]>(
    [],
  )

  const styles = statisticsStyles[context] as Readonly<StyleRecord>

  React.useEffect(() => {
    async function getStatisticsData() {
      const response = await fetch(
        'https://embakitchen.kvadrat.az/api/counters?status=true',
      )
      const { data } = await response.json()
      setStatisticItems(
        data.map((d: StatisticEntry<Language>) => ({
          ...d,
          title: d.title![locale as `${Language}`],
        })),
      )
    }
    getStatisticsData()
  }, [locale])

  return (
    <div
      ref={statisticsRef}
      className={`statistics ${styles.statistics}`}
    >
      {statisticItems.map((item: StatisticEntry, i: number) => (
        <StatisticItem
          key={item.id}
          entry={item}
          isLast={i === statisticItems.length - 1}
          context={context}
        />
      ))}
    </div>
  )
}
