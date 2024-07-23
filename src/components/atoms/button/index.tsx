import React, { ButtonHTMLAttributes } from 'react'
import { buttonStyles } from '@ek/components/atoms/button/button.style'

const styles: Readonly<StyleRecord> = buttonStyles as StyleRecord

interface ButtonProps {
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  children: React.ReactNode
}

export function Button({
  children,
  ...props
}: Readonly<ButtonProps>): React.ReactElement {
  return (
    <button
      className={styles.container}
      {...props}
    >
      {children}
    </button>
  )
}
