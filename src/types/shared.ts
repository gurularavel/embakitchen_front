import type { StaticImageData } from 'next/image'

/**
 * @description Represents responsive image sizes as tailwind classes
 * @example const sizes: ImgSize = 'w-4 h-4 laptop:w-10 laptop:h-10'
 */
export type ImgSize = string

export type IconVariant =
  | 'menu'
  | 'close-light'
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
  | 'store-phone'
  | 'clock'
  | 'location'
  | 'email'
  | 'star-gray'
  | 'star-yellow'
  | 'close-dark'

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

export interface CityEntry<T extends string = Language> {
  id: number
  title: MultilingualText<T>
  status: boolean
}

export interface StoreEntry<T extends string = Language> {
  id: number
  title: MultilingualText<T>
  address: MultilingualText<T>
  phone: string
  schedule: {
    open: string
    close: string
  }
  coords: {
    longitude: string
    latitude: string
  }
  email: string
  status: boolean
  city: CityEntry<T>
}

export interface Tag<T extends string = Language> {
  id: number
  title: MultilingualText<T>
  status: boolean
}

export interface Color<T extends string = Language> {
  id: number
  title: MultilingualText<T>
  image: [MediaFile]
  status: boolean
}

export interface Comment {
  id: number
  name: string
  surname: string
  email: string
  rate: number
  message: string
  created_at: string
}

export interface SimilarProduct<T extends string = Language> {
  id: number
  title: MultilingualText<T>
  slug: MultilingualText<T>
  tags: Tag<T>[]
  images: MediaFile[]
  bannerImage: [MediaFile]
}

export interface ProductEntry<T extends string = Language> {
  id: number
  title: MultilingualText<T>
  slug: MultilingualText<T>
  content: MultilingualText<T>
  style: MultilingualText<T>
  material: MultilingualText<T>
  facade: MultilingualText<T>
  decor: MultilingualText<T>
  design: MultilingualText<T>
  status: boolean
  images: MediaFile[]
  bannerImage: [MediaFile]
  category: {
    id: number
    title: MultilingualText<T>
    slug: MultilingualText<T>
    status: boolean
    pagination: {
      current_page: number
      last_page: number
      per_page: number
      total: number
    }
  }
  colors: Color<T>[]
  tags: Tag<T>[]
  similar_products: SimilarProduct<T>[]
  comments: Comment[]
}

export type ProductMainInfo = Pick<
  ProductEntry<string>,
  'id' | 'title' | 'slug' | 'tags' | 'images' | 'bannerImage'
>

export type CategoryProduct<T extends string = Language> = Pick<
  ProductEntry<T>,
  'id' | 'title' | 'slug' | 'tags' | 'images' | 'bannerImage'
>
export interface CategoryEntry<
  T extends string = Language,
  K = CategoryProduct<T>,
> {
  id: number
  title: MultilingualText<T>
  slug: MultilingualText<T>
  bannerImage: [MediaFile]
  products: K[]
  status: boolean
}

export type AuthFormVariant = 'login' | 'registration'

export interface LoginFormValues {
  email: string
  password: string
}

export type UserRole = 'admin' | 'user'

export interface UserEntry {
  id: number
  name: string
  surname: string
  email: string
  phone: string
  city: Omit<CityEntry, 'status'>
  addresses: []
  orders: []
  role: UserRole
  status: boolean
}
