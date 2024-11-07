import { useTranslations } from 'next-intl'
import { Projects } from '~ek/components'
import projectsPageBanner from '/public/assets/images/projects-page-banner.jpg'

export default function ProjectsPage(): React.ReactElement {
  const t = useTranslations('ProjectsPage')

  const projectsProps = {
    banner: {
      title: t('title'),
      image: projectsPageBanner,
    },
  }

  return <Projects {...projectsProps} />
}
