import { StatisticEntry } from '~ek/types'

interface Line {
  isLast: boolean
}

interface StatisticItemProps {
  entry: StatisticEntry
  line: Line
}

const statisticItemStyles: Readonly<TwClasses> = {
  statisticItem: 'w-1/2 mobile:w-auto ',
  statisticItemContent: 'flex flex-col gap-y-[5px]',
  quantity:
    'text-3xl tablet:text-4xl leading-10 tablet:leading-15 text-primary-3 font-bold ',
  label:
    'text-base tablet:text-xl leading-6 tablet:leading-7 text-tertiary-1 font-medium',
  line: 'hidden mobile:block',
}
const styles = statisticItemStyles as Readonly<StyleRecord>

export function StatisticItem({
  entry,
  line,
}: Readonly<StatisticItemProps>): React.ReactElement {
  return (
    <>
      <div className={styles.statisticItem}>
        <div className={styles.statisticItemContent}>
          <span className={styles.quantity}>{entry.quantity} +</span>
          <span className={styles.label}>{entry.label}</span>
        </div>
      </div>

      {!line.isLast && (
        <div
          className={styles.line}
          style={{ width: 2, backgroundColor: 'red' }}
        ></div>
      )}
    </>
  )
}

// interface Line {
//   row: number
// }

// const statisticsItemStyles: Readonly<TailwindStyle> = {
//   container: (row: unknown) =>
//     `compact:flex compact:justify-center border-solid border-auxiliary-5 ${
//       (row as number) % 2 === 0
//         ? 'border-r mobile:border-r-0 pr-5 compact:pr-0'
//         : 'pl-5 compact:pl-0'
//     }`,
//   line: 'w-px bg-light-gray-1',
// }
// const getContainerStyles: StyleGetter = statisticsItemStyles.container as StyleGetter

//  <div
//    className={`statistics-container ${getContainerStyles(line.row)}`}
//    data-quantity={entry.quantity}
//  >
//    <div className={styles.wrapper}>
//      <span className={`statistics-quantity ${styles.quantity}`}>0</span>
//      <span className={styles.title}>{entry.title}</span>
//    </div>
//  </div>
