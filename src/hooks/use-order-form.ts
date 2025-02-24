import * as React from 'react'
import { useStore } from '~ek/hooks'

interface UseOrderFormResult {
  openOrderForm: (id: number | null) => void
}

export function useOrderForm(): UseOrderFormResult {
  const {
    clientSlice: { setIsAuthFormDrawerVisible, setIsOrderFormDrawerVisible },
    orderSlice: { setSelectedProduct },
    authSlice: { user },
  } = useStore(state => state)

  const openOrderForm = React.useCallback(
    (id: number | null) => {
      if (user) {
        setIsOrderFormDrawerVisible(true)
        setSelectedProduct(id)
      } else {
        setIsAuthFormDrawerVisible(true)
      }
    },
    [
      user,
      setIsOrderFormDrawerVisible,
      setIsAuthFormDrawerVisible,
      setSelectedProduct,
    ],
  )

  return { openOrderForm }
}
