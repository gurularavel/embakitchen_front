import { Banner } from '~ek/components'
import aboutPageBg from '/public/assets/images/about-page-bg.jpg'

export function AboutCompany(): React.ReactElement {
  return (
    <>
      <Banner
        title='Haqqımızda'
        img={aboutPageBg}
      />
    </>
  )
}
