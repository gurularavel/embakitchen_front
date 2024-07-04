import React from 'react'
import { OrderStageItem } from '@embakitchen/components'
import type { OrderStageEntry } from '@embakitchen/types'
import { orderStagesStyles } from '@embakitchen/components/OrderStages/OrderStages.style'

const stages: OrderStageEntry[] = [
  {
    title: 'Dizayn konsultasiya',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh elit, ultricies ut bibendum eget, efficitur et est.',
  },
  {
    title: 'Öz stilini seç',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh elit, ultricies ut bibendum eget, efficitur et est.',
  },
  {
    title: 'Mebelin qurulması',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh elit, ultricies ut bibendum eget, efficitur et est.',
  },
]

export const OrderStages: React.FC = () => {
  const styles: Dictionary<string> = orderStagesStyles as Dictionary<string>

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.stages}>
          {stages.map((stage: OrderStageEntry, i: number) => {
            const orderStageItemProps = {
              ...stage,
              row: i + 1,
            }

            return (
              <OrderStageItem
                key={i}
                {...orderStageItemProps}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
