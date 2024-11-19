import { Banner, Slider } from '~ek/components'
import type { ProductDetailsProps } from '~ek/types'

const productDetailsStyles: Readonly<TwClasses> = {
  line: 'h-px bg-primary-7 mb-6',
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

      <Slider variant='product' />

      <div className={styles.line}></div>
    </>
  )
}
