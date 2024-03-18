import React from 'react'
import { StatisticItem, StatisticsProps } from '@embakitchen/components/statistics/types'
import { styles as statisticsStyles } from '@embakitchen/components/statistics/styles'

export const statisticItem: StatisticItem[] = [
  {
    id: 1,
    number: '30+',
    name: 'Çeşid',
  },
  {
    id: 2,
    number: '20+',
    name: 'Material',
  },
  {
    id: 3,
    number: '100+',
    name: 'Müştəri',
  },
  {
    id: 4,
    number: '200+',
    name: 'Layihə',
  },
]

export const Statistics: React.FC<StatisticsProps> = () => {
  const styles: Record<string, string> = statisticsStyles as Record<string, string>

  return (
    <section className={styles.statistics}>
      {statisticItem.map(item => (
        <div
          className={styles.statistic}
          key={item.id}
        >
          <span className={styles.number}>{item.number}</span>
          <span className={styles.name}>{item.name}</span>
        </div>
      ))}
    </section>
  )
}
