import { StatisticEntry } from '~ek/types'

interface StatisticItemProps {
  entry: StatisticEntry
}

const statisticItemStyles: Readonly<TwClasses> = {
  statisticItem: '',
  statisticItemContent: '',
  quantity: '',
  label:
    'text-base tablet:text-xl leading-6 tablet:leading-7 text-tertiary-1 font-medium',
}
const styles = statisticItemStyles as Readonly<StyleRecord>

export function StatisticItem({
  entry,
}: Readonly<StatisticItemProps>): React.ReactElement {
  return (
    <div className={styles.statisticItem}>
      <div className={styles.statisticItemContent}>
        <span className={styles.quantity}>0</span>
        <span className={styles.label}>{entry.label}</span>
      </div>
    </div>
  )
}

// interface Line {
//   row: number
//   isLast: boolean
// }

// interface StatisticsItemProps { line: Line }

// const statisticsItemStyles: Readonly<TailwindStyle> = {
//   container: (row: unknown) =>
//     `w-1/2 mobile:w-auto compact:flex compact:justify-center border-solid border-auxiliary-5 ${
//       (row as number) % 2 === 0
//         ? 'border-r mobile:border-r-0 pr-5 compact:pr-0'
//         : 'pl-5 compact:pl-0'
//     }`,
//   wrapper: 'flex flex-col',
//   quantity:
//     'text-3xl tablet:text-4xl leading-10 tablet:leading-15 text-primary-3 font-bold mb-1.25',
//   line: 'hidden mobile:block w-px bg-light-gray-1',
// }
// const getContainerStyles: StyleGetter = statisticsItemStyles.container as StyleGetter

//  line

//  <div
//    className={`statistics-container ${getContainerStyles(line.row)}`}
//    data-quantity={entry.quantity}
//  >
//    <div className={styles.wrapper}>
//      <span className={`statistics-quantity ${styles.quantity}`}>0</span>
//      <span className={styles.title}>{entry.title}</span>
//    </div>
//  </div>
//  {!line.isLast && <div className={styles.line}></div>}
