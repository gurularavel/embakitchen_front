import Image from 'next/image'
import type { ProjectsProps } from '~ek/types'
import { NavLink } from '~ek/components/atoms'
import { usePathname } from '~ek/i18n/routing'

type ProjectItemProps = ArrayElement<ProjectsProps['projects']['data']>

const projectItemStyles: Readonly<TwClasses> = {
  top: 'relative h-60',
  img: 'w-full h-full object-cover',
  tag: 'absolute top-0 right-0 bg-primary-9 px-6 h-12 flex items-center justify-center text-base font-medium text-primary-1',
  bottom: 'pt-3',
  title: 'text-xl leading-7 font-semibold text-gray-1',
}
const styles = projectItemStyles as Readonly<StyleRecord>

export function ProjectItem({
  bannerImage,
  title,
  tags,
  slug,
}: Readonly<ProjectItemProps>): React.ReactElement {
  const pathname = usePathname()

  return (
    <div>
      <NavLink href={`${pathname}/${slug}`}>
        <div className={styles.top}>
          <Image
            src={bannerImage.original_url}
            alt={`Embakitchen - ${title}`}
            className={styles.img}
            fill
          />
          {!!tags.length && <span className={styles.tag}>{tags[0].title}</span>}
        </div>
        <div className={styles.bottom}>
          <h5 className={styles.title}>{title}</h5>
        </div>
      </NavLink>
    </div>
  )
}
