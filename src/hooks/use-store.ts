import * as React from 'react'
import { useStore as useZustandStore } from 'zustand'
import { StoreContext } from '~ek/providers'
import type { AppState } from '~ek/types'

type UseStoreParams<T> = (state: AppState) => T

export function useStore<T>(selector: UseStoreParams<T>): T {
  const storeContext = React.useContext(StoreContext)

  if (!storeContext) {
    throw new Error('Hook useStore must be used within StoreProvider!')
  }

  return useZustandStore(storeContext, selector)
}
