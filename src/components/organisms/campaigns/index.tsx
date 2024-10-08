import { addDays } from 'date-fns'
import type { CampaignEntry } from '~ek/types'
import campaign1 from '/public/assets/images/campaigns/campaign-1.png'
import campaign2 from '/public/assets/images/campaigns/campaign-2.png'
import campaign3 from '/public/assets/images/campaigns/campaign-3.png'
import campaign4 from '/public/assets/images/campaigns/campaign-4.png'

interface CampaignData {
  title: string
  campaigns: CampaignEntry[]
}

const today = new Date()
const campaignImages = [campaign1, campaign2, campaign3, campaign4]
const campaignsData: CampaignData = {
  title: 'Cari Kampaniyalar',
  campaigns: Array(4)
    .fill(undefined)
    .map((_, i: number) => ({
      title: 'Kampaniyanın adı burada olacaq',
      description:
        'Kampaniya haqqında ətraflı məlumat. Kampaniya səhifəsinə keçid etdikdə görünəcək!',
      img: campaignImages[i],
      startDate: addDays(today, i - 1),
      endDate: addDays(today, i + 5),
    })),
}

const campaignsStyles: Readonly<TwClasses> = {}
const styles = campaignsStyles as Readonly<StyleRecord>

export function Campaigns(): React.ReactElement {
  return (
    <div style={{ border: '2px solid red' }}>
      <p>Campaigns</p>
    </div>
  )
}
