import * as React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import logoHeader from '/public/assets/images/logo/header.svg'
import logoFooter from '/public/assets/images/logo/footer.svg'

type LogoVariant = 'header' | 'footer'

interface LogoProps {
  variant: LogoVariant
}

const logoStyles: Readonly<TailwindStyle> = {
  header: {
    link: 'h-full flex items-center',
    img: 'w-25 h-[17px]',
  },
  footer: {
    link: 'inline-block py-[25.5px] mb-6',
    img: 'w-[132px] h-[21px]',
  },
}

const logos: Readonly<Record<LogoVariant, StaticImageData>> = {
  header: logoHeader,
  footer: logoFooter,
}

export function Logo({ variant }: Readonly<LogoProps>): ReactComponent {
  const styles: Readonly<StyleRecord> = logoStyles[variant] as StyleRecord

  return (
    <Link
      href='/'
      className={styles.link}
    >
      <Image
        src={logos[variant]}
        alt={`embakitchen logo on ${variant}`}
        className={styles.img}
      />
    </Link>
  )
}
