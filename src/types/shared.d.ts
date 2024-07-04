export type SliderOption = 'main' | 'gallery' | 'partners'

export interface SocialContact {
  img: string
  url: string
  alt: string
}

export interface StatisticsEntry {
  quantity: number
  title: string
}

interface OrderStageEntry {
  title: string
  description: string
}
