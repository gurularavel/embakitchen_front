import {
  CurrentCampaigns,
  OrderStages,
  Slider,
  SlogansSection,
  Statistics,
} from '~ek/components'
import type { HomeProps } from '~ek/types'

export function Home({
  styleArray,
  createOrderSection,
  createOrderImage,
}: Readonly<HomeProps>): React.ReactElement {
  return (
    <>
      <Slider variant='main' />

      <Slider variant='gallery' />

      <Statistics context='home' />

      <OrderStages orderStages={styleArray} />

      <SlogansSection
        title={createOrderSection.title}
        content={createOrderSection.content}
      />

      <Slider variant='partners' />

      <CurrentCampaigns />
    </>
  )
}
