import Image from 'next/image'
import type { BlogEntry, MediaFile } from '~ek/types'

const blogDetailsStyles: Readonly<TwClasses> = {
  blog: '',
  topWrapper: 'w-full h-[440px] mt-6 relative',
  image: 'w-full h-full object-cover',
  titleWrapper: 'py-[30px] px-6 bg-white absolute -bottom-6 left-4 right-4',
  title: 'text-2xl tracking-[0.5px] text-tertiary-1 font-semibold text-center',
  contentWrapper: 'pt-11 px-4',
  content: 'text-sm font-normal',
}
const styles = blogDetailsStyles as Readonly<StyleRecord>

export function BlogDetails({
  image,
  title,
}: Readonly<BlogEntry>): React.ReactElement {
  return (
    <div className={styles.blog}>
      <div className={styles.topWrapper}>
        <Image
          src={(image as unknown as MediaFile).original_url}
          alt='Embakitchen sample blog image'
          className={styles.image}
          fill
        />

        <div className={styles.titleWrapper}>
          <h5 className={styles.title}>{title}</h5>
        </div>
      </div>

      <div className={styles.contentWrapper}>
        <p className={styles.content}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab harum
          quod quasi nihil velit, nostrum odio enim aspernatur rem porro
          repellat magni accusamus, aperiam maiores veniam reiciendis, quae
          similique consequuntur!
        </p>
      </div>
    </div>
  )
}
