import { About } from '~ek/components'
import { getAboutPageContent } from '~ek/services'
import type {
  AboutInfoBlock,
  AboutPageResponse,
  AboutProps,
  BannerProps,
} from '~ek/types'
import { transformToUiData } from '~ek/utils'

export default async function AboutPage({
  params: { locale },
}: Readonly<PageProps>): Promise<React.ReactElement> {
  const aboutPageContent: AboutPageResponse = await getAboutPageContent()
  const [infoBlockResponse] = await Promise.all([
    fetch('https://embakitchen.kvadrat.az/api/about-info-blocks'),
  ])
  const { data: infoBlocks } = await infoBlockResponse.json()

  const aboutProps: AboutProps = {
    banner: transformToUiData(
      {
        title: aboutPageContent.title,
        image: aboutPageContent.image,
      },
      locale,
    ) as BannerProps,
    ...(transformToUiData(
      {
        description: aboutPageContent.content,
        counter_info: aboutPageContent.counter_info,
        video: aboutPageContent.video,
      },
      locale,
    ) as Pick<AboutProps, 'description' | 'video' | 'counter_info'>),
    infoBlocks: infoBlocks.map(
      (block: AboutInfoBlock) =>
        transformToUiData(block, locale) as AboutInfoBlock,
    ),
  }

  return <About {...aboutProps} />
}
