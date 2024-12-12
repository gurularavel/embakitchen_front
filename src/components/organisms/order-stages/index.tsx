import { OrderStageItem, type OrderStageItemProps } from '~ek/components'

interface OrderStageEntry {
  title: string
  content: string
}

interface OrderStagesProps {
  orderStages: OrderStageEntry[]
}

const orderStagesStyles: Readonly<TwClasses> = {
  container:
    'h-[2226px] laptop:h-[680px] mb-6 laptop:mb-25 mx-0 laptop:mx-15 widescreen:mx-0 bg-order-stages-section bg-no-repeat bg-cover bg-black/20',
  wrapper:
    'h-full px-4 tablet:px-10 laptop:px-0 widescreen:px-25 pb-[186px] tablet:pb-[93px] laptop:pb-0',
  stages:
    'h-full flex flex-col laptop:flex-row justify-stretch gap-x-0 widescreen:gap-x-[200px]',
}
const styles = orderStagesStyles as Readonly<StyleRecord>

export function OrderStages({
  orderStages,
}: Readonly<OrderStagesProps>): React.ReactElement {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.stages}>
          {orderStages.map((stage: OrderStageEntry, i: number) => {
            const orderStageItemProps: OrderStageItemProps = {
              ...stage,
              position: i + 1,
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
