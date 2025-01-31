import { ProductSearch } from '~ek/components'
import { getSearchResult, getSearchPageContent } from '~ek/services'
import type {
  ProductsResponse,
  Language,
  SearchProps,
  SearchResultEntry,
  SearchApiParams,
} from '~ek/types'
import { omit, transformToUiData } from '~ek/utils'

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
  const searchPageContent = await getSearchPageContent()

  const uiData = transformToUiData(
    omit({ source: searchPageContent, fields: ['id'] }),
    locale,
  )

  const productSearchProps: SearchProps = {
    ...(uiData as Omit<SearchProps, 'data' | 'pagination'>),
    ...(transformToUiData(searchData, locale) as SearchResultEntry),
  }

  return <ProductSearch {...productSearchProps} />
}
