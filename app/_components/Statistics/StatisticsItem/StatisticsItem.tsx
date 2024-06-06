import React from 'react'
import type { StatisticsEntry } from '@embakitchen/_types'
import { statisticsItemStyles } from '@embakitchen/_components/Statistics/StatisticsItem/StatisticsItem.style'

interface StatisticsItemProps {
  entry: StatisticsEntry
  isLast: boolean
}

export const StatisticsItem: React.FC<StatisticsItemProps> = ({
  entry,
  isLast,
}) => {
  const styles: StringPair = statisticsItemStyles as StringPair

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <span className={styles.quantity}>{entry?.quantity}+</span>
          <span className={styles.title}>{entry?.title}</span>
        </div>
      </div>
      {!isLast && <div className={styles.line}></div>}
    </>
  )
}
