import { StatisticItem } from '~ek/components'
import type { StatisticEntry } from '~ek/types'

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
  statistics: '',
  statisticsContent: '', // w-full laptop:max-w-4xl desktop:max-w-[1096px] widescreen:max-w-[1461px] laptop:mx-auto mb-6 laptop:mb-8 flex flex-wrap mobile:flex-nowrap mobile:justify-between mobile:items-stretch gap-y-6 px-10 mobile:px-15
}
const styles = statisticsStyles as Readonly<StyleRecord>

export function Statistics(): React.ReactElement {
  return (
    <div className={styles.statistics}>
      <div className={styles.statisticsContent}>
        {statisticItems.map((item: StatisticEntry) => (
          <StatisticItem
            key={item.label}
            entry={item}
          />
        ))}
      </div>

      <div className='statistics-observer'></div>
    </div>
  )
}

// 'use client'

// import * as React from 'react'
// import { updateStatisticsContainer } from '~ek/utils'

// export function Statistics(): ReactComponent {
//   React.useEffect(() => {
//     const containers: HTMLElement[] = Array.from(
//       document.querySelectorAll('.statistics-container'),
//     )

//     const statisticsObserverCallback = (
//       entries: IntersectionObserverEntry[],
//       observer: IntersectionObserver,
//     ) => {
//       const [entry] = entries

//       if (entry.isIntersecting) {
//         containers.forEach((container: HTMLElement) => {
//           updateStatisticsContainer(container)
//         })
//         observer.unobserve(entry.target)
//       }
//     }

//     const statisticsObserver = new IntersectionObserver(
//       statisticsObserverCallback,
//       {
//         root: null,
//         rootMargin: '0px',
//         threshold: 1.0,
//       },
//     )

//     const target = document.querySelector('.statistics-observer')
//     if (target) {
//       statisticsObserver.observe(target)
//     }

//     return () => statisticsObserver.disconnect()
//   }, [])

//             line={{
//               row: i,
//               isLast: i === statisticsItems.length - 1,
//             }}
