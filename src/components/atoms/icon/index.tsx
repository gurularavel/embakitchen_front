import Image, { StaticImageData } from 'next/image'
import { twMerge } from 'tailwind-merge'
import type { IconVariant, ImgSize } from '~ek/types'
import menuIcon from '/public/assets/icons/menu.svg'
import closeLightIcon from '/public/assets/icons/close-light.svg'
import dropdownCompactIcon from '/public/assets/icons/dropdown-compact.svg'
import dropdownWideIcon from '/public/assets/icons/dropdown-wide.svg'
import whatsappLightIcon from '/public/assets/icons/social/light/whatsapp.svg'
import facebookLightIcon from '/public/assets/icons/social/light/facebook.svg'
import instagramLightIcon from '/public/assets/icons/social/light/instagram.svg'
import youtubeLightIcon from '/public/assets/icons/social/light/youtube.svg'
import phoneIcon from '/public/assets/icons/phone.svg'
import profileLightIcon from '/public/assets/icons/profile-light.svg'
import chevronDownIcon from '/public/assets/icons/chevron-down.svg'
import searchIcon1 from '/public/assets/icons/search-1.svg'
import searchIcon2 from '/public/assets/icons/search-2.svg'
import searchDark from '/public/assets/icons/search-dark.svg'
import whatsappDarkIcon from '/public/assets/icons/social/dark/whatsapp.svg'
import facebookDarkIcon from '/public/assets/icons/social/dark/facebook.svg'
import instagramDarkIcon from '/public/assets/icons/social/dark/instagram.svg'
import youtubeDarkIcon from '/public/assets/icons/social/dark/youtube.svg'
import chevronRightOrange from '/public/assets/icons/chevron-right-orange.svg'
import arrowRightGrayIcon from '/public/assets/icons/arrow-right-gray.svg'
import arrowLeftIcon from '/public/assets/icons/arrow-left.svg'
import chevronRightIcon from '/public/assets/icons/chevron-right.svg'
import playVideoIcon from '/public/assets/icons/play-video.svg'
import arrowRightWhiteIcon from '/public/assets/icons/arrow-right-white.svg'
import storePhoneIcon from '/public/assets/icons/store-phone.svg'
import clockIcon from '/public/assets/icons/clock.svg'
import locationIcon from '/public/assets/icons/location.svg'
import emailIcon from '/public/assets/icons/email.svg'
import starGray from '/public/assets/icons/star-gray.svg'
import starYellow from '/public/assets/icons/star-yellow.svg'
import closeDarkIcon from '/public/assets/icons/close-dark.svg'
import profileDarkIcon from '/public/assets/icons/profile-dark.svg'

interface IconProps {
  variant: IconVariant
  sizes: ImgSize
  classes?: string
}

const icons: Readonly<Record<IconVariant, StaticImageData>> = {
  menu: menuIcon,
  'close-light': closeLightIcon,
  'dropdown-compact': dropdownCompactIcon,
  'dropdown-wide': dropdownWideIcon,
  'whatsapp-light': whatsappLightIcon,
  'facebook-light': facebookLightIcon,
  'instagram-light': instagramLightIcon,
  'youtube-light': youtubeLightIcon,
  phone: phoneIcon,
  'profile-light': profileLightIcon,
  'chevron-down': chevronDownIcon,
  'search-1': searchIcon1,
  'search-2': searchIcon2,
  'search-dark': searchDark,
  'whatsapp-dark': whatsappDarkIcon,
  'facebook-dark': facebookDarkIcon,
  'instagram-dark': instagramDarkIcon,
  'youtube-dark': youtubeDarkIcon,
  'chevron-right-orange': chevronRightOrange,
  'arrow-left': arrowLeftIcon,
  'arrow-right-gray': arrowRightGrayIcon,
  'chevron-right': chevronRightIcon,
  'play-video': playVideoIcon,
  'arrow-right-white': arrowRightWhiteIcon,
  'store-phone': storePhoneIcon,
  clock: clockIcon,
  location: locationIcon,
  email: emailIcon,
  'star-gray': starGray,
  'star-yellow': starYellow,
  'close-dark': closeDarkIcon,
  'profile-dark': profileDarkIcon,
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
