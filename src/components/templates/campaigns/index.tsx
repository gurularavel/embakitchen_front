import { Banner, CampaignItem } from '~ek/components'
import type { CampaignsProps, ModifiedCampaignEntry } from '~ek/types'

const campaignsStyles: Readonly<TwClasses> = {
  campaigns:
    'mb-6 laptop:mb-25 px-4 tablet:px-10 laptop:px-15 widescreen:px-25 grid grid-cols-1 laptop:grid-cols-3 widescreen:grid-cols-4 gap-6',
}
const styles = campaignsStyles as Readonly<StyleRecord>

export function Campaigns({
  title,
  image,
  campaigns,
}: Readonly<CampaignsProps>): React.ReactElement {
  return (
    <>
      <Banner
        title={title ?? ''}
        image={image ?? ''}
      />

      <div className={styles.campaigns}>
        {campaigns?.map((campaign: ModifiedCampaignEntry, i: number) => {
          return (
            <CampaignItem
              key={campaign.id}
              {...campaign}
            />
          )
        })}
      </div>
    </>
  )
}
