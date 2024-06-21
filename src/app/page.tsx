import { Slider, Statistics, SloganSection } from '@embakitchen/components'

export default function Home() {
  return (
    <main>
      <Slider variant='main' />
      <Slider variant='gallery' />
      <Statistics />
      <SloganSection
        title='Siz arzulayın, biz reallaşdıraq'
        description='Xəyallarınızdakı mətbəxi bizə həvalə edin'
      />
      <Slider variant='partners' />
    </main>
  )
}
