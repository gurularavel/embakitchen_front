import type { OrderStageEntry } from '~ek/types'

export interface OrderStageItemProps extends OrderStageEntry {
  position: number
}

const orderStageItemStyles: Readonly<TwClasses> = {
  container:
    'group py-14 px-4 desktop:px-16 flex-1 flex flex-col justify-end cursor-pointer border-solid border-b border-white laptop:border-b-0 laptop:border-r laptop:last:border-r-0 overflow-y-hidden',
  content:
    'overflow-y-hidden flex flex-col gap-y-4 transition-transform duration-300 translate-y-0 laptop:translate-y-[calc(100%-174px)] laptop:group-hover:translate-y-0',
  position: 'text-[100px] font-semibold leading-[121.9px]',
  title:
    'text-2xl desktop:text-2.5xl font-semibold text-white laptop:leading-9',
  description:
    'text-sm font-medium leading-6 text-tertiary-11 transition-transform duration-300 translate-y-0 laptop:translate-y-full laptop:group-hover:translate-y-0',
}
const styles = orderStageItemStyles as Readonly<StyleRecord>

export function OrderStageItem({
  title,
  content,
  position,
}: Readonly<OrderStageItemProps>): React.ReactElement {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <span className={`order-stage-position ${styles.position}`}>
          0{position}
        </span>
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.description}>{content}</p>
      </div>
    </div>
  )
}
