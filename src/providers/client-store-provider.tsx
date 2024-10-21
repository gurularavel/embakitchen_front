'use client'

import * as React from 'react'
import { useStore } from 'zustand'
import { createClientStore } from '~ek/stores'
import type { ClientStore, ClientStoreApi } from '~ek/types'

interface ClientStoreProviderProps {
  children: React.ReactNode
}

const ClientStoreContext = React.createContext<ClientStoreApi | undefined>(
  undefined,
)

export function ClientStoreProvider({
  children,
}: Readonly<ClientStoreProviderProps>) {
  const clientStoreRef = React.useRef<ClientStoreApi>()

  if (!clientStoreRef.current) {
    clientStoreRef.current = createClientStore()
  }

  return (
    <ClientStoreContext.Provider value={clientStoreRef.current}>
      {children}
    </ClientStoreContext.Provider>
  )
}

export function useClientStore<T>(selector: (store: ClientStore) => T): T {
  const clientStoreContext = React.useContext(ClientStoreContext)

  if (!clientStoreContext) {
    throw new Error(
      'Hook useClientStore must be used within ClientStoreProvider.',
    )
  }

  return useStore(clientStoreContext, selector)
}
