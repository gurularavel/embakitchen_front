import React from 'react'
import { campaignItemStyles } from '@embakitchen/components/Campaigns/CampaignItem/CampaignItem.style'

export const CampaignItem: React.FC = () => {
  const styles: Dictionary<string> = campaignItemStyles as Dictionary<string>

  return (
    <div className={styles.container}>
      <h1>Item</h1>
    </div>
  )
}
