import { httpClient } from '~ek/http-client'
import type { MainSliderResponse } from '~ek/types'

export async function getMainSliderContent(
  apiQueryParams: ApiQueryParams,
): Promise<MainSliderResponse['data']> {
  const response = await httpClient.get<MainSliderResponse>(
    '/sliders',
    apiQueryParams,
  )

  return response?.data as MainSliderResponse['data']
}
