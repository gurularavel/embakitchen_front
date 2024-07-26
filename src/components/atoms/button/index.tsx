import React, { ButtonHTMLAttributes } from 'react'
import { buttonStyles } from '@ek/components/atoms/styles'

const styles: Readonly<StyleRecord> = buttonStyles as StyleRecord

interface ButtonProps {
  twStyles?: string
  children: React.ReactNode
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export function Button({
  twStyles,
  children,
  ...props
}: Readonly<ButtonProps>): React.ReactElement {
  return (
    <button
      className={`${styles.container} ${twStyles ?? ''}`}
      {...props}
    >
      {children}
    </button>
  )
}
