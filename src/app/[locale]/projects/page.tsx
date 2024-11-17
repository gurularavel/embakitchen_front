import { Projects } from '~ek/components'
import type { BannerProps, ProjectEntry, ProjectsProps } from '~ek/types'
import { transformToUiData } from '~ek/utils'

export default async function ProjectsPage({
  params: { locale },
}: Readonly<PageProps>): Promise<React.ReactElement> {
  const [projectsPageResponse, projectsResponse] = await Promise.all([
    fetch('https://embakitchen.kvadrat.az/api/project'),
    fetch('https://embakitchen.kvadrat.az/api/projects'),
  ])
  const projectsPageData = await projectsPageResponse.json()
  const { data: projects } = await projectsResponse.json()

  const projectsProps: ProjectsProps = {
    banner: transformToUiData(
      {
        title: projectsPageData.title,
        image: projectsPageData.image,
      },
      locale,
    ) as BannerProps,
    projects: projects.map((project: Omit<ProjectEntry, 'content'>) =>
      transformToUiData(project, locale),
    ),
  }

  return <Projects {...projectsProps} />
}
