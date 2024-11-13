import { Banner } from '~ek/components'
import type { BlogsProps } from '~ek/types'

export function Blogs({ banner }: Readonly<BlogsProps>): React.ReactElement {
  return (
    <>
      <Banner
        title={banner?.title ?? ''}
        image={banner?.image ?? ''}
      />
    </>
  )
}
