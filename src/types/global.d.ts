import type { Language } from '~ek/types'

declare global {
  type StyleRecord = Record<string, string>
  type StyleGetter = (p: unknown) => string
  type Style = string | StyleGetter | TwClasses
  interface TwClasses {
    [key: string]: Style
  }

  interface PageProps {
    params: {
      locale: Language
      slug?: string
      category?: string
    }
  }

  interface ApiQueryParams {
    page: number
    perPage: number
    status: boolean
  }
}

export {}
