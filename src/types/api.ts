import type {
  AboutInfoBlock,
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
