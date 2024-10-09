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
  container: 'mb-6 desktop:mb-25',
  wrapper:
    'px-0 widescreen:px-25 mx-4 tablet:mx-5 desktop:mx-15 widescreen:mx-0',
  titleWrapper: 'relative flex justify-between gap-x-10 mb-10',
  title:
    'h-[54px] tablet:h-[58px] text-[30px] tablet:text-3xl font-medium leading-9 tablet:leading-10 text-tertiary-1 border-b-2 border-solid border-tertiary-2 whitespace-nowrap',
  titleWrapperBg:
    'hidden mobile:block absolute laptop:static -left-10 right-0 top-0',
  titleWrapperBgImg: 'h-[61px] w-full laptop:object-cover',
  campaigns: 'flex flex-col laptop:flex-row justify-between gap-6',
}
const styles = campaignsStyles as Readonly<StyleRecord>

export function Campaigns(): React.ReactElement {
  return (
    <div className={styles.container}>
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
