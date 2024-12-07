import { Campaigns } from '~ek/components'
import type {
  BannerProps,
  CampaignEntry,
  CampaignsPageResponse,
  CampaignsProps,
} from '~ek/types'
import campaign1 from '/public/assets/images/campaigns/campaign-1.png'
import campaign2 from '/public/assets/images/campaigns/campaign-2.png'
import campaign3 from '/public/assets/images/campaigns/campaign-3.png'
import { getCampaignsPageContent } from '~ek/services'
import { omit, transformToUiData } from '~ek/utils'

const today = new Date()
const campaignImages = [campaign1, campaign2, campaign3, campaign1]
const campaigns: CampaignEntry[] = Array(4)
  .fill(undefined)
  .map((_, i: number) => ({
    title: 'Kampaniyanın adı burada olacaq',
    description:
      'Kampaniya haqqında ətraflı məlumat. Kampaniya səhifəsinə keçid etdikdə görünəcək!',
    img: campaignImages[i],
    start: new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + (i - 1),
      today.getHours(),
      today.getMinutes(),
      today.getSeconds(),
    ),
    end: new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + (i + 5),
      20,
      30,
      0,
    ),
  }))

export default async function CampaignsPage({
  params: { locale },
}: PageProps): Promise<React.ReactElement> {
  const campaignsPageContent = await getCampaignsPageContent()
  const campaignsPageContentWithoutId = omit({
    source: campaignsPageContent as CampaignsPageResponse,
    fields: ['id'],
  }) as Omit<CampaignsPageResponse, 'id'>

  const campaignsProps: CampaignsProps = {
    ...(transformToUiData(
      campaignsPageContentWithoutId,
      locale,
    ) as BannerProps),
  }

  return <Campaigns {...campaignsProps} />
}
