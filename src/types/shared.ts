import type { AxiosHeaders } from 'axios'

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
  | 'profile-light'
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
  | 'profile-dark'
  | 'search-dark'
  | 'edit'
  | 'trash'
  | 'loading'

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

export interface Tag<T extends string = Language> {
  id: number
  title: MultilingualText<T>
  status: boolean
}

export interface ProjectEntry<
  T extends string = Language,
  TBanner = [MediaFile],
> {
  id: number
  title: MultilingualText<T>
  slug: MultilingualText<T>
  content: MultilingualText<T>
  tags: Tag<T>[]
  similar_projects: Omit<ProjectEntry, 'content' | 'similar_projects'>[]
  bannerImage: TBanner
  images: MediaFile[]
  status: boolean
}

export interface BlogEntry<T extends string = Language, TBanner = [MediaFile]> {
  id: number
  title: MultilingualText<T>
  slug: MultilingualText<T>
  description: MultilingualText<T>
  content: MultilingualText<T>
  image: TBanner
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
  hasDistricts: boolean
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

export interface Color<T extends string = Language, TBanner = [MediaFile]> {
  id: number
  title: MultilingualText<T>
  image: TBanner
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

export interface SimilarProduct<
  T extends string = Language,
  TBanner = [MediaFile],
> {
  id: number
  title: MultilingualText<T>
  slug: MultilingualText<T>
  tags: Tag<T>[]
  images: MediaFile[]
  bannerImage: TBanner
}

export interface ProductEntry<
  T extends string = Language,
  TBanner = [MediaFile],
> {
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
  bannerImage: TBanner
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
  colors: Color<T, TBanner>[]
  tags: Tag<T>[]
  similar_products: SimilarProduct<T, TBanner>[]
  comments: Comment[]
}

export type ProductMainInfo<TBanner = [MediaFile]> = Pick<
  ProductEntry<string, TBanner>,
  'id' | 'title' | 'slug' | 'tags' | 'images' | 'bannerImage' | 'category'
>

export interface CategoryEntry<
  T extends string = Language,
  TBanner = [MediaFile],
> {
  id: number
  title: MultilingualText<T>
  slug: MultilingualText<T>
  bannerImage: TBanner
  status: boolean
}

export type AuthFormVariant = 'login' | 'registration'

export type UserRole = 'admin' | 'user'

export interface LoginFormValues {
  email: string
  password: string
}

export interface RegistrationFormValues {
  name: string
  surname: string
  email: string
  phone: string
  city_id: number
  district_id: number
  password: string
  password_confirmation: string
  address: string
}

export interface UserEntry {
  id: number
  name: string
  surname: string
  email: string
  phone: string
  addresses: AddressEntry[]
  orders: []
  role: UserRole
  status: boolean
}

export interface OrderStageEntry {
  title: string
  content: string
}

export type UpdateProfileFormValues = Pick<
  RegistrationFormValues,
  'name' | 'surname' | 'email' | 'phone'
>

export type ChangePasswordFormValues = Pick<
  RegistrationFormValues,
  'password' | 'password_confirmation'
>

export interface OrderProductInfo {
  id: number
  width: number
  height: number
}

export interface OrderFormValues {
  products: OrderProductInfo[]
  addresses: number
  message: string
  phone: string
  city_id?: number
  district_id?: number
  address?: string
}

export interface Headers extends Partial<AxiosHeaders> {
  Authorization: string
}

export interface DistrictEntry<T extends string = Language> {
  id: number
  title: MultilingualText<T>
  city: CityEntry<T>
  status: boolean
}

type OrderProduct<T extends string = Language> = Pick<
  ProductEntry<T>,
  'id' | 'bannerImage' | 'title' | 'slug' | 'images' | 'tags'
>
interface EnhancedOrderProduct<T extends string = Language>
  extends OrderProduct<T> {
  width: number
  height: number
}

export interface OrderEntry<T extends string = Language> {
  id: number
  created_at: string
  message: string
  name: string
  surname: string
  phone: string
  city: CityEntry<T>
  district: DistrictEntry<T>
  products: EnhancedOrderProduct<T>[]
  status: boolean
  address: string
}

export interface AddressFormValues {
  user_id: number
  city_id: number
  district_id: number
  address: string
}

export interface AddressEntry<T extends string = Language> {
  id: number
  city: CityEntry<T>
  district: DistrictEntry<T>
  address: string
}

export interface CreateAddressResponse extends AddressFormValues {
  id: number
  created_at: string
  updated_at: string
}
