import { httpClient } from '~ek/http-client'
import type {
  CitiesResponse,
  DistrictsResponse,
  OrdersResponse,
} from '~ek/types'

interface FilteredApiParams extends ApiQueryParams {
  cityId: number
}

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

export async function getDistricts(
  params?: FilteredApiParams,
): Promise<DistrictsResponse['data']> {
  const response = await httpClient.get<DistrictsResponse>('/districts', params)
  return response?.data as DistrictsResponse['data']
}
