import React from 'react'
import Image from 'next/image'
import { logoStyles } from '@ek/components/atoms/logo/logo.style'
import logoHeaderImg from '/public/assets/images/logo/header.svg'

const styles: Readonly<StyleRecord> = logoStyles as StyleRecord

type LogoVariant = 'header'

interface LogoProps {
  variant: LogoVariant
}

const logos: Readonly<Record<LogoVariant, React.ReactElement>> = {
  header: <LogoHeader />,
}

function LogoHeader(): React.ReactElement {
  return (
    <div className={styles.container}>
      <Image
        src={logoHeaderImg}
        alt='embakitchen logo'
      />
    </div>
  )
}

export function Logo({ variant }: Readonly<LogoProps>): React.ReactElement {
  return logos[variant]
}
