import { httpClient } from '~ek/http-client'
import type { CategoryEntry } from '~ek/types'

export async function getCategoryDetails(slug: string): Promise<CategoryEntry> {
  const response = await httpClient.get<CategoryEntry>(
    `/product-categories/${slug}`,
  )

  return response as CategoryEntry
}
