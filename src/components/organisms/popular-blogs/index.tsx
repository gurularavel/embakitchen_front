import Image from 'next/image'
import { useTranslations } from 'next-intl'
import type { HomeProps } from '~ek/types'
import sectionTitleBg from '/public/assets/images/section-title-bg.png'

interface PopularBlogsProps {
  blogs: HomeProps['blogs']
}

const popularBlogsStyles: Readonly<TwClasses> = {
  container: 'mb-6',
  wrapper: '',
  titleWrapper: 'relative flex justify-between gap-x-10 mb-10',
  title:
    'h-[54px] tablet:h-[58px] text-[30px] tablet:text-3xl font-medium leading-9 tablet:leading-10 text-tertiary-1 border-b-2 border-solid border-tertiary-2 whitespace-nowrap',
  titleWrapperBg:
    'hidden mobile:block absolute laptop:static -left-10 right-0 top-0',
  blogs: '',
  blog: '',
  blogImageWrapper: 'relative w-full h-[290px]',
  blogImage: 'w-full h-full',
  blogTitle: '',
  blogDescription: 'line-clamp-3',
}
const styles = popularBlogsStyles as Readonly<StyleRecord>

export function PopularBlogs({
  blogs,
}: Readonly<PopularBlogsProps>): React.ReactElement {
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

        <div className={styles.blogs}>
          {blogs.map((blog: ArrayElement<PopularBlogsProps['blogs']>) => (
            <div
              className={styles.blog}
              key={blog.id}
            >
              <div className={styles.blogImageWrapper}>
                <Image
                  src={blog.image.original_url}
                  alt={blog.title}
                  className={styles.blogImage}
                  fill
                />
              </div>

              <div>
                <h4 className={styles.blogTitle}>{blog.title}</h4>
                <p className={styles.blogDescription}>{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
