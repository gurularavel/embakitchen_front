import { ProductCategory } from '~ek/components'
import { getCategoryDetails, getProducts } from '~ek/services'
import type { CategoryEntry, ProductCategoryProps } from '~ek/types'
import { defaultApiQueryParams, omit, transformToUiData } from '~ek/utils'

export default async function ProductCategoryPage({
  params: { locale, category },
  searchParams,
}: Readonly<PageProps>): Promise<React.ReactElement> {
  const categoryData: CategoryEntry = await getCategoryDetails(category!)
  const products = await getProducts({
    ...defaultApiQueryParams,
    ...searchParams,
  })

  const productCategoryProps: ProductCategoryProps = {
    ...(transformToUiData(
      omit({ source: categoryData, fields: ['id'] }),
      locale,
    ) as Omit<ProductCategoryProps, 'products'>),
    products: transformToUiData(
      products,
      locale,
    ) as ProductCategoryProps['products'],
  }

  return <ProductCategory {...productCategoryProps} />
}
