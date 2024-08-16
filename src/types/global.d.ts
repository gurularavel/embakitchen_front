declare global {
  type StyleRecord = Record<string, string>
  type StyleGetter = (param: unknown) => string
  type Style = string | TailwindStyle | StyleGetter
  interface TailwindStyle {
    [key: string]: Style
  }

  type ReactComponent = React.ReactElement | React.ReactNode | JSX.Element
}

export {}
