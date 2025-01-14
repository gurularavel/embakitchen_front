import Image from 'next/image'
import { NavLink } from '~ek/components'
import type { BlogDetailsProps, MediaFile } from '~ek/types'

const blogDetailsStyles: Readonly<TwClasses> = {
  blog: 'mt-6 laptop:mt-10 mb-6 laptop:mb-15 widescreen:mb-10',
  top: 'relative mx-0 laptop:mx-[135px] widescreen:mx-[140px]',
  imageWrapper: 'w-full h-[440px] relative',
  image: 'w-full h-full object-cover',
  titleWrapper:
    'min-h-[220px] laptop:min-h-[316px] widescreen:min-h-min flex items-center justify-center py-0 px-6 laptop:px-25 widescreen:py-10 bg-white absolute -bottom-[45px] left-4 right-4 tablet:bottom-0 tablet:left-10 tablet:right-10 laptop:-bottom-[158px] laptop:left-25 laptop:right-25 widescreen:static',
  title:
    'max-w-[238px] laptop:max-w-[770px] widescreen:max-w-[961px] text-2xl laptop:text-[38px] laptop:leading-[52px] tracking-[0.5px] text-tertiary-1 font-semibold text-center',
  contentWrapper:
    'mx-0 laptop:mx-[235px] pt-[45px] tablet:pt-6 laptop:pt-[158px] widescreen:pt-0 px-4 tablet:px-10 laptop:px-25',
  content:
    'mb-6 widescreen:mb-10 text-sm text-tertiary-5 font-normal widescreen:text-base',
  content2: '[&_p]:text-sm [&_p]:text-tertiary-5 [&_p]:font-normal',
  similarBlogs: 'px-4 tablet:px-10 laptop:px-15 widescreen:px-25',
  similarBlogsTitle:
    'h-[58px] relative mb-10 text-3xl laptop:text-[36px] leading-10 laptop:leading-[44px] font-semibold text-tertiary-1 after:content-[""] after:inline-block after:h-[2px] after:w-20 after:bg-tertiary-2 after:absolute after:left-0 after:bottom-0',
  blogs:
    'grid grid-cols-1 laptop:grid-cols-3 widescreen:grid-cols-4 gap-6 mb-6 laptop:mb-15',
  blogImageWrapper: 'w-full h-[290px] relative mb-8',
  blogImage: 'w-full h-full object-cover',
  blogTitle: 'text-xl leading-7 font-medium text-tertiary-1 mb-4',
  blogDescription: 'text-sm font-normal text-tertiary-5 line-clamp-3',
}
const styles = blogDetailsStyles as Readonly<StyleRecord>

export function BlogDetails({
  image,
  title,
  description,
  content,
  similar_posts,
}: Readonly<BlogDetailsProps>): React.ReactElement {
  return (
    <>
      <div className={styles.blog}>
        <div className={styles.top}>
          <div className={styles.imageWrapper}>
            <Image
              src={(image as unknown as MediaFile).original_url}
              alt={`Embakitchen - ${title}`}
              className={styles.image}
              fill
            />
          </div>

          <div className={styles.titleWrapper}>
            <h3 className={styles.title}>{title}</h3>
          </div>
        </div>

        <div className={styles.contentWrapper}>
          <p className={styles.content}>{description}</p>

          <div
            className={styles.content2}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>

      {similar_posts?.length && (
        <div className={styles.similarBlogs}>
          <h4 className={styles.similarBlogsTitle}>Similar Blogs</h4>

          <div className={styles.blogs}>
            {similar_posts?.map((blog, i: number) => (
              <NavLink
                className=''
                key={i}
                href={`/blog/${blog.slug}`}
              >
                <div className={styles.blogImageWrapper}>
                  <Image
                    src={blog.image.original_url}
                    alt={`Embakitchen - ${blog.title}`}
                    className={styles.blogImage}
                    fill
                  />
                </div>
                <div>
                  <h4 className={styles.blogTitle}>{blog.title}</h4>
                  <p className={styles.blogDescription}>{blog.description}</p>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
