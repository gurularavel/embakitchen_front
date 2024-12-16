import Image from 'next/image'
import { Banner, Button, Icon, Slider } from '~ek/components'
import type { ProductDetailsProps } from '~ek/types'
import birbank from '/public/assets/images/birbank.png'

const productDetailsStyles: Readonly<TwClasses> = {
  productMainInfoWrapper:
    'grid grid-cols-1 laptop:grid-cols-3 gap-y-6 gap-x-7 mb-6 laptop:mb-10 px-0 laptop:px-15',
  slider: 'col-span-1 laptop:col-span-2 px-0 tablet:px-10 laptop:px-0',
  productInfoWrapper: 'flex flex-col laptop:flex-row gap-y-6 gap-x-7',
  line: 'h-px laptop:h-full w-full tablet:w-[calc(100%-theme(width.20))] laptop:w-px bg-primary-7 mx-auto',
  productInfo: 'px-4 tablet:px-10 laptop:px-0 flex flex-col gap-y-6',
  paymentInfo:
    'flex items-center gap-x-6 border border-solid border-primary-7 px-6 py-[18px]',
  birbank: 'w-[50px] h-[80px]',
  paymentPerMonth:
    'inline-block mb-[6px] text-xl leading-7 font-semibold text-gray-1',
  paymentInfoText: 'text-base font-normal text-gray-5',
  characteristicsList: 'flex flex-col gap-y-6',
  characteristicsItem: 'flex gap-x-3',
  characteristicsLabel: 'flex-none w-[70px] text-base font-normal text-gray-3',
  characteristicsValue: 'flex-1 text-base font-medium text-gray-1',
  order: '',
  orderButton:
    'w-full h-14 flex items-center justify-center gap-x-2 bg-primary-1 rounded-md text-base font-semibold text-white',
  orderButtonIcon: '',
}
const styles = productDetailsStyles as Readonly<StyleRecord>

export function ProductDetails({
  bannerImage,
  title,
  style,
  material,
  facade,
  decor,
  design,
}: Readonly<ProductDetailsProps>): React.ReactElement {
  return (
    <>
      <Banner
        title={title ?? ''}
        image={bannerImage ?? ''}
      />

      <div className={styles.productMainInfoWrapper}>
        <div className={styles.slider}>
          <Slider variant='product' />
        </div>

        <div className={styles.productInfoWrapper}>
          <div className={styles.line}></div>

          <div className={styles.productInfo}>
            <div className={styles.paymentInfo}>
              <Image
                src={birbank}
                alt='birbank installment card'
                className={styles.birbank}
              />
              <div>
                <strong className={styles.paymentPerMonth}>
                  50 AZN x 18 ay
                </strong>
                <p className={styles.paymentInfoText}>
                  Birbank kartı ilə 18 aya faizsiz ödə
                </p>
              </div>
            </div>

            <div className={styles.productCharacteristics}>
              <ul className={styles.characteristicsList}>
                <li className={styles.characteristicsItem}>
                  <span className={styles.characteristicsLabel}>Stil</span>
                  <span className={styles.characteristicsValue}>{style}</span>
                </li>

                <li className={styles.characteristicsItem}>
                  <span className={styles.characteristicsLabel}>Material</span>
                  <span className={styles.characteristicsValue}>
                    {material}
                  </span>
                </li>

                <li className={styles.characteristicsItem}>
                  <span className={styles.characteristicsLabel}>Fasadlar</span>
                  <span className={styles.characteristicsValue}>{facade}</span>
                </li>

                <li className={styles.characteristicsItem}>
                  <span className={styles.characteristicsLabel}>Dekor</span>
                  <span className={styles.characteristicsValue}>{decor}</span>
                </li>

                <li className={styles.characteristicsItem}>
                  <span className={styles.characteristicsLabel}>Dizayn</span>
                  <span className={styles.characteristicsValue}>{design}</span>
                </li>
              </ul>
            </div>

            <div className={styles.productColors}>
              <span className={styles.productColorLabel}>Rəng</span>
              <p>Color selector goes here...</p>
            </div>

            <div className={styles.order}>
              <Button classes={styles.orderButton}>
                <span>Sifariş ver</span>
                <Icon
                  variant='arrow-right-white'
                  sizes={styles.orderButtonIcon}
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
