import { About } from '~ek/components'
import type { AboutInfoBlock, AboutProps, BannerProps } from '~ek/types'
import { transformToUiData } from '~ek/utils'

export default async function AboutPage({
  params: { locale },
}: Readonly<PageProps>): Promise<React.ReactElement> {
  const promises = await Promise.all([
    fetch('https://embakitchen.kvadrat.az/api/about'),
    fetch('https://embakitchen.kvadrat.az/api/about-info-blocks'),
  ])
  const [aboutPageData, { data: infoBlocks }] = await Promise.all(
    promises.map(promise => promise.json()),
  )

  const aboutProps: AboutProps = {
    banner: transformToUiData(
      {
        title: aboutPageData.title,
        image: aboutPageData.image,
      },
      locale,
    ) as BannerProps,
    ...(transformToUiData(
      {
        description: aboutPageData.content,
        video: aboutPageData.video,
      },
      locale,
    ) as Pick<AboutProps, 'description' | 'video'>),
    infoBlocks: infoBlocks.map(
      (block: AboutInfoBlock) =>
        transformToUiData(block, locale) as AboutInfoBlock,
    ),
  }

  return <About {...aboutProps} />
}
