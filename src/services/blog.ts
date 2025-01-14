import { httpClient } from '~ek/http-client'
import type { BlogEntry, BlogsPageResponse, BlogsResponse } from '~ek/types'

export async function getBlogsPageContent(): Promise<BlogsPageResponse> {
  const response = await httpClient.get<BlogsPageResponse>('/blog-page')
  return response as BlogsPageResponse
}

export async function getBlogs(
  apiQueryParams: ApiQueryParams,
): Promise<BlogsResponse['data']> {
  const response = await httpClient.get<BlogsResponse>('/posts', apiQueryParams)

  return response?.data as BlogsResponse['data']
}

export async function getBlogDetails(slug: string): Promise<BlogEntry> {
  const response = await httpClient.get<BlogEntry>(`/posts/${slug}`)
  return response as BlogEntry
}

export async function getPopularBlogs(
  apiQueryParams: ApiQueryParams,
): Promise<BlogsResponse['data']> {
  const response = await httpClient.get<BlogsResponse>(
    '/popular-posts',
    apiQueryParams,
  )

  return response?.data as BlogsResponse['data']
}
