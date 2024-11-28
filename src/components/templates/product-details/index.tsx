import Image from 'next/image'
import { Banner, Button, Icon, Slider } from '~ek/components'
import type { ProductDetailsProps } from '~ek/types'
import birbank from '/public/assets/images/birbank.png'

const productDetailsStyles: Readonly<TwClasses> = {
  productMainInfoWrapper: 'grid grid-cols-1 laptop:grid-cols-3',
  slider: '',
  line: 'h-px bg-primary-7 mb-6',
  productInfo: 'px-4 flex flex-col gap-y-6',
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
  banner,
}: Readonly<ProductDetailsProps>): React.ReactElement {
  return (
    <>
      <Banner
        title={banner?.title ?? ''}
        image={banner?.image ?? ''}
      />

      <div className={styles.productMainInfoWrapper}>
        <div className={styles.slider}>
          <Slider variant='product' />
        </div>

        <div className={styles.line}></div>

        <div className={styles.productInfo}>
          <div className={styles.paymentInfo}>
            <Image
              src={birbank}
              alt='birbank installment card'
              className={styles.birbank}
            />
            <div>
              <strong className={styles.paymentPerMonth}>50 AZN x 18 ay</strong>
              <p className={styles.paymentInfoText}>
                Birbank kartı ilə 18 aya faizsiz ödə
              </p>
            </div>
          </div>

          <div className={styles.productCharacteristics}>
            <ul className={styles.characteristicsList}>
              <li className={styles.characteristicsItem}>
                <span className={styles.characteristicsLabel}>Stil</span>
                <span className={styles.characteristicsValue}>Adel Ral</span>
              </li>

              <li className={styles.characteristicsItem}>
                <span className={styles.characteristicsLabel}>Material</span>
                <span className={styles.characteristicsValue}>
                  Melamin DSP (37 ədəd rəng çeşid)
                </span>
              </li>

              <li className={styles.characteristicsItem}>
                <span className={styles.characteristicsLabel}>Fasadlar</span>
                <span className={styles.characteristicsValue}>
                  MDF boya – 26 RAL rəng çeşidi
                </span>
              </li>

              <li className={styles.characteristicsItem}>
                <span className={styles.characteristicsLabel}>Dekor</span>
                <span className={styles.characteristicsValue}>
                  Keçmə hissələr
                </span>
              </li>

              <li className={styles.characteristicsItem}>
                <span className={styles.characteristicsLabel}>Dizayn</span>
                <span className={styles.characteristicsValue}>
                  Skandinaviya
                </span>
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
    </>
  )
}
