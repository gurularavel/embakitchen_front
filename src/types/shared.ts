import type { StaticImageData } from 'next/image'

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
  | 'arrow-right'
  | 'arrow-left'
  | 'chevron-right'
  | 'play-video'

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
  Azerbaijani = 'az',
  Russian = 'ru',
  English = 'en',
}

export type StatisticsContext = 'home' | 'about'

export interface StatisticEntry<T extends Language | string = string> {
  id: number
  count: number
  title: T extends Language ? Record<Language, string> : T
  status: boolean
}

export type SliderVariant = 'main' | 'gallery' | 'partners'

export interface OrderStageEntry {
  title: string
  description: string
}

export interface CampaignEntry {
  title: string
  description: string
  img: StaticImageData
  start: Date
  end: Date
}
