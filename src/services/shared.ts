import { httpClient } from '~ek/http-client'
import type {
  CitiesResponse,
  CreateOrderResponse,
  DistrictsResponse,
  OrderResquestBody,
  OrdersResponse,
  ProductsResponse,
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
  const response = await httpClient.get<DistrictsResponse>('/districts', {
    query: params,
  })
  return response?.data as DistrictsResponse['data']
}

export async function createOrder(
  values: OrderResquestBody,
): Promise<CreateOrderResponse> {
  const response = await httpClient.post<
    CreateOrderResponse,
    OrderResquestBody
  >('/orders', values)

  return response as CreateOrderResponse
}

export interface SearchApiParams extends ApiQueryParams {
  search: string
}
export async function getSearchResult(
  params: SearchApiParams,
): Promise<ProductsResponse> {
  const response = await httpClient.get<ProductsResponse>(
    `/search?search=${params.search}&page=1&perPage=5`,
  )

  return response as ProductsResponse
}
