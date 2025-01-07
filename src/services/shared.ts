import { httpClient } from '~ek/http-client'
import type { CitiesResponse, OrdersResponse } from '~ek/types'

export async function getCities(
  apiQueryParams?: ApiQueryParams,
): Promise<CitiesResponse['data']> {
  const response = await httpClient.get<CitiesResponse>(
    '/cities',
    apiQueryParams ?? {},
  )

  return response?.data as CitiesResponse['data']
}

export async function getOrders(
  params?: AuthenticatedApiParams,
): Promise<OrdersResponse['data']> {
  const response = await httpClient.get<OrdersResponse>('/orders', params)
  return response?.data as OrdersResponse['data']
}
