import { About } from '~ek/components'
import { getAboutInfoBlocksContent, getAboutPageContent } from '~ek/services'
import type { AboutInfoBlock, AboutPageResponse, AboutProps } from '~ek/types'
import { defaultApiQueryParams, omit, transformToUiData } from '~ek/utils'

export default async function AboutPage({
  params: { locale },
}: Readonly<PageProps>): Promise<React.ReactElement> {
  const aboutPageContent: AboutPageResponse = await getAboutPageContent()
  const aboutInfoBlocksContent: AboutInfoBlock[] =
    await getAboutInfoBlocksContent(defaultApiQueryParams)

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
