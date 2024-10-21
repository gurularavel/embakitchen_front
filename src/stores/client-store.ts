import { createStore, type StoreApi } from 'zustand'
import type { ClientState, ClientStore } from '~ek/types'

export const defaultInitialState: ClientState = {
  isClientRendering: false,
}

export function createClientStore(
  initialState: ClientState = defaultInitialState,
): StoreApi<ClientStore> {
  return createStore<ClientStore>()(set => ({
    ...initialState,
    setClientRendering: (isClientRendering: boolean) =>
      set(() => ({ isClientRendering })),
  }))
}
