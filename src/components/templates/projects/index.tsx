'use client'

import { Banner, Pagination, ProjectItem } from '~ek/components'
import { useScreenSize, useStore } from '~ek/hooks'
import type { ProjectEntry, ProjectsProps } from '~ek/types'
import { getProjectsQuantity } from '~ek/utils'

const projectsStyles: Readonly<TwClasses> = {
  projects:
    'flex flex-col tablet:grid tablet:grid-cols-2 laptop:grid-cols-3 widescreen:grid-cols-4 gap-y-6 tablet:gap-6 laptop:gap-y-10 px-4 tablet:px-10 laptop:px-15 widescreen:px-25 mb-6 laptop:mb-10',
}
const styles = projectsStyles as Readonly<StyleRecord>

export function Projects({
  banner,
  projects,
}: Readonly<ProjectsProps>): React.ReactElement {
  const { width } = useScreenSize()
  const { isClientRendering } = useStore(state => state.clientSlice)
  const selectedQuantity = getProjectsQuantity(width)
  const projectsToRender = projects.slice(0, selectedQuantity)

  return (
    <>
      <Banner
        title={banner?.title ?? ''}
        image={banner?.image ?? ''}
      />

      <div className={styles.projects}>
        {isClientRendering &&
          projectsToRender?.map(
            (project: Omit<ProjectEntry, 'content'>, i: number) => (
              <ProjectItem
                key={i}
                {...project}
              />
            ),
          )}
      </div>

      <Pagination totalPages={5} />
    </>
  )
}
