import * as React from 'react'

interface UseInputFocusOptions {
  clearValue?: boolean
  onFocus?: () => void
  onBlur?: () => void
}

interface UseInputFocusParams {
  isInputVisible: boolean
  options?: UseInputFocusOptions
}

export function useInputFocus({
  isInputVisible,
  options: { clearValue, onFocus, onBlur } = {} as UseInputFocusOptions,
}: UseInputFocusParams) {
  const inputRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    if (inputRef.current) {
      if (isInputVisible) {
        inputRef.current.focus()
        if (onFocus) onFocus()
      } else {
        inputRef.current.blur()
        if (onBlur) onBlur()
        if (clearValue) inputRef.current.value = ''
      }
    }
  }, [isInputVisible, onFocus, onBlur, clearValue])

  return inputRef
}
