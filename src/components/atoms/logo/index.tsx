import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import type { ImgSize } from '~ek/types'
import logoHeader from '/public/assets/images/logo/header.svg'
import logoFooter from '/public/assets/images/logo/footer.svg'

type LogoContext = 'header' | 'footer'

interface LogoProps {
  context: LogoContext
  sizes: ImgSize
}

const logos: Readonly<Record<LogoContext, StaticImageData>> = {
  header: logoHeader,
  footer: logoFooter,
}

const logoStyles: Readonly<Record<LogoContext, TwClasses>> = {
  header: {
    link: 'h-full flex items-center',
  },
  footer: {
    link: 'inline-block py-[25.5px] mb-6',
  },
}

export function Logo({
  context,
  sizes,
}: Readonly<LogoProps>): React.ReactElement {
  const styles = logoStyles[context] as Readonly<StyleRecord>

  return (
    <Link
      href='/'
      className={styles.link}
    >
      <Image
        src={logos[context]}
        alt='embakitchen logo'
        className={sizes}
      />
    </Link>
  )
}
