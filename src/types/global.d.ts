export {}

declare global {
  interface TailwindStyle {
    [key: string]: string | TailwindStyle | ((param: unknown) => string)
  }

  type StyleRecord = Record<string, string>
  type StyleGetter = (param: unknown) => string

  // type LayoutOption = 'horizontal' | 'vertical'

  // type Dictionary<ValueType, KeyType extends string> = Record<
  //   KeyType,
  //   ValueType
  // >
}
