import { Banner, CampaignItem } from '~ek/components'
import type { CampaignEntry, CampaignsProps } from '~ek/types'

const campaignsStyles: Readonly<TwClasses> = {
  campaigns:
    'mb-6 laptop:mb-25 px-4 tablet:px-10 laptop:px-15 widescreen:px-25 flex flex-col laptop:flex-row justify-between gap-6',
}
const styles = campaignsStyles as Readonly<StyleRecord>

export function Campaigns({
  title,
  image,
}: Readonly<CampaignsProps>): React.ReactElement {
  return (
    <>
      <Banner
        title={title ?? ''}
        image={image ?? ''}
      />

      {/* <div className={styles.campaigns}>
        {campaigns?.map((campaign: CampaignEntry, i: number) => {
          const { description, ...campaignItemProps } = campaign

          return (
            <CampaignItem
              key={i}
              {...campaignItemProps}
            />
          )
        })}
      </div> */}
    </>
  )
}
