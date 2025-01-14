import { Banner } from '~ek/components'
import type { CampaignDetailsProps } from '~ek/types'

const campaignDetailsStyles: Readonly<TwClasses> = {
  content:
    'mb-6 laptop:mb-25 mx-0 tablet:mx-10 laptop:mx-15 widescreen:mx-25 p-10 border border-solid border-primary-6 text-xl leading-7 font-normal text-gray-1',
}
const styles = campaignDetailsStyles as Readonly<StyleRecord>

export function CampaignDetails({
  title,
  image,
  content,
}: Readonly<CampaignDetailsProps>): React.ReactElement {
  return (
    <>
      <Banner
        title={title ?? ''}
        image={image ?? ''}
      />

      <div className={styles.content}>{content}</div>
    </>
  )
}
