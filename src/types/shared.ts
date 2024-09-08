import type { SocialContact } from '~ek/types'

export type IconVariant =
  | 'menu'
  | 'search-1'
  | 'search-2'
  | 'close'
  | 'dropdown-mobile'
  | SocialContact
  | 'phone'
  | 'profile'
  | 'down-chevron'

export type LayoutOption = 'horizontal' | 'vertical'

export enum Language {
  'Az' = 'Az',
  'En' = 'En',
  'Ru' = 'Ru',
}

export interface NavLinkEntry {
  text: string
  href?: string
  isHighlighted?: boolean
  items?: Array<Omit<NavLinkEntry, 'items'>>
}

export type Theme = 'light' | 'dark'

// import { StaticImageData } from 'next/image'

// export type SliderOption = 'main' | 'gallery' | 'partners'

// export interface SocialContact {
//   img: string
//   url: string
//   alt: string
// }

// export interface StatisticsEntry {
//   quantity: number
//   title: string
// }

// interface OrderStageEntry {
//   title: string
//   description: string
// }

// interface CampaignEntry {
//   img: string | StaticImageData
//   title: string
//   description: string
//   startDate: string | Date
//   endDate: string | Date
// }
