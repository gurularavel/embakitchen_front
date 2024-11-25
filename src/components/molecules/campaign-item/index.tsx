import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'
import { az } from 'date-fns/locale'
import { useLocale } from 'next-intl'
import { Icon, Timer } from '~ek/components'
import type { CampaignEntry } from '~ek/types'

const campaignItemStyles: Readonly<TwClasses> = {
  container:
    'w-full laptop:w-1/3 widescreen:w-1/4 last:hidden widescreen:last:block',
  imgWrapper: 'h-60',
  img: 'w-full h-full object-cover',
  body: 'p-6 border border-solid border-gray-8 border-t-0',
  dates:
    'text-sm font-semibold leading-5 text-gray-4 inline-block mb-2.5 capitalize',
  title: 'text-xl font-semibold leading-5 text-gray-1 mb-[33px]',
  info: 'flex flex-col mobile:flex-row laptop:flex-col desktop:flex-row justify-between gap-x-6 gap-y-1',
  link: 'h-14 px-4 w-full mobile:w-1/2 laptop:w-full desktop:w-1/2 flex justify-between items-center text-base font-medium text-gray-2 border border-solid border-gray-9',
}
const styles = campaignItemStyles as Readonly<StyleRecord>

export function CampaignItem({
  title,
  img,
  start,
  end,
}: Readonly<Omit<CampaignEntry, 'description'>>): React.ReactElement {
  const locale = useLocale()

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.imgWrapper}>
          <Image
            src={img}
            alt={`Embakitchen campaign - ${title}`}
            className={styles.img}
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

            <Link
              href={`/${locale}/campaigns/${title.toLowerCase().split(' ').join('-')}`}
              className={styles.link}
            >
              <span>Ətraflı</span>
              <Icon
                variant='chevron-right'
                sizes='w-6 h-6'
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
