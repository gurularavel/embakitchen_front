import React from 'react'
import type { StatisticsEntry } from '@embakitchen/_types'
import { statisticsItemStyles } from '@embakitchen/_components/Statistics/StatisticsItem/StatisticsItem.style'

export const StatisticsItem: React.FC<StatisticsEntry> = ({
  quantity,
  title,
}) => {
  const styles: StringPair = statisticsItemStyles as StringPair

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span className={styles.quantity}>{quantity}+</span>
        <span className={styles.title}>{title}</span>
      </div>
    </div>
  )
}
