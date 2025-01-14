import Image from 'next/image'
import { format } from 'date-fns'
import { az } from 'date-fns/locale'
import { useTranslations } from 'next-intl'
import { Icon, NavLink, Timer } from '~ek/components'
import type { ModifiedCampaignEntry } from '~ek/types'

const campaignItemStyles: Readonly<TwClasses> = {
  container: 'w-full last:hidden widescreen:last:block',
  wrapper: 'h-full',
  imgWrapper: 'h-60 relative',
  img: 'w-full h-full object-cover',
  body: 'h-[calc(100%-theme(height.60))] p-6 border border-solid border-gray-8 border-t-0',
  dates:
    'text-sm font-semibold leading-5 text-gray-4 inline-block mb-2.5 capitalize',
  title: 'text-xl font-semibold leading-5 text-gray-1 mb-[33px]',
  info: 'flex flex-col mobile:flex-row laptop:flex-col desktop:flex-row justify-between gap-x-6 gap-y-1',
  link: 'h-14 px-4 w-full mobile:w-1/2 laptop:w-full desktop:w-1/2 flex justify-between items-center text-base font-medium text-gray-2 border border-solid border-gray-9',
}
const styles = campaignItemStyles as Readonly<StyleRecord>

export function CampaignItem({
  title,
  image,
  startDate,
  endDate,
  slug,
}: Readonly<ModifiedCampaignEntry>): React.ReactElement {
  const t = useTranslations('buttons')
  const [start, end] = [startDate, endDate]
    .map(d => {
      return d
        .split(' ')
        .map((v: string, i: number) => {
          if (i === 0) {
            return v.split('.').reverse().join('-')
          }

          return v
        })
        .join('T')
    })
    .map((d: string) => new Date(d))

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imgWrapper}>
          <Image
            src={image.original_url}
            alt={`Embakitchen campaign - ${title}`}
            className={styles.img}
            fill
          />
        </div>

        <div className={styles.body}>
          <span className={styles.dates}>
            {format(start, 'd MMMM', { locale: az })}
            &nbsp;-&nbsp;
            {format(end, 'd MMMM', { locale: az })}
          </span>

          <h5 className={styles.title}>{title}</h5>

          <div className={styles.info}>
            <Timer end={end} />

            <NavLink
              href={`/campaigns/${slug}`}
              className={styles.link}
            >
              <span>{t('inDetails')}</span>
              <Icon
                variant='chevron-right'
                sizes='w-6 h-6'
              />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}
