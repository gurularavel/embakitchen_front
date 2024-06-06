import { Slider } from '@embakitchen/components'
import { Statistics } from '@embakitchen/components'
import { SloganSection } from '@embakitchen/components'

export default function Home() {
  return (
    <main>
      <Slider variant='main' />
      <Statistics />
      <SloganSection
        title='Siz arzulayın, biz reallaşdıraq'
        description='Xəyallarınızdakı mətbəxi bizə həvalə edin'
      />
    </main>
  )
}
