import * as React from 'react'
import { twMerge } from 'tailwind-merge'

type InputRef = HTMLInputElement

interface InputProps {
  type: React.HTMLInputTypeAttribute
  placeholder: string
  classes?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const inputStyles: Readonly<TwClasses> = {
  input:
    'bg-transparent border-none outline-none focus:bg-transparent focus:border-none focus:outline-none',
}
const styles = inputStyles as Readonly<StyleRecord>

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
