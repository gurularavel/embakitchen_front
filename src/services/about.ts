import { httpClient } from '~ek/http-client'
import type { AboutPageResponse } from '~ek/types'

export async function getAboutPageContent(): Promise<AboutPageResponse> {
  const response = await httpClient.get<AboutPageResponse>('/about-page')
  return response as AboutPageResponse
}
