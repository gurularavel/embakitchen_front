declare global {
  type StyleRecord = Record<string, string>
  type StyleGetter = (p: unknown) => string
  type Style = string | StyleGetter | TwClasses
  interface TwClasses {
    [key: string]: Style
  }
}

export {}
