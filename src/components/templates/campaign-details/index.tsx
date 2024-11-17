import { Banner } from '~ek/components'
import type { CampaignDetailsProps } from '~ek/types'

const campaignDetailsStyles: Readonly<TwClasses> = {
  content:
    'mb-6 laptop:mb-25 mx-0 tablet:mx-10 laptop:mx-15 widescreen:mx-25 p-10 border border-solid border-primary-6',
  title: 'text-2xl font-semibold text-gray-1 mb-4',
  description: 'text-xl leading-7 font-normal text-gray-1 mb-4',
  note: 'text-xl leading-7 font-normal text-primary-1',
}
const styles = campaignDetailsStyles as Readonly<StyleRecord>

export function CampaignDetails({
  banner,
}: Readonly<CampaignDetailsProps>): React.ReactElement {
  return (
    <>
      <Banner
        title={banner?.title ?? ''}
        image={banner?.image ?? ''}
      />

      <div className={styles.content}>
        <h4 className={styles.title}>
          Büdcənizə uyğun mətbəx mebeli axtarırsınız?
        </h4>

        <p className={styles.description}>
          Narahat olmağa dəyməz! Embakichendə əla fürsət var! 5-20 May
          tarixlərində özəl mətbəx və dolab sifarişlərini topdan qiymətinə 27%
          endirimlə əldə edə biləcəksiniz. Embakitchen hər zaman sizi düşünür!{' '}
        </p>

        <p className={styles.note}>
          Qeyd: kampaniya yalnız nağd alış zamanı tətbiq olunur.
        </p>
      </div>
    </>
  )
}
