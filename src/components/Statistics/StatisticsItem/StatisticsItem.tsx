import React from 'react'
import type { StatisticsEntry } from '@embakitchen/types'
import { statisticsItemStyles } from '@embakitchen/components/Statistics/StatisticsItem/StatisticsItem.style'

interface Line {
  row: number
  isLast: boolean
}

interface StatisticsItemProps {
  entry: StatisticsEntry
  line: Line
}

export const StatisticsItem: React.FC<StatisticsItemProps> = ({
  entry,
  line,
}) => {
  const styles: Dictionary<string> = statisticsItemStyles as Dictionary<string>

  const getContainerStyles: (row: number) => string =
    statisticsItemStyles.container as (row: number) => string

  return (
    <>
      <div
        className={`statistics-container ${getContainerStyles(line.row)}`}
        data-quantity={entry.quantity}
      >
        <div className={styles.wrapper}>
          <span className={`statistics-quantity ${styles.quantity}`}>0</span>
          <span className={styles.title}>{entry.title}</span>
        </div>
      </div>
      {!line.isLast && <div className={styles.line}></div>}
    </>
  )
}
