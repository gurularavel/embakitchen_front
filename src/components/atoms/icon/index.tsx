import Image, { StaticImageData } from 'next/image'
import { twMerge } from 'tailwind-merge'
import type { IconVariant, ImgSize } from '~ek/types'
import menuIcon from '/public/assets/icons/menu.svg'
import closeIcon from '/public/assets/icons/close.svg'
import dropdownCompactIcon from '/public/assets/icons/dropdown-compact.svg'
import dropdownWideIcon from '/public/assets/icons/dropdown-wide.svg'
import whatsappLightIcon from '/public/assets/icons/social/light/whatsapp.svg'
import facebookLightIcon from '/public/assets/icons/social/light/facebook.svg'
import instagramLightIcon from '/public/assets/icons/social/light/instagram.svg'
import youtubeLightIcon from '/public/assets/icons/social/light/youtube.svg'
import phoneIcon from '/public/assets/icons/phone.svg'
import profileIcon from '/public/assets/icons/profile.svg'
import chevronDownIcon from '/public/assets/icons/chevron-down.svg'
import searchIcon1 from '/public/assets/icons/search-1.svg'
import searchIcon2 from '/public/assets/icons/search-2.svg'
import whatsappDarkIcon from '/public/assets/icons/social/dark/whatsapp.svg'
import facebookDarkIcon from '/public/assets/icons/social/dark/facebook.svg'
import instagramDarkIcon from '/public/assets/icons/social/dark/instagram.svg'
import youtubeDarkIcon from '/public/assets/icons/social/dark/youtube.svg'
import chevronRightOrange from '/public/assets/icons/chevron-right-orange.svg'

interface IconProps {
  variant: IconVariant
  sizes: ImgSize
  classes?: string
}

const icons: Readonly<Record<IconVariant, StaticImageData>> = {
  menu: menuIcon,
  close: closeIcon,
  'dropdown-compact': dropdownCompactIcon,
  'dropdown-wide': dropdownWideIcon,
  'whatsapp-light': whatsappLightIcon,
  'facebook-light': facebookLightIcon,
  'instagram-light': instagramLightIcon,
  'youtube-light': youtubeLightIcon,
  phone: phoneIcon,
  profile: profileIcon,
  'chevron-down': chevronDownIcon,
  'search-1': searchIcon1,
  'search-2': searchIcon2,
  'whatsapp-dark': whatsappDarkIcon,
  'facebook-dark': facebookDarkIcon,
  'instagram-dark': instagramDarkIcon,
  'youtube-dark': youtubeDarkIcon,
  'chevron-right-orange': chevronRightOrange,
}

export function Icon({
  variant,
  sizes,
  classes,
}: Readonly<IconProps>): React.ReactElement {
  return (
    <Image
      src={icons[variant]}
      alt={`embakitchen ${variant} icon`}
      className={twMerge(sizes, classes ?? '')}
    />
  )
}

// import downChevronIcon from '/public/assets/icons/down-chevron.svg'
// const icons: Readonly<Record<IconVariant, StaticImageData>> = {
//   'down-chevron': downChevronIcon,
// }
