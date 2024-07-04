import React from 'react'
import type { OrderStageEntry } from '@embakitchen/types'
import { orderStageItemStyles } from '@embakitchen/components/OrderStages/OrderStageItem/OrderStageItem.style'

interface OrderStageItemProps extends OrderStageEntry {
  row: number
}

export const OrderStageItem: React.FC<OrderStageItemProps> = ({
  title,
  description,
  row,
}) => {
  const styles: Dictionary<string> = orderStageItemStyles as Dictionary<string>

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <span className={`stage-number ${styles.row}`}>0{row}</span>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}
