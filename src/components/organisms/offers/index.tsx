import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Button, Icon, NavLink, Video } from '~ek/components'
import type { HomeProps } from '~ek/types'

type OffersProps = Pick<HomeProps, 'video' | 'videoSection' | 'infoArray'>

const offersStyles: Readonly<TwClasses> = {
  container: 'bg-gray-1 mb-6 pb-14',
  videoWrapper:
    'bg-white px-4 tablet:px-10 laptop:px-15 widescreen:px-20 relative',
  videoBg: 'bg-gray-1 absolute h-1/2 right-0 bottom-0 left-0',
  video: 'h-[352px] laptop:h-[565px]',
  wrapper:
    'flex flex-col laptop:flex-row gap-6 px-4 tablet:px-10 laptop:px-15 widescreen:px-20',
  textSection: 'w-full laptop:w-[536px]',
  title: 'text-base font-medium text-primary-6 mb-3',
  content: 'mb-10 text-3xl leading-10 font-semibold text-white',
  readAboutUs:
    'w-full laptop:w-auto px-0 laptop:px-10 h-14 bg-primary-2 flex items-center justify-center gap-x-2 rounded-md mb-6 text-base font-semibold text-tertiary-11',
  readAboutUsIcon: 'w-6 h-6',
  options: 'grid grid-cols-1 tablet:grid-cols-2 gap-16',
  option: 'w-full tablet:max-w-[312px]',
  optionTop: 'flex items-center gap-x-3 mb-5',
  iconWrapper: 'relative w-10 h-10',
  icon: 'w-full h-full',
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
    <div className={styles.container}>
      <div className={styles.videoWrapper}>
        <div className={styles.videoBg}></div>
        <Video
          video={video}
          className={styles.video}
        />
      </div>

      <div className={styles.wrapper}>
        <div className={styles.textSection}>
          <h4 className={styles.title}>{videoSection.title}</h4>

          <p className={styles.content}>{videoSection.content}</p>
          <NavLink href={'/about'}>
            <Button classes={styles.readAboutUs}>
              <span>{t('readAboutUs')}</span>
              <Icon
                variant='arrow-right-white'
                sizes={styles.readAboutUsIcon}
              />
            </Button>
          </NavLink>
        </div>

        <div className={styles.options}>
          {infoArray.map(
            (info: ArrayElement<HomeProps['infoArray']>, i: number) => (
              <div
                key={`${info.title}-${i}`}
                className={styles.option}
              >
                <div className={styles.optionTop}>
                  <div className={styles.iconWrapper}>
                    <Image
                      src={info.icon}
                      alt={info.title}
                      className={styles.icon}
                      fill
                    />
                  </div>
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
