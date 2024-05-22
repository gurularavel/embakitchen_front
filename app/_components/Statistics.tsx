'use client'

import React, { useEffect } from 'react'
import { statisticsStyles } from '@embakitchen/_styles'

interface StatisticsItem {
  id: number
  number: number
  name: string
}

export const statisticsItems: StatisticsItem[] = [
  {
    id: 1,
    number: 30,
    name: 'Çeşid',
  },
  {
    id: 2,
    number: 20,
    name: 'Material',
  },
  {
    id: 3,
    number: 100,
    name: 'Müştəri',
  },
  {
    id: 4,
    number: 200,
    name: 'Layihə',
  },
]

export const Statistics: React.FC = () => {
  const styles: Record<string, string> = statisticsStyles as Record<string, string>

  useEffect(() => {
    const counters = Array.from(document.querySelectorAll('.counter_number')) as HTMLElement[]

    const observerCallback = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver,
    ) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          counters.forEach((counter, i) => {
            let interval = setInterval(() => {
              if (parseInt(counter.textContent!) < statisticsItems[i].number) {
                counter.textContent = (parseInt(counter.textContent!) + 1).toString()
              } else {
                clearInterval(interval)
              }
            }, 1250 / statisticsItems[i].number)
            setTimeout(() => {
              counter.textContent += '+'
            }, 1250)
          })
          observer.unobserve(entry.target!)
        }
      })
    }

    let observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    })

    let target = document.querySelector('.counter-observer')
    if (target) {
      observer.observe(target)
    }
  }, [])

  return (
    <section className={styles.statistics}>
      {statisticsItems.map(item => (
        <div
          className={styles.statisticsItem}
          key={item.id}
        >
          <span className={`${styles.number} counter_number`}>0</span>
          <span className={styles.name}>{item.name}</span>
        </div>
      ))}
      <div className='counter-observer'></div>
    </section>
  )
}
