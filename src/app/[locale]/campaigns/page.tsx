import { Campaigns } from '~ek/components'
import type {
  BannerProps,
  CampaignsPageResponse,
  CampaignsProps,
} from '~ek/types'
import { getCampaigns, getCampaignsPageContent } from '~ek/services'
import { defaultApiQueryParams, omit, transformToUiData } from '~ek/utils'

export default async function CampaignsPage({
  params: { locale },
}: PageProps): Promise<React.ReactElement> {
  const campaignsPageContent = await getCampaignsPageContent()
  const campaignsPageContentWithoutId = omit({
    source: campaignsPageContent as CampaignsPageResponse,
    fields: ['id'],
  }) as Omit<CampaignsPageResponse, 'id'>
  const campaigns = await getCampaigns(defaultApiQueryParams)

  const campaignsProps: CampaignsProps = {
    ...(transformToUiData(
      campaignsPageContentWithoutId,
      locale,
    ) as BannerProps),
    campaigns: transformToUiData(
      campaigns,
      locale,
    ) as CampaignsProps['campaigns'],
  }

  return <Campaigns {...campaignsProps} />
}
