import { httpClient } from '~ek/http-client'
import type { CitiesResponse } from '~ek/types'

export async function getCities(
  apiQueryParams?: ApiQueryParams,
): Promise<CitiesResponse['data']> {
  const response = await httpClient.get<CitiesResponse>(
    '/cities',
    apiQueryParams ?? {},
  )

  return response?.data as CitiesResponse['data']
}

export async function getOrders(apiQueryParams?: ApiQueryParams) {
  const response = await httpClient.get('/orders', apiQueryParams)
  return response
}

// export async function getRurals(
//   apiQueryParams?: ApiQueryParams,
// ): Promise<['data']> {
//   const response = await httpClient.get<>(
//     '/districts',
//     apiQueryParams ?? {},
//   )

//   return response?.data as CitiesResponse['data']
// }
