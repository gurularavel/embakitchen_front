import * as React from 'react'
import { twMerge } from 'tailwind-merge'

type InputRef = HTMLInputElement

interface InputProps {
  type: string
  placeholder: string
  classes?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const inputStyles: Readonly<TailwindStyle> = {
  input:
    'appearance-none bg-transparent border-none outline-none focus:bg-transparent focus:border-none focus:outline-none',
}
const styles: Readonly<StyleRecord> = inputStyles as StyleRecord

export const Input = React.forwardRef<InputRef, Readonly<InputProps>>(
  ({ classes, ...props }, inputRef) => {
    return (
      <input
        className={twMerge(styles.input, classes ?? '')}
        {...props}
        ref={inputRef}
      />
    )
  },
)

Input.displayName = 'Input'
