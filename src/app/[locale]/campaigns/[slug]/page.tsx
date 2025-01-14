import { CampaignDetails } from '~ek/components'
import { getCampaignDetails } from '~ek/services'
import type { CampaignDetailsProps } from '~ek/types'
import { transformToUiData } from '~ek/utils'

export default async function CampaignDetailsPage({
  params: { locale, slug },
}: Readonly<PageProps>): Promise<React.ReactElement> {
  const campaign = await getCampaignDetails(slug!)
  const campaignDetailsProps = transformToUiData(
    campaign,
    locale,
  ) as CampaignDetailsProps

  return <CampaignDetails {...campaignDetailsProps} />
}
