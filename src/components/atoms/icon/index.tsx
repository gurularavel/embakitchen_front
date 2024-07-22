import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { iconStyles } from '@ek/components/atoms/icon/icon.style'
import menuIcon from '/public/assets/icons/menu.svg'
import searchIcon1 from '/public/assets/icons/search-1.svg'
import searchIcon2 from '/public/assets/icons/search-2.svg'

const styles: StyleRecord = iconStyles as StyleRecord

type IconVariant = 'menu' | 'search-1' | 'search-2'

interface IconProps {
  variant: IconVariant
}

const icons: Record<IconVariant, StaticImageData> = {
  menu: menuIcon,
  'search-1': searchIcon1,
  'search-2': searchIcon2,
}

export function Icon({ variant }: IconProps): React.ReactElement {
  return (
    <Image
      src={icons[variant]}
      alt={`embakitchen ${variant} icon`}
    />
  )
}
