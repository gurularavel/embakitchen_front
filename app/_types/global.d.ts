export {}

declare global {
  interface TailwindStyles {
    [key: string]: string | TailwindStyles | ((p: unknown) => string)
  }

  type LayoutOptions = 'horizontal' | 'vertical'

  type Slider = 'main' | 'gallery'
}
