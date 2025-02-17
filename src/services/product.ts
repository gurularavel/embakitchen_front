import { httpClient } from '~ek/http-client'
import type { ProductEntry, ProductsResponse } from '~ek/types'

export async function getProducts(
  apiQueryParams?: ApiQueryParams,
): Promise<ProductsResponse> {
  const response = await httpClient.get<ProductsResponse>('/products', {
    query: apiQueryParams,
  })

  return response as ProductsResponse
}

export async function getBestSellingProducts(
  apiQueryParams?: ApiQueryParams,
): Promise<ProductsResponse> {
  const response = await httpClient.get<ProductsResponse>(
    '/best-selling-products',
    { query: apiQueryParams },
  )

  return response as ProductsResponse
}

export async function getProductDetails(slug: string): Promise<ProductEntry> {
  const response = await httpClient.get<ProductEntry>(`/products/${slug}`)

  return response as ProductEntry
}
