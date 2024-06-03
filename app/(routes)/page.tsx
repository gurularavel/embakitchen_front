import { Slider } from '@embakitchen/_components'
import { Statistics } from '@embakitchen/_components'
import { SloganSection } from '@embakitchen/_components'

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
