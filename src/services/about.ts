import { httpClient } from '~ek/http-client'
import type {
  AboutInfoBlock,
  AboutInfoBlocksResponse,
  AboutPageResponse,
} from '~ek/types'

export async function getAboutPageContent(): Promise<AboutPageResponse> {
  const response = await httpClient.get<AboutPageResponse>('/about-page')
  return response as AboutPageResponse
}

export async function getAboutInfoBlocksContent(
  apiQueryParams: ApiQueryParams,
): Promise<AboutInfoBlock[]> {
  const response = await httpClient.get<AboutInfoBlocksResponse>(
    '/about-info-blocks',
    apiQueryParams,
  )

  return response?.data as AboutInfoBlock[]
}
