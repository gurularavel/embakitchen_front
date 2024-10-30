import { Banner, Statistics, Video } from '~ek/components'

interface AboutCompanyProps {
  banner: {
    title: string
    image: string
  }
  description: string
}

const aboutCompanyStyles: Readonly<TwClasses> = {
  description:
    'px-4 tablet:px-10 laptop:px-15 widescreen:px-25 mb-6 laptop:mb-10 text-base laptop:text-xl font-normal laptop:leading-7 text-gray-3 flex flex-col justify-between gap-y-6',
  statisticsWrapper: 'bg-gray-1 px-4 py-[50px]',
  statisticsTitle:
    'mb-16 text-2xl leading-10 text-white text-center font-normal',
}
const styles = aboutCompanyStyles as Readonly<StyleRecord>

export function AboutCompany({
  banner,
  description,
}: Readonly<AboutCompanyProps>): React.ReactElement {
  return (
    <>
      <Banner
        title={banner?.title ?? ''}
        img={banner?.image}
      />

      <div
        className={styles.description}
        dangerouslySetInnerHTML={{ __html: description }}
      />

      <Video />

      <div className={styles.statisticsWrapper}>
        <p className={styles.statisticsTitle}>
          EmbaKitchen brendi olaraq mebel məhsullarımızın istehsalında
          uzunmüddətli keyfiyyətə zəmanət verən texnologiyalardan istifadəni
          prioritet kimi müəyyənləşdiririk.
        </p>

        <Statistics context='about' />
      </div>
    </>
  )
}
