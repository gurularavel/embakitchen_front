import { httpClient } from '~ek/http-client'
import type {
  CampaignEntry,
  CampaignsPageResponse,
  CampaignsResponse,
} from '~ek/types'

export async function getCampaignsPageContent(): Promise<CampaignsPageResponse> {
  const response =
    await httpClient.get<CampaignsPageResponse>('/campaigns-page')
  return response as CampaignsPageResponse
}

export async function getCampaigns(
  apiQueryParams: ApiQueryParams,
): Promise<CampaignsResponse['data']> {
  const response = await httpClient.get<CampaignsResponse>('/campaigns', {
    query: apiQueryParams,
  })

  return response?.data as CampaignsResponse['data']
}

export async function getCampaignDetails(slug: string): Promise<CampaignEntry> {
  const response = await httpClient.get<CampaignEntry>(`/campaigns/${slug}`)

  return response as CampaignEntry
}
