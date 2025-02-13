import * as React from 'react'
import { useStore } from '~ek/hooks'

interface UseOrderFormResult {
  openOrderForm: VoidFunction
}

export function useOrderForm(): UseOrderFormResult {
  const {
    clientSlice: { setIsAuthFormDrawerVisible, setIsOrderFormDrawerVisible },
    authSlice: { user },
  } = useStore(state => state)

  const openOrderForm = React.useCallback(() => {
    if (user) {
      setIsOrderFormDrawerVisible(true)
    } else {
      setIsAuthFormDrawerVisible(true)
    }
  }, [user, setIsOrderFormDrawerVisible, setIsAuthFormDrawerVisible])

  return { openOrderForm }
}
