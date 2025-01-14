import { BlogDetails } from '~ek/components'
import { getBlogDetails } from '~ek/services'
import type { BlogDetailsProps } from '~ek/types'
import { omit, transformToUiData } from '~ek/utils'

export default async function BlogDetailsPage({
  params: { locale, slug },
}: Readonly<PageProps>): Promise<React.ReactElement> {
  const blogDetails = await getBlogDetails(slug!)

  const blogDetailsProps = transformToUiData(
    omit({ source: blogDetails, fields: ['id', 'slug', 'status'] }),
    locale,
  ) as BlogDetailsProps

  return <BlogDetails {...blogDetailsProps} />
}
