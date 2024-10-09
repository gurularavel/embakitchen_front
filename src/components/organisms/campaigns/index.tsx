import Image from 'next/image'
import { addDays } from 'date-fns'
import { CampaignItem } from '~ek/components'
import type { CampaignEntry } from '~ek/types'
import campaign1 from '/public/assets/images/campaigns/campaign-1.png'
import campaign2 from '/public/assets/images/campaigns/campaign-2.png'
import campaign3 from '/public/assets/images/campaigns/campaign-3.png'
import campaignsSectionBg from '/public/assets/images/campaigns/campaigns-section-bg.png'

interface CampaignData {
  title: string
  campaigns: CampaignEntry[]
}

const today = new Date()
const campaignImages = [campaign1, campaign2, campaign3, campaign1]
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

const campaignsStyles: Readonly<TwClasses> = {
  container: '',
  wrapper: '',
}
const styles = campaignsStyles as Readonly<StyleRecord>

export function Campaigns(): React.ReactElement {
  return (
    <div
      className={styles.container}
      style={{ border: '2px solid red' }}
    >
      <div className={styles.wrapper}>
        <div className={styles.titleWrapper}>
          <h4 className={styles.title}>{campaignsData?.title || ''}</h4>
          <div className={styles.titleWrapperBg}>
            <Image
              src={campaignsSectionBg}
              alt='Embakitchen campaigns section title background'
              className={styles.titleWrapperBgImg}
            />
          </div>
        </div>

        <div className={styles.campaigns}>
          {campaignsData?.campaigns?.map(
            (campaign: CampaignEntry, i: number) => {
              const { description, ...campaignItemProps } = campaign

              return (
                <CampaignItem
                  key={i}
                  {...campaignItemProps}
                />
              )
            },
          )}
        </div>
      </div>
    </div>
  )
}
