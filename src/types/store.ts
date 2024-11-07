import { createStore } from '~ek/store'

export interface ClientSlice {
  isClientRendering: boolean
  setClientRendering: (isClientRendering: boolean) => void
}

export interface AppState {
  clientSlice: ClientSlice
}

export type StoreApi = ReturnType<typeof createStore>
