import { createClientStore } from '~ek/stores'

export interface ClientState {
  isClientRendering: boolean
}

export interface ClientActions {
  setClientRendering: (isClientRendering: boolean) => void
}

export type ClientStore = ClientState & ClientActions

export type ClientStoreApi = ReturnType<typeof createClientStore>
