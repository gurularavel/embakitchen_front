import React from 'react'
import Image from 'next/image'
import { CampaignEntry } from '@embakitchen/types'
import { campaignsStyles } from '@embakitchen/components/Campaigns/Campaigns.style'
import campaignSectionBg from '/public/assets/images/campaigns_section_bg.png'

interface CampaignData {
  title: string
  campaigns: CampaignEntry[]
}

const campaignsData: CampaignData = {
  title: 'Cari Kampaniyalar',
  campaigns: [
    {
      title: 'Kampaniyanın adı burada olacaq',
      description:
        'Kampaniya haqqında ətraflı məlumat. Kampaniya səhifəsinə keçid etdikdə görünəcək!',
      img: '',
      startDate: '',
      endDate: '',
    },
  ],
}

export const Campaigns: React.FC = () => {
  const styles: Dictionary<string> = campaignsStyles as Dictionary<string>

  return (
    <div
      className={styles.container}
      style={{ border: '3px solid red' }}
    >
      <div
        className={styles.wrapper}
        style={{ border: '3px solid green' }}
      >
        <div className={styles.titleWrapper}>
          <h4 className={styles.title}>{campaignsData?.title || ''}</h4>
          <Image
            src={campaignSectionBg}
            alt='campaigns section title background'
            className={styles.titleWrapperBg}
          />
        </div>
      </div>
    </div>
  )
}
