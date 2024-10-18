'use client'

import * as React from 'react'
import { useStore } from 'zustand'
import { createAppStore } from '~ek/stores'
import type { AppStore, AppStoreApi } from '~ek/types'

interface AppStoreProviderProps {
  children: React.ReactNode
}

const AppStoreContext = React.createContext<AppStoreApi | undefined>(undefined)

export function AppStoreProvider({
  children,
}: Readonly<AppStoreProviderProps>) {
  const storeRef = React.useRef<AppStoreApi>()

  if (!storeRef.current) {
    storeRef.current = createAppStore()
  }

  return (
    <AppStoreContext.Provider value={storeRef.current}>
      {children}
    </AppStoreContext.Provider>
  )
}

export function useAppStore<T>(selector: (store: AppStore) => T): T {
  const appStoreContext = React.useContext(AppStoreContext)

  if (!appStoreContext) {
    throw new Error('Hook useAppStore must be used within AppStoreProvider.')
  }

  return useStore(appStoreContext, selector)
}
