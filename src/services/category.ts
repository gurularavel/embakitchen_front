import { httpClient } from '~ek/http-client'
import type { CategoryEntry, CategoryResponse } from '~ek/types'
import { omit } from '~ek/utils'

export async function getCategoryDetails(slug: string): Promise<CategoryEntry> {
  const response = await httpClient.get<CategoryResponse>(
    `/product-categories/${slug}`,
  )

  return omit({
    source: response as CategoryResponse,
    fields: ['pagination'],
  }) as CategoryEntry
}
