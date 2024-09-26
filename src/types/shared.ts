/**
 * @description Represents responsive image sizes as tailwind classes
 * @example const sizes: ImgSize = 'w-4 h-4 laptop:w-10 laptop:h-10'
 */
export type ImgSize = string

export type IconVariant =
  | 'menu'
  | 'close'
  | 'dropdown-compact'
  | 'dropdown-wide'
  | 'whatsapp-light'
  | 'facebook-light'
  | 'instagram-light'
  | 'youtube-light'
  | 'phone'
  | 'profile'
  | 'chevron-down'
  | 'search-1'
  | 'search-2'
  | 'whatsapp-dark'
  | 'facebook-dark'
  | 'instagram-dark'
  | 'youtube-dark'
  | 'chevron-right-orange'

export type TimeoutId = NodeJS.Timeout | null

export interface NavLinkEntry {
  label: string
  href?: string
  nestedLinks?: Required<Omit<NavLinkEntry, 'nestedLinks'>>[]
}

export type LayoutOption = 'horizontal' | 'vertical'

export type ColorScheme = 'light' | 'dark'

/**
 * @description Represents gap between UI Elements in pixels
 * @example const gap: Gap = 30, where gap is '30px'
 */
export type Gap = number

export enum Language {
  'Az' = 'Az',
  'En' = 'En',
  'Ru' = 'Ru',
}

// // import { StaticImageData } from 'next/image'

// export type SliderOption = 'main' | 'gallery' | 'partners'

// // export interface SocialContact {
// //   img: string
// //   url: string
// //   alt: string
// // }

// export interface StatisticsEntry {
//   quantity: number
//   title: string
// }

// // interface OrderStageEntry {
// //   title: string
// //   description: string
// // }

// // interface CampaignEntry {
// //   img: string | StaticImageData
// //   title: string
// //   description: string
// //   startDate: string | Date
// //   endDate: string | Date
// // }
