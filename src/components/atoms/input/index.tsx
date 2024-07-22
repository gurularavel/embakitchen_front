import React from 'react'
import { inputStyles } from '@ek/components/atoms/input/input.style'

const styles: StyleRecord = inputStyles as StyleRecord

interface InputProps {
  twStyles?: string
  type?: string
  placeholder?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function Input({ twStyles, ...props }: InputProps): React.ReactElement {
  return (
    <input
      className={`${styles.container} ${twStyles}`}
      {...props}
    />
  )
}
