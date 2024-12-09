import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Button, Icon, Video } from '~ek/components'
import type { HomeProps } from '~ek/types'

type OffersProps = Pick<HomeProps, 'video' | 'videoSection' | 'infoArray'>

const offersStyles: Readonly<TwClasses> = {
  container: '',
  videoWrapper: 'px-4',
  wrapper: 'bg-gray-1 px-4',
  textSection: 'mb-10',
  title: 'text-base font-medium text-primary-6 mb-3',
  content: 'text-3xl leading-10 font-semibold text-white',
  readAboutUs:
    'w-full h-14 bg-primary-2 flex items-center justify-center gap-x-2 rounded-md mb-6 text-base font-semibold text-tertiary-11',
  readAboutUsIcon: 'w-6 h-6',
  options: 'flex flex-col gap-y-16',
  option: '',
  optionTop: 'relative flex items-center gap-x-3 mb-5',
  icon: 'w-10 h-10',
  infoTitle: 'text-base font-medium text-white',
  infoContent: 'text-sm leading-6 font-medium text-tertiary-8',
}
const styles = offersStyles as Readonly<StyleRecord>

export function Offers({
  video,
  videoSection,
  infoArray,
}: Readonly<OffersProps>): React.ReactElement {
  const t = useTranslations('buttons')

  return (
    <div
      className={styles.container}
      style={{ border: '2px solid red' }}
    >
      <div className={styles.videoWrapper}>
        <Video video={video} />
      </div>

      <div className={styles.wrapper}>
        <div className={styles.textSection}>
          <h4 className={styles.title}>{videoSection.title}</h4>
          <p className={styles.content}>{videoSection.content}</p>
        </div>

        <Button classes={styles.readAboutUs}>
          <span>{t('readAboutUs')}</span>
          <Icon
            variant='arrow-right-white'
            sizes={styles.readAboutUsIcon}
          />
        </Button>

        <div className={styles.options}>
          {infoArray.map(
            (info: ArrayElement<HomeProps['infoArray']>, i: number) => (
              <div
                key={`${info.title}-${i}`}
                className={styles.option}
              >
                <div className={styles.optionTop}>
                  <Image
                    src={info.icon}
                    alt={info.title}
                    className={styles.icon}
                    width={40}
                    height={40}
                  />
                  <span className={styles.infoTitle}>{info.title}</span>
                </div>

                <p className={styles.infoContent}>{info.content}</p>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  )
}
