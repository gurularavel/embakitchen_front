import { httpClient } from '~ek/http-client'
import type {
  HomepageResponse,
  MainSliderResponse,
  PartnersSliderResponse,
} from '~ek/types'

export async function getMainSliderContent(
  apiQueryParams: ApiQueryParams,
): Promise<MainSliderResponse['data']> {
  const response = await httpClient.get<MainSliderResponse>('/sliders', {
    query: apiQueryParams,
  })

  return response?.data as MainSliderResponse['data']
}

export async function getHomepageContent(): Promise<HomepageResponse> {
  const response = await httpClient.get<HomepageResponse>('/home-page')
  return response as HomepageResponse
}

export async function getPartnersSliderContent(
  apiQueryParams: ApiQueryParams,
): Promise<PartnersSliderResponse['data']> {
  const response = await httpClient.get<PartnersSliderResponse>('/partners', {
    query: apiQueryParams,
  })

  return response?.data as PartnersSliderResponse['data']
}
