import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logoHeaderImg from '/public/assets/images/logo/header.png'

type LogoVariant = 'header'

interface LogoProps {
  variant: LogoVariant
}

const logoStyles: Readonly<TailwindStyle> = {
  header: {
    logoLink: 'flex items-center',
    img: '',
  },
}
const logoHeaderStyles: Readonly<StyleRecord> = logoStyles.header as StyleRecord

const logos: Readonly<Record<LogoVariant, React.ReactElement>> = {
  header: <LogoHeader />,
}

function LogoHeader(): React.ReactElement {
  return (
    <div>
      <Link
        href='/'
        className={logoHeaderStyles.logoLink}
      >
        <Image
          src={logoHeaderImg}
          alt='embakitchen logo'
          className={logoHeaderStyles.img}
        />
      </Link>
    </div>
  )
}

export function Logo({ variant }: Readonly<LogoProps>): React.ReactElement {
  return logos[variant]
}
