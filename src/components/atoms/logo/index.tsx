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
    link: 'h-full flex items-center',
    img: 'w-25 h-[17px]',
  },
}
const logoHeaderStyles: Readonly<StyleRecord> = logoStyles.header as StyleRecord

const logos: Readonly<Record<LogoVariant, ReactComponent>> = {
  header: <LogoHeader />,
}

function LogoHeader(): ReactComponent {
  return (
    <Link
      href='/'
      className={logoHeaderStyles.link}
    >
      <Image
        src={logoHeaderImg}
        alt='embakitchen logo on header'
        className={logoHeaderStyles.img}
      />
    </Link>
  )
}

export function Logo({ variant }: Readonly<LogoProps>): ReactComponent {
  return logos[variant]
}
