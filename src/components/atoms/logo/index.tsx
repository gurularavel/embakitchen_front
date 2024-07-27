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
    logo: 'flex items-center',
    img: '',
  },
}
const logoHeaderStyles: Readonly<StyleRecord> = logoStyles.header as StyleRecord

const logos: Readonly<Record<LogoVariant, React.ReactElement>> = {
  header: <LogoHeader />,
}

function LogoHeader(): React.ReactElement {
  return (
    <Link
      href='/'
      className={logoHeaderStyles.logo}
    >
      <Image
        src={logoHeaderImg}
        alt='embakitchen logo'
        className={logoHeaderStyles.img}
      />
    </Link>
  )
}

export function Logo({ variant }: Readonly<LogoProps>): React.ReactElement {
  return logos[variant]
}
