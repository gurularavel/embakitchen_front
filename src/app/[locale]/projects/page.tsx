import { Projects } from '~ek/components'
import { getProjects, getProjectsPageContent } from '~ek/services'
import type { ProjectsProps } from '~ek/types'
import { defaultApiQueryParams, omit, transformToUiData } from '~ek/utils'

export default async function ProjectsPage({
  params: { locale },
  searchParams,
}: Readonly<PageProps>): Promise<React.ReactElement> {
  const page = searchParams?.page ?? 1
  const projects = await getProjects({ ...defaultApiQueryParams, page })
  const projectsPageContent = await getProjectsPageContent()

  const projectsProps: ProjectsProps = {
    ...(transformToUiData(
      omit({ source: projectsPageContent, fields: ['id'] }),
      locale,
    ) as Omit<ProjectsProps, 'data' | 'pagination'>),
    projects: transformToUiData(projects, locale) as ProjectsProps['projects'],
  }

  return <Projects {...projectsProps} />
}
