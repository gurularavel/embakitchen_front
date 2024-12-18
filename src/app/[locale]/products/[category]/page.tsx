import { ProductCategory } from '~ek/components'
import { getCategoryDetails } from '~ek/services'
import type { CategoryEntry, ProductCategoryProps } from '~ek/types'
import { transformToUiData } from '~ek/utils'

export default async function ProductCategoryPage({
  params: { locale, category },
}: Readonly<PageProps>): Promise<React.ReactElement> {
  const categoryData: CategoryEntry = await getCategoryDetails(category!)

  const productCategoryProps = transformToUiData(
    categoryData,
    locale,
  ) as ProductCategoryProps

  return <ProductCategory {...productCategoryProps} />
}
