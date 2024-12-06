import { httpClient } from '~ek/http-client'
import type { CampaignsPageResponse } from '~ek/types'

export async function getCampaignsPageContent(): Promise<CampaignsPageResponse> {
  const response =
    await httpClient.get<CampaignsPageResponse>('/campaigns-page')
  return response as CampaignsPageResponse
}
