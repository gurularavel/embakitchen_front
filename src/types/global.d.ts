export {}

declare global {
  interface TailwindStyle {
    [key: string]: string | TailwindStyle | ((p: unknown) => string)
  }

  type LayoutOption = 'horizontal' | 'vertical'

  type Dictionary<T> = Record<string, T>
}
