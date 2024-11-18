import { Banner } from '~ek/components'
import type { ProductDetailsProps } from '~ek/types'

export function ProductDetails({
  banner,
}: Readonly<ProductDetailsProps>): React.ReactElement {
  return (
    <>
      <Banner
        title={banner?.title ?? ''}
        image={banner?.image ?? ''}
      />
    </>
  )
}
