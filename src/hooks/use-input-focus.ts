import * as React from 'react'

interface UseInputFocusOptions {
  clearValue?: boolean
  onFocus?: () => void
  onBlur?: () => void
}

interface UseInputFocusParams {
  isVisible: boolean
  options?: UseInputFocusOptions
}

export function useInputFocus({
  isVisible,
  options: { clearValue, onFocus, onBlur } = {} as UseInputFocusOptions,
}: UseInputFocusParams): React.RefObject<HTMLInputElement> {
  const inputRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    const input = inputRef.current

    if (!input) return

    if (isVisible) {
      input.focus()
      onFocus?.()
    } else {
      input.blur()
      onBlur?.()
      if (clearValue) input.value = ''
    }
  }, [isVisible, onFocus, onBlur, clearValue])

  return inputRef
}
