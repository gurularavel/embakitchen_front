import * as React from 'react'
import Image, { StaticImageData } from 'next/image'
import { twMerge } from 'tailwind-merge'
import menuIcon from '/public/assets/icons/menu.svg'
import searchIcon1 from '/public/assets/icons/search-1.svg'
import searchIcon2 from '/public/assets/icons/search-2.svg'
import closeIcon from '/public/assets/icons/close.svg'
import downChevronIcon1 from '/public/assets/icons/down-chevron-1.svg'

type IconVariant = 'menu' | 'search-1' | 'search-2' | 'close' | 'down-chevron-1'

interface IconProps {
  variant: IconVariant
  classes?: string
}

const iconStyles: Readonly<TailwindStyle> = {
  icon: '',
}
const styles: Readonly<StyleRecord> = iconStyles as StyleRecord

const icons: Readonly<Record<IconVariant, StaticImageData>> = {
  menu: menuIcon,
  'search-1': searchIcon1,
  'search-2': searchIcon2,
  close: closeIcon,
  'down-chevron-1': downChevronIcon1,
}

export function Icon({
  variant,
  classes,
}: Readonly<IconProps>): React.ReactElement {
  return (
    <Image
      src={icons[variant]}
      alt={`embakitchen ${variant} icon`}
      className={twMerge(styles.icon, classes ?? '')}
    />
  )
}
