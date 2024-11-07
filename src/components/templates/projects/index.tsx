import { StaticImageData } from 'next/image'
import { Banner } from '~ek/components'

interface ProjectsProps {
  banner: {
    title: string
    image: string | StaticImageData
  }
}

export function Projects({
  banner,
}: Readonly<ProjectsProps>): React.ReactElement {
  return (
    <>
      <Banner
        title={banner?.title ?? ''}
        img={banner?.image ?? ''}
      />
    </>
  )
}
