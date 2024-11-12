import { useTranslations } from 'next-intl'
import { Projects } from '~ek/components'
import type { ProjectEntry } from '~ek/types'
import projectsPageBanner from '/public/assets/images/projects-page-banner.jpg'
import project1 from '/public/assets/images/projects/project-1.jpeg'
import project2 from '/public/assets/images/projects/project-2.jpeg'
import project3 from '/public/assets/images/projects/project-3.jpeg'

const projects: Partial<ProjectEntry>[] = Array(9)
  .fill([
    {
      title: 'Adel Ral',
      tag: 'Ən çox satılan',
      img: project1,
    },
    {
      title: 'Legno',
      tag: 'Yeni',
      img: project2,
    },
    {
      title: 'Françesko cream',
      tag: '20% endirim',
      img: project3,
    },
  ])
  .flat()

export default function ProjectsPage(): React.ReactElement {
  const t = useTranslations('ProjectsPage')

  const projectsProps = {
    banner: {
      title: t('title'),
      image: projectsPageBanner,
    },
    projects,
  }

  return <Projects {...projectsProps} />
}
