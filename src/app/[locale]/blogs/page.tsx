import { Blogs } from '~ek/components'
import type { BannerProps, BlogEntry, BlogsProps } from '~ek/types'
import { transformToUiData } from '~ek/utils'

export default async function BlogsPage({
  params: { locale },
}: PageProps): Promise<React.ReactElement> {
  const [blogsPageResponse, blogsResponse] = await Promise.all([
    fetch('https://embakitchen.kvadrat.az/api/blog'),
    fetch('https://embakitchen.kvadrat.az/api/posts'),
  ])
  const { blogPage: blogPageData } = await blogsPageResponse.json()
  const { data: blogs } = await blogsResponse.json()

  const blogsProps: BlogsProps = {
    banner: transformToUiData(blogPageData, locale) as BannerProps,
    blogs: blogs.map((blog: BlogEntry) => transformToUiData(blog, locale)),
  }

  return <Blogs {...blogsProps} />
}
