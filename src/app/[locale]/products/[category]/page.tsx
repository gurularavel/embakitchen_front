import { ProductCategory } from '~ek/components'
import { getCategoryDetails, getProducts } from '~ek/services'
import type { CategoryEntry, ProductCategoryProps } from '~ek/types'
import {
  defaultApiQueryParams,
  omit,
  PER_PAGE,
  transformToUiData,
} from '~ek/utils'

export default async function ProductCategoryPage({
  params: { locale, category },
  searchParams,
}: Readonly<PageProps>): Promise<React.ReactElement> {
  const decodedSlug = decodeURIComponent(category!)
  const categoryData: CategoryEntry = await getCategoryDetails(decodedSlug)
  const products = await getProducts({
    ...defaultApiQueryParams,
    ...searchParams,
    perPage: PER_PAGE,
    category: decodedSlug,
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
