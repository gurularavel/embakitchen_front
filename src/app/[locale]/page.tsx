import type { Metadata } from 'next'
import { Home } from '~ek/components'
import type { HomeProps } from '~ek/types'

export const metadata: Metadata = {
  title: 'Embakitchen Ana Səhifə',
}

export default async function HomePage({
  params: { locale },
}: Readonly<PageProps>): Promise<React.ReactElement> {
  const homeProps: HomeProps = {}

  return <Home {...homeProps} />
}
