export type SocialIconsLayout = 'horizontal' | 'vertical'

export interface SocialIcon {
  img: string
  url: string
  description: string
}

export interface SocialIconsProps {
  layout: SocialIconsLayout
  icons: SocialIcon[]
}
