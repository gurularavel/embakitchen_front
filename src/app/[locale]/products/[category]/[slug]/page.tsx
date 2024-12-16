import { ProductDetails } from '~ek/components'
import { getProductDetails } from '~ek/services'
import type { ProductDetailsProps } from '~ek/types'
import { transformToUiData } from '~ek/utils'

export default async function ProductDetailsPage({
  params: { locale, category, slug },
}: PageProps): Promise<React.ReactElement> {
  const decodedSlug = decodeURIComponent(slug!)
  const product = await getProductDetails(decodedSlug)

  const productDetailsProps = transformToUiData(
    product,
    locale,
  ) as ProductDetailsProps

  return <ProductDetails {...productDetailsProps} />
}
