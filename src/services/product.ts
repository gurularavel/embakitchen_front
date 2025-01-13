import { httpClient } from '~ek/http-client'
import type { ProductEntry, ProductsResponse } from '~ek/types'

export async function getProducts(
  apiQueryParams?: ApiQueryParams,
): Promise<ProductsResponse['data']> {
  const response = await httpClient.get<ProductsResponse>(
    '/products',
    apiQueryParams ?? {},
  )

  return response?.data as ProductsResponse['data']
}

export async function getProductDetails(slug: string): Promise<ProductEntry> {
  const response = await httpClient.get<ProductEntry>(`/products/${slug}`)

  return response as ProductEntry
}
