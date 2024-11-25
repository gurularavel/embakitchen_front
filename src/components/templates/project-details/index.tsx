import Image from 'next/image'
import type { ProjectEntry, MediaFile } from '~ek/types'

const projects = Array(4)
  .fill({})
  .map(() => ({
    title: 'Not an expert? Not a problem. Here’s why.',
    content:
      'Worried about teaching or leading because you’re not an ‘expert’? Research says that’s an advantage. Learn how to leverage your inexperience for better products.',
    image:
      'https://cdn.media.amplience.net/i/shadesoflight/furniture_1?fmt=auto&w=575',
  }))

const projectDetailsStyles: Readonly<TwClasses> = {
  project: 'mt-6 laptop:mt-10 mb-6 laptop:mb-15 widescreen:mb-10',
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
    'mb-6 widescreen:mb-10 [&_p]:text-sm [&_p]:text-tertiary-5 [&_p]:font-normal widescreen:[&_p]:text-base',
  similarProjects: 'px-4 tablet:px-10 laptop:px-15 widescreen:px-25',
  similarProjectsTitle:
    'h-[58px] relative mb-10 text-3xl laptop:text-[36px] leading-10 laptop:leading-[44px] font-semibold text-tertiary-1 after:content-[""] after:inline-block after:h-[2px] after:w-20 after:bg-tertiary-2 after:absolute after:left-0 after:bottom-0',
  projects:
    'grid grid-cols-1 laptop:grid-cols-3 widescreen:grid-cols-4 gap-6 mb-6 laptop:mb-15',
  projectImageWrapper: 'w-full h-[290px] relative mb-8',
  projectImage: 'w-full h-full object-cover',
  projectTitle: 'text-xl leading-7 font-medium text-tertiary-1 mb-4',
  projectContent: 'text-sm font-normal text-tertiary-5',
}
const styles = projectDetailsStyles as Readonly<StyleRecord>

export function ProjectDetails({
  images,
  title,
  content,
}: Readonly<ProjectEntry>): React.ReactElement {
  return (
    <>
      <div className={styles.project}>
        <div className={styles.top}>
          <div className={styles.imageWrapper}>
            <Image
              src={(images as unknown as MediaFile).original_url}
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
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>

      <div className={styles.similarProjects}>
        <h4 className={styles.similarProjectsTitle}>Similar Projects</h4>

        <div className={styles.projects}>
          {projects.map((project, i: number) => (
            <div
              className=''
              key={i}
            >
              <div className={styles.projectImageWrapper}>
                <Image
                  src={project.image}
                  alt={`Embakitchen - ${project.title}`}
                  className={styles.projectImage}
                  fill
                />
              </div>
              <div>
                <h4 className={styles.projectTitle}>{project.title}</h4>
                <p className={styles.projectContent}>{project.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
