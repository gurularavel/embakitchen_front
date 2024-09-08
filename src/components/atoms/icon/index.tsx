import * as React from 'react'
import Image, { StaticImageData } from 'next/image'
import { twMerge } from 'tailwind-merge'
import { IconVariant } from '~ek/types'
import menuIcon from '/public/assets/icons/menu.svg'
import searchIcon1 from '/public/assets/icons/search-1.svg'
import searchIcon2 from '/public/assets/icons/search-2.svg'
import closeIcon from '/public/assets/icons/close.svg'
import dropdownMobileIcon from '/public/assets/icons/dropdown-mobile.svg'
import whatsappLightIcon from '/public/assets/icons/social/light/whatsapp.svg'
import whatsappDarkIcon from '/public/assets/icons/social/dark/whatsapp.svg'
import facebookLightIcon from '/public/assets/icons/social/light/facebook.svg'
import facebookDarkIcon from '/public/assets/icons/social/dark/facebook.svg'
import instagramLightIcon from '/public/assets/icons/social/light/instagram.svg'
import instagramDarkIcon from '/public/assets/icons/social/dark/instagram.svg'
import youtubeLightIcon from '/public/assets/icons/social/light/youtube.svg'
import youtubeDarkIcon from '/public/assets/icons/social/dark/youtube.svg'
import phoneIcon from '/public/assets/icons/phone.svg'
import profileIcon from '/public/assets/icons/profile.svg'
import downChevronIcon from '/public/assets/icons/down-chevron.svg'

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
  'dropdown-mobile': dropdownMobileIcon,
  'whatsapp-light': whatsappLightIcon,
  'whatsapp-dark': whatsappDarkIcon,
  'facebook-light': facebookLightIcon,
  'facebook-dark': facebookDarkIcon,
  'instagram-light': instagramLightIcon,
  'instagram-dark': instagramDarkIcon,
  'youtube-light': youtubeLightIcon,
  'youtube-dark': youtubeDarkIcon,
  phone: phoneIcon,
  profile: profileIcon,
  'down-chevron': downChevronIcon,
}

export function Icon({
  variant,
  classes,
}: Readonly<IconProps>): ReactComponent {
  return (
    <Image
      src={icons[variant]}
      alt={`embakitchen ${variant} icon`}
      className={twMerge(styles.icon, classes ?? '')}
    />
  )
}
