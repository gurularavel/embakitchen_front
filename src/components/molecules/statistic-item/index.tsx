'use client'

import * as React from 'react'
import { twMerge } from 'tailwind-merge'
import { useScreenSize } from '~ek/hooks'
import { useClientStore } from '~ek/providers'
import type { StatisticEntry, StatisticsContext } from '~ek/types'
import { SCREENS } from '~ek/utils'

interface StatisticItemProps {
  context: StatisticsContext
  entry: StatisticEntry
  isLast: boolean
}

const statisticItemStyles: Readonly<TwClasses> = {
  statisticItem:
    'w-1/2 mobile:w-auto border-solid border-tertiary-9 odd:border-r mobile:odd:border-r-0 even:pl-5 mobile:even:pl-0',
  statisticItemContent: 'flex flex-col gap-y-[5px]',
  quantity:
    'text-3xl tablet:text-4xl leading-10 tablet:leading-15 text-primary-3 font-bold',
  label:
    'text-base tablet:text-xl leading-6 tablet:leading-7 text-tertiary-1 font-medium',
  line: 'hidden mobile:block w-px bg-tertiary-9',
}
const styles = statisticItemStyles as Readonly<StyleRecord>

export function StatisticItem({
  context,
  entry,
  isLast,
}: Readonly<StatisticItemProps>): React.ReactElement {
  const { width } = useScreenSize()
  const { isClientRendering } = useClientStore(state => state)
  const quantityColor = context === 'about' ? 'text-secondary-3' : ''
  const labelColor = context === 'about' ? 'text-gray-8' : ''

  return (
    <>
      <div className={styles.statisticItem}>
        <div className={styles.statisticItemContent}>
          <span
            className={twMerge(styles.quantity, quantityColor ?? '')}
            data-quantity={entry.quantity}
          >
            0
          </span>
          <span className={twMerge(styles.label, labelColor ?? '')}>
            {entry.label}
          </span>
        </div>
      </div>

      {isClientRendering && width >= SCREENS.mobile && !isLast && (
        <div className={styles.line}></div>
      )}
    </>
  )
}
