import * as React from 'react'
import { Slogan, Statistics } from '~ek/components'

interface MainProps {}

export function Main({}: Readonly<MainProps>): ReactComponent {
  return (
    <>
      <Statistics />

      <Slogan
        slogans={[
          'Siz arzulayın, biz reallaşdıraq',
          'Xəyallarınızdakı mətbəxi bizə həvalə edin',
        ]}
      />
    </>
  )
}
