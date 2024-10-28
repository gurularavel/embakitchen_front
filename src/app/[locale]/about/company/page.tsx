import { getTranslations } from 'next-intl/server'
import { AboutCompany } from '~ek/components'

interface AboutCompanyPageProps {
  params: {
    locale: string
  }
}

export default async function AboutCompanyPage({
  params: { locale },
}: Readonly<AboutCompanyPageProps>): Promise<React.ReactElement> {
  const t = await getTranslations('AboutCompanyPage')
  const data = await fetch('https://embakitchen.kvadrat.az/api/about')
  const aboutCompanyPageData = await data.json()

  const aboutCompanyProps = {
    banner: {
      title: aboutCompanyPageData.title[locale],
      image: (aboutCompanyPageData.image[0] as { original_url: string })
        .original_url,
    },
    description: aboutCompanyPageData.content[locale],
  }

  return (
    <AboutCompany
      banner={{
        title: aboutCompanyProps.banner.title,
        image: aboutCompanyProps.banner.image,
      }}
      description={aboutCompanyProps.description}
    />
  )
}
