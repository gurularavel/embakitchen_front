import { Campaigns } from '~ek/components'
import type { CampaignEntry, CampaignsProps } from '~ek/types'
import campaign1 from '/public/assets/images/campaigns/campaign-1.png'
import campaign2 from '/public/assets/images/campaigns/campaign-2.png'
import campaign3 from '/public/assets/images/campaigns/campaign-3.png'

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

const campaignsProps: CampaignsProps = {
  banner: {
    title: 'Kampaniyalar',
    image: {
      name: '0L1A5736',
      file_name: '0L1A5736.JPG',
      uuid: '91929660-d21d-45f4-bf57-ba4843d608c8',
      preview_url: '',
      original_url: 'https://embakitchen.kvadrat.az/storage/156/0L1A5736.JPG',
      order: 1,
      custom_properties: [],
      extension: 'JPG',
      size: 7043050,
    },
  },
  campaigns,
}

export default function CampaignsPage(): React.ReactElement {
  return <Campaigns {...campaignsProps} />
}
