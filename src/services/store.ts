import { httpClient } from '~ek/http-client'
import type { CitiesWithStoresResponse, StoresResponse } from '~ek/types'

export async function getStores(): Promise<StoresResponse['data']> {
  const response = await httpClient.get<StoresResponse>('/stores')

  return response?.data as StoresResponse['data']
}

export async function getCitiesWithStores(): Promise<
  CitiesWithStoresResponse['data']
  > {
  const response =
    await httpClient.get<CitiesWithStoresResponse>('/store/cities')

  return response?.data as CitiesWithStoresResponse['data']
}
