import React from 'react'
import Image from 'next/image'
import { addDays } from 'date-fns'
import { CampaignItem } from '@embakitchen/components'
import { CampaignEntry } from '@embakitchen/types'
import { campaignsStyles } from '@embakitchen/components/Campaigns/Campaigns.style'
import campaignSectionBg from '/public/assets/images/campaigns_section_bg.png'
import campaign1 from '/public/assets/images/campaigns/campaign_1.png'
import campaign2 from '/public/assets/images/campaigns/campaign_2.png'
import campaign3 from '/public/assets/images/campaigns/campaign_3.png'
import campaign4 from '/public/assets/images/campaigns/campaign_4.png'

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

export const Campaigns: React.FC = () => {
  const styles: Dictionary<string> = campaignsStyles as Dictionary<string>

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.titleWrapper}>
          <h4 className={styles.title}>{campaignsData?.title || ''}</h4>
          <div className={styles.titleWrapperBg}>
            <Image
              src={campaignSectionBg}
              alt='campaigns section title background'
              className={styles.titleWrapperBgImg}
            />
          </div>
        </div>

        <div className={styles.campaigns}>
          {campaignsData?.campaigns?.map(
            (campaign: CampaignEntry, i: number) => (
              <CampaignItem
                key={i}
                {...campaign}
              />
            ),
          )}
        </div>
      </div>
    </div>
  )
}
