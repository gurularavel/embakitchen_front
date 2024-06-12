'use client'

import React, { useEffect } from 'react'
import { StatisticsItem } from '@embakitchen/components'
import { updateStatisticsContainer } from '@embakitchen/utils'
import type { StatisticsEntry } from '@embakitchen/types'
import { statisticsStyles } from '@embakitchen/components/Statistics/Statistics.style'

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

export const Statistics: React.FC = () => {
  const styles: Dictionary<string> = statisticsStyles as Dictionary<string>

  useEffect(() => {
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
    <>
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
    </>
  )
}
