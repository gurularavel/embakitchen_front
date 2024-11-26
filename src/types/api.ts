import type { Language, MediaFile, MultilingualText } from '~ek/types'

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
