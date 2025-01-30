import { ProductSearch } from '~ek/components'
import { getBlogsPageContent, getSearchResult } from '~ek/services'
import { SearchApiParams } from '~ek/services/shared'
import type {
  ProductsResponse,
  Language,
  SearchProps,
  BlogsProps,
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
  const blogsPageContent = await getBlogsPageContent()

  const uiData = transformToUiData(
    omit({ source: blogsPageContent, fields: ['id'] }),
    locale,
  )

  const productSearchProps: SearchProps = {
    ...(uiData as Omit<BlogsProps, 'blogs'>),
    ...(transformToUiData(searchData, locale) as ProductsResponse),
  }

  return <ProductSearch {...productSearchProps} />
}
