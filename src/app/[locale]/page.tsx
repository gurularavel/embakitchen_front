import type { Metadata } from 'next'
import { Home } from '~ek/components'
import { getHomepageContent } from '~ek/services'
import type { HomepageResponse, HomeProps } from '~ek/types'
import { omit, transformToUiData } from '~ek/utils'

export const metadata: Metadata = {
  title: 'Embakitchen Ana Səhifə',
}

export default async function HomePage({
  params: { locale },
}: Readonly<PageProps>): Promise<React.ReactElement> {
  const homepageContent = await getHomepageContent()

  const homepageContentWithoutId = omit({
    source: homepageContent as HomepageResponse,
    fields: ['id'],
  })
  const homeProps = transformToUiData(
    homepageContentWithoutId,
    locale,
  ) as HomeProps

  return <Home {...homeProps} />
}
