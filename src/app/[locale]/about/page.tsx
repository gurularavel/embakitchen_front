import { About } from '~ek/components'
import { getAboutPageContent } from '~ek/services'
import { getAboutInfoBlocksContent } from '~ek/services/about'
import type { AboutInfoBlock, AboutPageResponse, AboutProps } from '~ek/types'
import { omit, transformToUiData } from '~ek/utils'

export default async function AboutPage({
  params: { locale },
}: Readonly<PageProps>): Promise<React.ReactElement> {
  const aboutPageContent: AboutPageResponse = await getAboutPageContent()
  const aboutInfoBlocksContent: AboutInfoBlock[] =
    await getAboutInfoBlocksContent({
      page: 1,
      perPage: 10,
      status: true,
    })

  const uiData = transformToUiData(
    omit({ source: aboutPageContent, fields: ['id'] }),
    locale,
  )
  const aboutProps: AboutProps = {
    ...(uiData as Omit<AboutProps, 'aboutInfoBlocks'>),
    aboutInfoBlocks: transformToUiData(
      aboutInfoBlocksContent,
      locale,
    ) as AboutInfoBlock<string>[],
  }

  return <About {...aboutProps} />
}
