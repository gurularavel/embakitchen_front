'use client'

import * as React from 'react'
import type { StoreApi } from '~ek/types'
import { createStore } from '~ek/store'

interface StoreProviderProps {
  children: React.ReactNode
}

export const StoreContext = React.createContext<StoreApi | null>(null)

export function StoreProvider({
  children,
}: Readonly<StoreProviderProps>): React.ReactElement {
  const storeRef = React.useRef<StoreApi>()

  if (!storeRef.current) {
    storeRef.current = createStore()
  }

  return (
    <StoreContext.Provider value={storeRef.current}>
      {children}
    </StoreContext.Provider>
  )
}
