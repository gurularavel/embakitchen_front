import type { Metadata } from 'next'
import { Home } from '~ek/components'
import {
  getBlogs,
  getCampaigns,
  getHomepageContent,
  getPopularBlogs,
} from '~ek/services'
import type {
  HomepageResponse,
  HomeProps,
  ModifiedCampaignEntry,
} from '~ek/types'
import { defaultApiQueryParams, omit, transformToUiData } from '~ek/utils'

export const metadata: Metadata = {
  title: 'Embakitchen Ana Səhifə',
}

export default async function HomePage({
  params: { locale },
}: Readonly<PageProps>): Promise<React.ReactElement> {
  const homepageContent = await getHomepageContent()
  const currentCampaigns = await getCampaigns(defaultApiQueryParams)
  const blogs = await getBlogs({
    ...defaultApiQueryParams,
    perPage: 3,
  })
  const popularBlogs = await getPopularBlogs({
    ...defaultApiQueryParams,
    perPage: 4,
  })

  const homepageContentWithoutId = omit({
    source: homepageContent as HomepageResponse,
    fields: ['id'],
  })
  const homeProps: HomeProps = {
    ...(transformToUiData(homepageContentWithoutId, locale) as Omit<
      HomeProps,
      'campaigns'
    >),
    campaigns: transformToUiData(
      currentCampaigns,
      locale,
    ) as ModifiedCampaignEntry[],
    blogs: transformToUiData(blogs, locale) as HomeProps['blogs'],
    popularBlogs: transformToUiData(
      popularBlogs,
      locale,
    ) as HomeProps['popularBlogs'],
  }

  return <Home {...homeProps} />
}
