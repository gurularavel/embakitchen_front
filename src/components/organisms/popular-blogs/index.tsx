import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { twMerge } from 'tailwind-merge'
import type { HomeProps } from '~ek/types'
import sectionTitleBg from '/public/assets/images/section-title-bg.png'
import { NavLink } from '~ek/components/atoms'

interface PopularBlogsProps {
  blogs: HomeProps['blogs']
  popularBlogs: HomeProps['popularBlogs']
}

const popularBlogsStyles: Readonly<TwClasses> = {
  container: 'mb-6 laptop:mb-25',
  wrapper: '',
  titleWrapper:
    'relative flex justify-between gap-x-10 mb-10 px-4 tablet:px-10',
  subTitleWrapper: 'laptop:pl-0',
  title:
    'h-[54px] tablet:h-[58px] text-[30px] tablet:text-3xl font-medium leading-9 tablet:leading-10 text-tertiary-1 border-b-2 border-solid border-tertiary-2 whitespace-nowrap',
  titleWrapperBg:
    'hidden mobile:block absolute laptop:static -left-10 right-0 top-0',
  blogsWrapper: 'flex flex-col laptop:flex-row gap-x-20',
  blogs:
    'grid grid-cols-1 tablet:grid-cols-2 widescreen:grid-cols-3 gap-x-6 laptop:gap-x-16 gap-y-6 mb-6 px-0 tablet:px-10 laptop:pr-0',
  blog: 'hidden first:block tablet:even:block widescreen:last:block',
  blogImageWrapper: 'relative w-full h-[290px]',
  blogImage: 'w-full h-full object-cover',
  blogMainInfo: 'px-4 tablet:px-0 pt-8',
  blogTitle: 'mb-4 text-xl leading-7 font-semibold text-tertiary-1',
  blogDescription: 'text-sm font-normal text-tertiary-5 line-clamp-3',
  popularBlogsWrapper: 'w-full laptop:w-[480px] laptop:min-w-[480px]',
  popularBlogs: 'px-4 tablet:px-10 laptop:pl-0 flex flex-col gap-y-2',
  popularBlogsTitle:
    'relative mb-10 pb-6 text-3xl laptop:text-[36px] leading-10 laptop:leading-[44px] font-semibold text-tertiary-1 after:content-[""] after:inline-block after:h-[2px] after:w-20 after:bg-tertiary-2 after:absolute after:left-0 after:bottom-0',
  popularBlog:
    'flex justify-between items-center gap-x-4 border-b border-solid border-[#F2F3F8] pb-2',
  popularBlogTitle: 'max-w-[312px] text-base font-medium text-tertiary-1',
  popularBlogImageWrapper: 'relative w-20 min-w-20 h-20 min-h-20',
  popularBlogImage: 'object-cover',
}
const styles = popularBlogsStyles as Readonly<StyleRecord>

export function PopularBlogs({
  blogs,
  popularBlogs,
}: Readonly<PopularBlogsProps>): React.ReactElement {
  const t = useTranslations('titles')

  return (
    <div className={styles.container}>
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

        <div className={styles.blogsWrapper}>
          <div className={styles.blogs}>
            {blogs.map((blog: ArrayElement<PopularBlogsProps['blogs']>) => (
              <div
                className={styles.blog}
                key={blog.id}
              >
                <NavLink href={`/blog/${blog.slug}`}>
                  <div className={styles.blogImageWrapper}>
                    <Image
                      src={blog.image.original_url}
                      alt={blog.title}
                      className={styles.blogImage}
                      fill
                    />
                  </div>

                  <div className={styles.blogMainInfo}>
                    <h4 className={styles.blogTitle}>{blog.title}</h4>
                    <p className={styles.blogDescription}>{blog.description}</p>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>

          <div className={styles.popularBlogsWrapper}>
            <div
              className={twMerge(styles.titleWrapper, styles.subTitleWrapper)}
            >
              <h4 className={styles.popularBlogsTitle}>{t('popularBlogs')}</h4>
            </div>

            <ul className={styles.popularBlogs}>
              {popularBlogs.map(
                (popularBlog: ArrayElement<HomeProps['popularBlogs']>) => (
                  <li
                    key={popularBlog.id}
                    className={styles.popularBlog}
                  >
                    <h4 className={styles.popularBlogTitle}>
                      {popularBlog.title}
                    </h4>
                    <div className={styles.popularBlogImageWrapper}>
                      <Image
                        src={popularBlog.image.original_url}
                        alt={popularBlog.title}
                        className={styles.popularBlogImage}
                        fill
                      />
                    </div>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
