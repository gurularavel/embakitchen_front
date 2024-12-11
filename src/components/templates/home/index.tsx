import {
  CurrentCampaigns,
  Offers,
  OrderStages,
  PopularBlogs,
  Slider,
  SlogansSection,
  Statistics,
} from '~ek/components'
import type { HomeProps } from '~ek/types'

export function Home({
  styleArray,
  createOrderSection,
  createOrderImage,
  campaigns,
  video,
  videoSection,
  infoArray,
  blogs,
}: Readonly<HomeProps>): React.ReactElement {
  return (
    <>
      <Slider variant='main' />

      <Slider variant='gallery' />

      <Statistics context='home' />

      <Offers
        video={video}
        videoSection={videoSection}
        infoArray={infoArray}
      />

      <OrderStages orderStages={styleArray} />

      <SlogansSection
        title={createOrderSection.title}
        content={createOrderSection.content}
      />

      <PopularBlogs blogs={blogs} />

      <Slider variant='partners' />

      <CurrentCampaigns campaigns={campaigns} />
    </>
  )
}
