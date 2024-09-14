import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import type { ImgSize } from '~ek/types'
import logoHeader from '/public/assets/images/logo/header.svg'

type LogoContext = 'header'

interface LogoProps {
  context: LogoContext
  sizes: ImgSize
}

const logos: Readonly<Record<LogoContext, StaticImageData>> = {
  header: logoHeader,
}

const logoStyles: Readonly<Record<LogoContext, TwClasses>> = {
  header: {
    link: 'h-full flex items-center',
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

// import logoFooter from '/public/assets/images/logo/footer.svg'

// type LogoVariant = 'footer'

//   footer: {
//     link: 'inline-block py-[25.5px] mb-6',
//     img: 'w-[132px] h-[21px]',
//   },

// const logos: Readonly<Record<LogoVariant, StaticImageData>> = {
//   footer: logoFooter,
// }
