import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { logoStyles } from '@ek/components/atoms/styles'
import logoHeaderImg from '/public/assets/images/logo/header.png'

const logoHeaderStyles: Readonly<StyleRecord> = logoStyles.header as StyleRecord

type LogoVariant = 'header'

interface LogoProps {
  variant: LogoVariant
}

const logos: Readonly<Record<LogoVariant, React.ReactElement>> = {
  header: <LogoHeader />,
}

function LogoHeader(): React.ReactElement {
  return (
    <div className={logoHeaderStyles.container}>
      <Link
        href='/'
        className={logoHeaderStyles.link}
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
