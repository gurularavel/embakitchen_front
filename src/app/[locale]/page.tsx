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
  const popularBlogs = await getPopularBlogs({
    ...defaultApiQueryParams,
    perPage: 3,
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
    blogs: transformToUiData(popularBlogs, locale) as HomeProps['blogs'],
  }

  return <Home {...homeProps} />
}
