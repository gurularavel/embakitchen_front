import { Blogs } from '~ek/components'
import { getBlogs, getBlogsPageContent } from '~ek/services'
import type { BlogsProps, BlogsResponse } from '~ek/types'
import { defaultApiQueryParams, omit, transformToUiData } from '~ek/utils'

export default async function BlogsPage({
  params: { locale },
}: PageProps): Promise<React.ReactElement> {
  const blogsPageContent = await getBlogsPageContent()
  const blogs = await getBlogs(defaultApiQueryParams)

  const uiData = transformToUiData(
    omit({ source: blogsPageContent, fields: ['id'] }),
    locale,
  )
  const blogsProps: BlogsProps = {
    ...(uiData as Omit<BlogsProps, 'blogs'>),
    blogs: transformToUiData(blogs, locale) as BlogsResponse['data'],
  }

  return <Blogs {...blogsProps} />
}
