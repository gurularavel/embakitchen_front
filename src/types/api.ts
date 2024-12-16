import type {
  AboutInfoBlock,
  BlogEntry,
  CampaignEntry,
  CategoryEntry,
  Language,
  MainSliderEntry,
  MediaFile,
  MultilingualText,
  PartnersSliderEntry,
  ProductEntry,
  ProductMainInfo,
} from '~ek/types'

interface PaginatedResponse {
  pagination: {
    current_page: number
    last_page: number
    per_page: number
    total: number
  }
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

export interface BlogsResponse<T extends string = Language>
  extends PaginatedResponse {
  data: Omit<BlogEntry<T>, 'content' | 'similar_posts'>[]
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

export interface CampaignsPageResponse<T extends string = Language> {
  id: number
  title: MultilingualText<T>
  image: [MediaFile]
}

export interface ProductsResponse extends PaginatedResponse {
  data: ProductMainInfo[]
}

export interface CategoryResponse
  extends PaginatedResponse,
    CategoryEntry<string> {}
