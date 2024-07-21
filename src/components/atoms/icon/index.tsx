import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { iconStyles } from '@ek/components/atoms/icon/icon.style'
import menuIcon from '/public/assets/icons/menu.svg'

const styles: StyleRecord = iconStyles as StyleRecord

type IconVariant = 'menu'

interface IconProps {
  variant: IconVariant
}

const icons: Record<string, string | StaticImageData> = {
  menu: menuIcon,
}

export function Icon({ variant }: IconProps): React.ReactElement {
  return (
    <Image
      src={icons[variant]}
      alt={`embakitchen ${variant} icon`}
    />
  )
}
