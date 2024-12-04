import { httpClient } from '~ek/http-client'
import { CampaignsResponse } from '~ek/types'

export async function getCampaigns(
  apiQueryParams: ApiQueryParams,
): Promise<CampaignsResponse['data']> {
  const response = await httpClient.get<CampaignsResponse>(
    '/campaigns',
    apiQueryParams,
  )

  return response?.data as CampaignsResponse['data']
}
