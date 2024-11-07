import { About } from '~ek/components'

interface AboutPageProps {
  params: {
    locale: string
  }
}

export default async function AboutPage({
  params: { locale },
}: Readonly<AboutPageProps>): Promise<React.ReactElement> {
  const data = await fetch('https://embakitchen.kvadrat.az/api/about')
  const aboutPageData = await data.json()

  const aboutProps = {
    banner: {
      title: aboutPageData.title[locale],
      image: (aboutPageData.image[0] as { original_url: string }).original_url,
    },
    description: aboutPageData.content[locale],
    videoSrc: aboutPageData.video[0].original_url,
  }

  return <About {...aboutProps} />
}
