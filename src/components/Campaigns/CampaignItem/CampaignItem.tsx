import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'
import { Timer } from '@embakitchen/components'
import { CampaignEntry } from '@embakitchen/types'
import { campaignItemStyles } from '@embakitchen/components/Campaigns/CampaignItem/CampaignItem.style'
import rightChevron from '/public/assets/icons/right_chevron.svg'

export const CampaignItem: React.FC<Omit<CampaignEntry, 'description'>> = ({
  title,
  img,
  startDate,
  endDate,
}) => {
  const styles: Dictionary<string> = campaignItemStyles as Dictionary<string>

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imgWrapper}>
          <Image
            src={img}
            alt={`Embakitchen campaign - ${title}`}
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
          <div className={styles.info}>
            <Timer endDate={endDate} />
            <Link
              href={`/campaign/${title}`}
              className={styles.link}
            >
              <span>Ətraflı</span>
              <span>
                <Image
                  src={rightChevron}
                  alt='right chevron'
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
