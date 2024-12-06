import type {
  AboutInfoBlock,
  BlogEntry,
  Language,
  MediaFile,
  MultilingualText,
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

export interface CampaignsPageResponse<T extends string = Language> {
  id: number
  title: MultilingualText<T>
  image: [MediaFile]
}
