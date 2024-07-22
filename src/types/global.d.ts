export {}

declare global {
  interface TailwindStyle {
    [key: string]: string | TailwindStyle | ((p: unknown) => string)
  }

  type StyleRecord = Record<string, string>

  // type LayoutOption = 'horizontal' | 'vertical'

  // type Dictionary<ValueType, KeyType extends string> = Record<
  //   KeyType,
  //   ValueType
  // >
}
