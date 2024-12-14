import { httpClient } from '~ek/http-client'
import type { CitiesWithStoresResponse, StoresResponse } from '~ek/types'

interface EnhancedApiQueryParams extends Partial<ApiQueryParams> {
  cityId?: number
  search?: string
}

export async function getStores(
  apiQueryParams?: EnhancedApiQueryParams,
): Promise<StoresResponse['data']> {
  const response = await httpClient.get<StoresResponse>(
    '/stores',
    apiQueryParams ?? {},
  )

  return response?.data as StoresResponse['data']
}

export async function getCitiesWithStores(): Promise<
  CitiesWithStoresResponse['data']
  > {
  const response =
    await httpClient.get<CitiesWithStoresResponse>('/store/cities')

  return response?.data as CitiesWithStoresResponse['data']
}
