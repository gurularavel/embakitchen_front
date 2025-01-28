import type { Language, Headers } from '~ek/types'

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
      search?: string
    }
  }

  interface ApiQueryParams {
    page?: number
    perPage?: number
    status?: boolean
  }

  interface AuthenticatedApiParams extends ApiQueryParams {
    query?: ApiQueryParams
    headers: Headers
  }

  type ArrayElement<T> = T extends (infer U)[] ? U : never
}

export {}
