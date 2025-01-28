import { ProductCategory } from '~ek/components'
import { getSearchResult } from '~ek/services'
import { SearchApiParams } from '~ek/services/shared'
import type {
  ProductsResponse,
  ProductCategoryProps,
  Language,
} from '~ek/types'
import { transformToUiData } from '~ek/utils'

export default async function SearchPage({
  params: { locale },
  searchParams,
}: {
  params: { locale: Language }
  searchParams: SearchApiParams
}): Promise<React.ReactElement> {
  const searchData: ProductsResponse = await getSearchResult(
    searchParams as SearchApiParams,
  )

  const productCategoryProps = transformToUiData(
    searchData,
    locale,
  ) as ProductCategoryProps

  return <ProductCategory {...productCategoryProps} />
}
