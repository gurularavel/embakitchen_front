export type ScreenBreakpoint =
  | 'compact'
  | 'mobile'
  | 'tablet'
  | 'laptop'
  | 'desktop'
  | 'widescreen'

export interface ScreenSize {
  width: number
  height: number
}
