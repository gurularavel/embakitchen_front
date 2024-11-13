import { Badge, Banner, Statistics, Video } from '~ek/components'
import type { AboutInfoBlock, AboutProps } from '~ek/types'

const aboutStyles: Readonly<TwClasses> = {
  description:
    'px-4 tablet:px-10 laptop:px-15 widescreen:px-25 mb-6 laptop:mb-10 text-base laptop:text-xl font-normal laptop:leading-7 text-gray-3 flex flex-col justify-between gap-y-6',
  statisticsWrapper: 'bg-gray-1 px-4 py-[50px] mb-6 desktop:mb-10',
  statisticsTitle:
    'mb-16 text-2xl leading-10 text-white text-center font-normal',
  solutions: 'px-4 laptop:px-15 mb-6 desktop:mb-10',
  solutionsTitle: 'text-2xl leading-9 text-gray-1 font-semibold mb-5',
  solutionsOptions: 'flex flex-nowrap gap-x-6 overflow-x-auto',
  solutionsBadge:
    'flex items-center h-[52px] px-6 bg-primary-9 whitespace-nowrap text-lg leading-6 font-medium text-primary-1',
  infoBlocksWrapper:
    'px-4 tablet:px-0 laptop:px-15 widescreen:px-0 mb-6 laptop:mb-25 grid grid-cols-1 laptop:grid-cols-2 gap-y-4 laptop:gap-6',
  infoBlock:
    'p-6 border border-solid border-gray-9 basis-full laptop:basis-1/2',
  infoBlockTitle:
    'mb-6 text-base laptop:text-xl laptop:leading-7 font-semibold text-primary-1',
  infoBlockContent: 'text-sm laptop:text-base font-normal text-gray-4',
}
const styles = aboutStyles as Readonly<StyleRecord>

export function About({
  banner,
  description,
  video,
  infoBlocks,
}: Readonly<AboutProps>): React.ReactElement {
  return (
    <>
      <Banner
        title={banner?.title ?? ''}
        image={banner?.image}
      />

      <div
        className={styles.description}
        dangerouslySetInnerHTML={{ __html: description }}
      />

      {video && <Video video={video} />}

      <div className={styles.statisticsWrapper}>
        <p className={styles.statisticsTitle}>
          EmbaKitchen brendi olaraq mebel məhsullarımızın istehsalında
          uzunmüddətli keyfiyyətə zəmanət verən texnologiyalardan istifadəni
          prioritet kimi müəyyənləşdiririk.
        </p>

        <Statistics context='about' />
      </div>

      <div className={styles.solutions}>
        <h5 className={styles.solutionsTitle}>
          Təqdim etdiyimiz mebel həlləri:
        </h5>
        <div className={styles.solutionsOptions}>
          {[
            'Özəl mətbəx mebeli',
            'Qarderob',
            'Dəhliz mebeli',
            'Kupe dolab',
          ].map((label: string) => (
            <Badge
              key={label}
              className={styles.solutionsBadge}
            >
              {label}
            </Badge>
          ))}
        </div>
      </div>

      <div className={styles.infoBlocksWrapper}>
        {infoBlocks?.map((block: AboutInfoBlock) => (
          <div
            key={block.id}
            className={styles.infoBlock}
          >
            <h5 className={styles.infoBlockTitle}>{block.title}</h5>
            <p className={styles.infoBlockContent}>{block.content}</p>
          </div>
        ))}
      </div>
    </>
  )
}
