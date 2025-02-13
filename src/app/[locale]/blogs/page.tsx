import { Blogs } from '~ek/components'
import { getBlogs, getBlogsPageContent } from '~ek/services'
import type { BlogsProps, BlogsResponse } from '~ek/types'
import { defaultApiQueryParams, omit, transformToUiData } from '~ek/utils'

export default async function BlogsPage({
  params: { locale },
  searchParams,
}: PageProps): Promise<React.ReactElement> {
  const page = searchParams?.page ?? 1
  const blogsPageContent = await getBlogsPageContent()
  const blogs = await getBlogs({ ...defaultApiQueryParams, page })

  const blogsProps: BlogsProps = {
    ...(transformToUiData(
      omit({ source: blogsPageContent, fields: ['id'] }),
      locale,
    ) as Omit<BlogsProps, 'data' | 'pagination'>),
    blogs: transformToUiData(blogs, locale) as BlogsProps['blogs'],
  }

  return <Blogs {...blogsProps} />
}
