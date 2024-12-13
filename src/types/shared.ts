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
  | 'arrow-right-gray'
  | 'arrow-left'
  | 'chevron-right'
  | 'play-video'
  | 'arrow-right-white'

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

export type MultilingualText<T extends string = Language> = T extends Language
  ? Record<Language, string>
  : T

export interface MediaFile {
  name: string
  file_name: string
  uuid: string
  preview_url: string
  original_url: string
  order: number
  custom_properties: []
  extension: string
  size: number
}

export interface AboutInfoBlock<T extends string = Language> {
  id: number
  title: MultilingualText<T>
  content: MultilingualText<T>
  status: boolean
}

export interface StatisticEntry<T extends string = string> {
  id: number
  count: number
  title: MultilingualText<T>
  status: boolean
}

export type SliderVariant = 'main' | 'gallery' | 'partners' | 'product'

export interface ProjectEntry<T extends string = string> {
  id: number
  title: MultilingualText<T>
  slug: MultilingualText<T>
  content: MultilingualText<T>
  tags: T extends Language ? Record<Language, string[]> : T
  images: [MediaFile]
  status: boolean
}

export interface BlogEntry<T extends string = Language> {
  id: number
  title: MultilingualText<T>
  slug: MultilingualText<T>
  description: MultilingualText<T>
  content: MultilingualText<T>
  image: [MediaFile]
  similar_posts: Omit<BlogEntry, 'content'>[]
  status: boolean
}

export interface ProductEntry {
  title: string
  image: string
}

export interface MainSliderEntry<T extends string = Language> {
  id: number
  title: MultilingualText<T>
  excerpt: MultilingualText<T>
  image: [MediaFile]
  status: boolean
}

export interface PartnersSliderEntry<T extends string = Language> {
  id: number
  title: MultilingualText<T>
  image: [MediaFile]
  status: boolean
}

export interface CampaignEntry<T extends string = Language> {
  id: number
  title: MultilingualText<T>
  slug: MultilingualText<T>
  content: MultilingualText<T>
  startDate: string
  endDate: string
  image: [MediaFile]
  status: boolean
}
