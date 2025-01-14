import { ProjectDetails } from '~ek/components'
import { getProjectDetails } from '~ek/services'
import type { ProjectDetailsProps } from '~ek/types'
import { transformToUiData } from '~ek/utils'

export default async function ProjectDetailsPage({
  params: { locale, slug },
}: Readonly<PageProps>): Promise<React.ReactElement> {
  const project = await getProjectDetails(slug!)
  const projectDetailsProps = transformToUiData(
    project,
    locale,
  ) as ProjectDetailsProps

  return <ProjectDetails {...projectDetailsProps} />
}
