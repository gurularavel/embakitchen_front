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
  popularBlogs,
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
        backgroundImg={createOrderImage}
      />

      {!!campaigns?.length && <CurrentCampaigns campaigns={campaigns} />}

      <PopularBlogs
        blogs={blogs}
        popularBlogs={popularBlogs}
      />

      <Slider variant='partners' />
    </>
  )
}
