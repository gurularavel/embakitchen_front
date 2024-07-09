import React from 'react'
import Image from 'next/image'
import { format } from 'date-fns'
import { CampaignEntry } from '@embakitchen/types'
import { campaignItemStyles } from '@embakitchen/components/Campaigns/CampaignItem/CampaignItem.style'

export const CampaignItem: React.FC<Omit<CampaignEntry, 'description'>> = ({
  title,
  img,
  startDate,
  endDate,
}) => {
  const styles: Dictionary<string> = campaignItemStyles as Dictionary<string>

  return (
    <div
      className={styles.container}
      style={{ border: '3px solid red' }}
    >
      <div
        className={styles.content}
        style={{ border: '3pz solid blue' }}
      >
        <div
          className={styles.imgWrapper}
          style={{ border: '3px solid green' }}
        >
          <Image
            src={img}
            alt={`Embakitchen campaign - ${title}`}
            style={{ border: '3px solid red' }}
            className={styles.img}
          />
        </div>
        <div className={styles.body}>
          <span className={styles.dates}>
            <strong>
              {format(startDate, 'd MMMM')}
              &nbsp;-&nbsp;
              {format(endDate, 'd MMMM')}
            </strong>
          </span>
          <h5 className={styles.title}>{title}</h5>
        </div>
      </div>
    </div>
  )
}
