import * as React from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps {
  children: React.ReactNode
  classes?: string
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const buttonStyles: Readonly<TailwindStyle> = {
  button:
    'bg-transparent border-none outline-none focus:border-none focus:outline-none', // focus:bg-transparent should be converted into focus:bg-currentBackgroundColor
}
const styles: Readonly<StyleRecord> = buttonStyles as StyleRecord

export function Button({
  children,
  classes,
  ...props
}: Readonly<ButtonProps>): ReactComponent {
  return (
    <button
      className={twMerge(styles.button, classes ?? '')}
      {...props}
    >
      {children}
    </button>
  )
}
