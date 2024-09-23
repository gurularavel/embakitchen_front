'use client'

import * as React from 'react'
import { StatisticsItem } from '~ek/components'
import { StatisticsEntry } from '~ek/types'
import { updateStatisticsContainer } from '~ek/utils'

export const statisticsStyles: Readonly<TailwindStyle> = {
  wrapper:
    'w-full laptop:max-w-4xl desktop:max-w-[1096px] widescreen:max-w-[1461px] laptop:mx-auto mb-6 laptop:mb-8 flex flex-wrap mobile:flex-nowrap mobile:justify-between mobile:items-stretch gap-y-6 px-10 mobile:px-15',
}
const styles = statisticsStyles as Readonly<StyleRecord>

const statisticsItems: StatisticsEntry[] = [
  {
    quantity: 30,
    title: 'Çeşid',
  },
  {
    quantity: 20,
    title: 'Material',
  },
  {
    quantity: 100,
    title: 'Müştəri',
  },
  {
    quantity: 200,
    title: 'Layihə',
  },
]

export function Statistics(): ReactComponent {
  React.useEffect(() => {
    const containers: HTMLElement[] = Array.from(
      document.querySelectorAll('.statistics-container'),
    )

    const statisticsObserverCallback = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver,
    ) => {
      const [entry] = entries

      if (entry.isIntersecting) {
        containers.forEach((container: HTMLElement) => {
          updateStatisticsContainer(container)
        })
        observer.unobserve(entry.target)
      }
    }

    const statisticsObserver = new IntersectionObserver(
      statisticsObserverCallback,
      {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
      },
    )

    const target = document.querySelector('.statistics-observer')
    if (target) {
      statisticsObserver.observe(target)
    }

    return () => statisticsObserver.disconnect()
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {statisticsItems?.map((item, i) => (
          <StatisticsItem
            key={i}
            entry={item}
            line={{
              row: i,
              isLast: i === statisticsItems.length - 1,
            }}
          />
        ))}
      </div>
      <div className='statistics-observer'></div>
    </div>
  )
}
