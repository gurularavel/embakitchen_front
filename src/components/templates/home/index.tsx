import { SlogansSection, Statistics } from '~ek/components'

export function Home(): React.ReactElement {
  return (
    <>
      <Statistics />

      <SlogansSection
        slogans={[
          'Siz arzulayın, biz reallaşdıraq',
          'Xəyallarınızdakı mətbəxi bizə həvalə edin',
        ]}
      />
    </>
  )
}

// import { Slider } from '~ek/components'

// export function Main() {
//   return (
//     <>
//       <Slider />
//     </>
//   )
// }
