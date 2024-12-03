import {
  CurrentCampaigns,
  OrderStages,
  Slider,
  SlogansSection,
  Statistics,
} from '~ek/components'
import type { HomeProps } from '~ek/types'

export function Home({}: Readonly<HomeProps>): React.ReactElement {
  return (
    <>
      <Slider variant='main' />

      <Slider variant='gallery' />

      <Statistics context='home' />

      <OrderStages />

      <SlogansSection
        slogans={[
          'Siz arzulayın, biz reallaşdıraq',
          'Xəyallarınızdakı mətbəxi bizə həvalə edin',
        ]}
      />

      <Slider variant='partners' />

      <CurrentCampaigns />
    </>
  )
}
