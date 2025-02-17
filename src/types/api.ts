import type {
  AboutInfoBlock,
  BlogEntry,
  CampaignEntry,
  CityEntry,
  CategoryEntry,
  Language,
  MainSliderEntry,
  MediaFile,
  MultilingualText,
  PartnersSliderEntry,
  StoreEntry,
  ProductMainInfo,
  ProjectEntry,
  UserEntry,
  RegistrationFormValues,
  UserRole,
  OrderEntry,
  DistrictEntry,
  OrderFormValues,
  AddressEntry,
} from '~ek/types'

export interface PaginatedResponse {
  pagination: {
    current_page: number
    last_page: number
    per_page: number
    total: number
  }
}

export interface PlainApiResponse {
  message: string
}

export interface AboutPageResponse<T extends string = Language> {
  id: number
  title: MultilingualText<T>
  content: MultilingualText<T>
  counter_info: MultilingualText<T>
  solutions: {
    title: MultilingualText<T>
    options: MultilingualText<T>[]
  }
  video: [MediaFile?]
  image: [MediaFile]
}

export interface AboutInfoBlocksResponse extends PaginatedResponse {
  data: AboutInfoBlock[]
}

export interface BlogsPageResponse<T extends string = Language> {
  id: number
  title: MultilingualText<T>
  similar_article_title: MultilingualText<T>
  image: [MediaFile]
}

export interface BlogsResponse<
  T extends string = Language,
  TBanner = [MediaFile],
> extends PaginatedResponse {
  data: Omit<BlogEntry<T, TBanner>, 'content' | 'similar_posts'>[]
}

export interface MainSliderResponse extends PaginatedResponse {
  data: MainSliderEntry[]
}

export interface HomepageResponse<T extends string = Language> {
  id: number
  videoSection: {
    title: MultilingualText<T>
    content: MultilingualText<T>
  }
  infoArray: Array<{
    title: MultilingualText<T>
    content: MultilingualText<T>
    icon: string
  }>
  styleArray: Array<{
    title: MultilingualText<T>
    content: MultilingualText<T>
  }>
  createOrderSection: {
    title: MultilingualText<T>
    content: MultilingualText<T>
  }
  createOrderImage: [MediaFile]
  styleImage: [MediaFile]
  video: [MediaFile]
}

export interface PartnersSliderResponse extends PaginatedResponse {
  data: PartnersSliderEntry[]
}

export interface CampaignsResponse extends PaginatedResponse {
  data: CampaignEntry[]
}

export interface StoresResponse extends PaginatedResponse {
  data: StoreEntry[]
}

export interface CitiesWithStoresResponse extends PaginatedResponse {
  data: CityEntry[]
}

export interface CampaignsPageResponse<T extends string = Language> {
  id: number
  title: MultilingualText<T>
  image: [MediaFile]
}

export interface ProductsResponse extends PaginatedResponse {
  data: ProductMainInfo[]
}

export interface LoginResponse {
  user: UserEntry
  token: string
}

export interface ProjectsResponse extends PaginatedResponse {
  data: Omit<ProjectEntry, 'content' | 'tags'>
}

export interface ProjectsPageResponse<T extends string = Language> {
  id: number
  title: MultilingualText<T>
  image: [MediaFile]
}

export interface CitiesResponse extends PaginatedResponse {
  data: CityEntry[]
}

export interface RegistrationRequestBody extends RegistrationFormValues {
  role: UserRole
}

export interface RegistrationResponse extends PlainApiResponse {
  token: string
}

export interface OrdersResponse extends PaginatedResponse {
  data: OrderEntry[]
}

export interface DistrictsResponse extends PaginatedResponse {
  data: DistrictEntry[]
}

export interface OrderResquestBody extends OrderFormValues {
  user_id: number
  name: string
  surname: string
  phone: string
}

export interface CreateOrderResponse extends OrderResquestBody {
  id: number
  created_at: string
  updated_at: string
}

export interface SearchPageResponse<T extends string = Language> {
  id: number
  title: MultilingualText<T>
  image: [MediaFile]
}

export interface AddressResponse extends PaginatedResponse {
  data: AddressEntry[]
}
