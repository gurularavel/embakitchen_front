import { ProductSearch } from '~ek/components'
import { getSearchResult, getSearchPageContent } from '~ek/services'
import type {
  ProductsResponse,
  SearchProps,
  SearchResultEntry,
} from '~ek/types'
import { defaultApiQueryParams, omit, transformToUiData } from '~ek/utils'

export default async function SearchPage({
  params: { locale },
  searchParams,
}: Readonly<PageProps>): Promise<React.ReactElement> {
  const searchData: ProductsResponse = await getSearchResult({
    ...defaultApiQueryParams,
    ...searchParams,
  } as ApiQueryParams)
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
