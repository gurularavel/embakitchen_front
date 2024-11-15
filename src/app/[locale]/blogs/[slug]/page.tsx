import { BlogDetails } from '~ek/components'
import type { BlogEntry } from '~ek/types'
import { transformToUiData } from '~ek/utils'

export default async function BlogDetailsPage({
  params: { locale, slug },
}: Readonly<PageProps>): Promise<React.ReactElement> {
  const response = await fetch(
    `https://embakitchen.kvadrat.az/api/posts/${slug}`,
  )
  const { data: selectedBlogData } = await response.json()
  const blogDetailsProps = transformToUiData(
    selectedBlogData,
    locale,
  ) as BlogEntry

  return <BlogDetails {...blogDetailsProps} />
}
