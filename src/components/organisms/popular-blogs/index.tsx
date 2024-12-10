import Image from 'next/image'
import sectionTitleBg from '/public/assets/images/section-title-bg.png'
import { useTranslations } from 'next-intl'

const popularBlogsStyles: Readonly<TwClasses> = {
  container: 'mb-6',
  wrapper: '',
}
const styles = popularBlogsStyles as Readonly<StyleRecord>

export function PopularBlogs(): React.ReactElement {
  const t = useTranslations('titles')

  return (
    <div
      className={styles.container}
      style={{ border: '2px solid red' }}
    >
      <div className={styles.wrapper}>
        <div className={styles.titleWrapper}>
          <h4 className={styles.title}>{t('homepageBlogs')}</h4>
          <div className={styles.titleWrapperBg}>
            <Image
              src={sectionTitleBg}
              alt='Embakitchen campaigns section title background'
              className={styles.titleWrapperBgImg}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
