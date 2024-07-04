import React from 'react'
import { CampaignEntry } from '@embakitchen/types'
import { campaignsStyles } from '@embakitchen/components/Campaigns/Campaigns.style'

interface CampaignData {
  title: string
  campaigns: CampaignEntry[]
}

const campaignsData: CampaignData = {
  title: 'Cari Kampaniyalar',
  campaigns: [] as CampaignEntry[],
}

export const Campaigns: React.FC = () => {
  const styles: Dictionary<string> = campaignsStyles as Dictionary<string>

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h4>{campaignsData?.title || ''}</h4>
      </div>
    </div>
  )
}
