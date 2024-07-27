import * as React from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps {
  children: React.ReactNode
  classes?: string
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const buttonStyles: Readonly<TailwindStyle> = {
  button: '',
}
const styles: Readonly<StyleRecord> = buttonStyles as StyleRecord

export function Button({
  children,
  classes,
  ...props
}: Readonly<ButtonProps>): React.ReactElement {
  return (
    <button
      className={twMerge(styles.button, classes ?? '')}
      {...props}
    >
      {children}
    </button>
  )
}
