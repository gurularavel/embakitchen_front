'use client'

import React, { useEffect } from 'react'
import { StatisticsItem } from '@embakitchen/_components'
import type { StatisticsEntry } from '@embakitchen/_types'
import { statisticsStyles } from '@embakitchen/_components/Statistics/Statistics.style'

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
  const styles: StringPair = statisticsStyles as StringPair

  // useEffect(() => {
  //   const counters = Array.from(
  //     document.querySelectorAll('.counter_number'),
  //   ) as HTMLElement[]

  //   const observerCallback = (
  //     entries: IntersectionObserverEntry[],
  //     observer: IntersectionObserver,
  //   ) => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         counters.forEach((counter, i) => {
  //           let interval = setInterval(() => {
  //             if (parseInt(counter.textContent!) < statisticsItems[i].number) {
  //               counter.textContent = (
  //                 parseInt(counter.textContent!) + 1
  //               ).toString()
  //             } else {
  //               clearInterval(interval)
  //             }
  //           }, 1250 / statisticsItems[i].number)
  //           setTimeout(() => {
  //             counter.textContent += '+'
  //           }, 1250)
  //         })
  //         observer.unobserve(entry.target!)
  //       }
  //     })
  //   }

  //   let observer = new IntersectionObserver(observerCallback, {
  //     root: null,
  //     rootMargin: '0px',
  //     threshold: 1.0,
  //   })

  //   let target = document.querySelector('.counter-observer')
  //   if (target) {
  //     observer.observe(target)
  //   }
  // }, [])

  // return (
  //     {statisticsItems.map(item => (
  //       <div
  //         className={styles.statisticsItem}
  //         key={item.id}
  //       >
  //         <span className={`${styles.number} counter_number`}>0</span>
  //         <span className={styles.name}>{item.name}</span>
  //       </div>
  //     ))}
  //     <div className='counter-observer'></div>
  // )

  return (
    <div
      className={styles.wrapper}
      style={{ border: '3px solid blue' }}
    >
      {statisticsItems?.map((item, i) => (
        <StatisticsItem
          key={i}
          quantity={item.quantity}
          title={item.title}
        />
      ))}
    </div>
  )
}
