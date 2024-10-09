import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'
import { Icon, Timer } from '~ek/components'
import type { CampaignEntry } from '~ek/types'

const campaignItemStyles: Readonly<TwClasses> = {
  container:
    'w-full laptop:w-1/3 widescreen:w-1/4 last:hidden widescreen:last:block',
  imgWrapper: 'h-60',
  img: 'w-full h-full',
  body: 'p-6 border border-solid border-gray-8 border-t-0',
  dates: 'text-sm font-semibold leading-5 text-gray-4 inline-block mb-2.5',
  title: 'text-xl font-semibold leading-5 text-gray-1 mb-[33px]',
  info: 'flex justify-between gap-x-6',
  link: 'flex-1 flex justify-between items-center p-4 text-base font-medium text-gray-2 border border-solid border-gray-9',
}
const styles = campaignItemStyles as Readonly<StyleRecord>

export function CampaignItem({
  title,
  img,
  startDate,
  endDate,
}: Readonly<Omit<CampaignEntry, 'description'>>): React.ReactElement {
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
            {format(startDate, 'd MMMM')}
            &nbsp;-&nbsp;
            {format(endDate, 'd MMMM')}
          </span>

          <h5 className={styles.title}>{title}</h5>

          <div className={styles.info}>
            <Timer
              start={startDate}
              end={endDate}
            />

            <Link
              href={`/campaign/${title}`}
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
