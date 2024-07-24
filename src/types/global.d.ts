export {}

declare global {
  type Style = string | TailwindStyle | ((param: unknown) => string)
  interface TailwindStyle {
    [key: string]: Style
  }
  type StyleRecord = Record<string, string>
  type StyleGetter = (param: unknown) => string

  // type LayoutOption = 'horizontal' | 'vertical'

  // type Dictionary<ValueType, KeyType extends string> = Record<
  //   KeyType,
  //   ValueType
  // >
}
