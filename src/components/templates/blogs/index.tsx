import type { StaticImageData } from 'next/image'
import { Banner } from '~ek/components'

interface BlogsProps {
  banner: {
    title: string
    image: string | StaticImageData
  }
}

export function Blogs({ banner }: Readonly<BlogsProps>): React.ReactElement {
  return (
    <>
      <Banner
        title={banner?.title ?? ''}
        img={banner?.image ?? ''}
      />
    </>
  )
}
