import * as React from 'react'
import { Slogan } from '~ek/components'

interface MainProps {}

export function Main({}: Readonly<MainProps>): ReactComponent {
  return (
    <>
      <Slogan
        slogans={[
          'Siz arzulayın, biz reallaşdıraq',
          'Xəyallarınızdakı mətbəxi bizə həvalə edin',
        ]}
      />
    </>
  )
}
