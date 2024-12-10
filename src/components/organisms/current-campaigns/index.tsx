import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { CampaignItem } from '~ek/components'
import type { ModifiedCampaignEntry } from '~ek/types'
import sectionTitleBg from '/public/assets/images/section-title-bg.png'

interface CurrentCampaignProps {
  campaigns: ModifiedCampaignEntry[]
}

const currentCampaignsStyles: Readonly<TwClasses> = {
  container: 'mb-6 desktop:mb-25',
  wrapper:
    'px-0 widescreen:px-25 mx-4 tablet:mx-5 desktop:mx-15 widescreen:mx-0',
  titleWrapper: 'relative flex justify-between gap-x-10 mb-10',
  title:
    'h-[54px] tablet:h-[58px] text-[30px] tablet:text-3xl font-medium leading-9 tablet:leading-10 text-tertiary-1 border-b-2 border-solid border-tertiary-2 whitespace-nowrap',
  titleWrapperBg:
    'hidden mobile:block absolute laptop:static -left-10 right-0 top-0',
  titleWrapperBgImg: 'h-[61px] w-full laptop:object-cover',
  campaigns: 'grid grid-cols-1 laptop:grid-cols-4 justify-between gap-6',
}
const styles = currentCampaignsStyles as Readonly<StyleRecord>

export function CurrentCampaigns({
  campaigns,
}: Readonly<CurrentCampaignProps>): React.ReactElement {
  const t = useTranslations('titles')

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.titleWrapper}>
          <h4 className={styles.title}>{t('currentCampaigns')}</h4>
          <div className={styles.titleWrapperBg}>
            <Image
              src={sectionTitleBg}
              alt='Embakitchen campaigns section title background'
              className={styles.titleWrapperBgImg}
            />
          </div>
        </div>

        <div className={styles.campaigns}>
          {campaigns?.map((campaign: ModifiedCampaignEntry) => {
            return (
              <CampaignItem
                key={campaign.id}
                {...campaign}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
