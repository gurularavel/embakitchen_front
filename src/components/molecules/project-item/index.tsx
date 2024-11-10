import Image, { type StaticImageData } from 'next/image'
import type { ProjectEntry } from '~ek/types'

type ProjectItemProps = Partial<ProjectEntry>

const projectItemStyles: Readonly<TwClasses> = {
  top: 'relative h-60',
  img: 'w-full h-full object-cover',
  tag: 'absolute top-0 right-0 bg-primary-9 px-6 h-12 flex items-center justify-center text-base font-medium text-primary-1',
  bottom: 'pt-3',
  title: 'text-xl leading-7 font-semibold text-gray-1',
}
const styles = projectItemStyles as Readonly<StyleRecord>

export function ProjectItem({
  title,
  tag,
  img,
}: Readonly<ProjectItemProps>): React.ReactElement {
  return (
    <div>
      <div className={styles.top}>
        <Image
          src={img as StaticImageData}
          alt={`Embakitchen - ${title}`}
          className={styles.img}
        />
        <span className={styles.tag}>{tag}</span>
      </div>
      <div className={styles.bottom}>
        <h5 className={styles.title}>{title}</h5>
      </div>
    </div>
  )
}
