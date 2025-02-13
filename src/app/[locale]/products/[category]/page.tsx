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
    ) as Omit<ProductCategoryProps, 'data' | 'pagination'>),
    ...(transformToUiData(products, locale) as Pick<
      ProductCategoryProps,
      'data' | 'pagination'
    >),
  }

  return <ProductCategory {...productCategoryProps} />
}
