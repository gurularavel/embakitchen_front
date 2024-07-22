import React, { ButtonHTMLAttributes } from 'react'
import { buttonStyles } from '@ek/components/atoms/button/button.style'

const styles: StyleRecord = buttonStyles as StyleRecord

interface ButtonProps {
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  children: React.ReactElement
}

export function Button({
  children,
  ...props
}: ButtonProps): React.ReactElement {
  return (
    <button
      className=''
      {...props}
    >
      {children}
    </button>
  )
}
