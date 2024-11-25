import {
  CurrentCampaigns,
  OrderStages,
  Slider,
  SlogansSection,
  Statistics,
} from '~ek/components'

export function Home(): React.ReactElement {
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
