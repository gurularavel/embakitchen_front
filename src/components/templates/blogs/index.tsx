'use client'

import Image from 'next/image'
import { Banner, NavLink } from '~ek/components'
import { usePathname } from '~ek/i18n/routing'
import type { BlogsProps, MediaFile } from '~ek/types'

const blogStyles: Readonly<TwClasses> = {
  blogs:
    'mb-6 laptop:mb-10 px-4 tablet:px-10 laptop:px-15 widescreen:px-25 grid grid-cols-1 laptop:grid-cols-3 widescreen:grid-cols-4 gap-y-[50px] gap-x-6',
  imageWrapper: 'relative h-[290px] mb-8',
  image: 'object-cover',
  title: 'mb-4 text-xl leading-7 font-semibold text-tertiary-1',
  content: 'text-sm font-normal text-tertiary-5 line-clamp-3',
}
const styles = blogStyles as Readonly<StyleRecord>

export function Blogs({
  title,
  image,
  blogs,
}: Readonly<BlogsProps>): React.ReactElement {
  const pathname = usePathname()

  return (
    <>
      <Banner
        title={title ?? ''}
        image={image ?? ''}
      />

      <div className={styles.blogs}>
        {blogs?.map((blog: ArrayElement<typeof blogs>) => (
          <div key={blog.id}>
            <NavLink href={`${pathname}/${blog.slug}`}>
              <div className={styles.imageWrapper}>
                <Image
                  src={(blog.image as unknown as MediaFile).original_url}
                  alt={`Embakitchen - ${blog.title}`}
                  className={styles.image}
                  fill
                />
              </div>

              <div>
                <h5 className={styles.title}>{blog.title}</h5>
                <p className={styles.content}>{blog.description}</p>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </>
  )
}
