export interface TailwindStyles {
  [key: string]: string | TailwindStyles | ((p: unknown) => string)
}
