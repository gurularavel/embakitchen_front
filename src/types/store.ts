import { createStore } from '~ek/store'

export interface ClientSlice {
  isClientRendering: boolean
  setClientRendering: (isClientRendering: boolean) => void
}

export type AppState = ClientSlice

export type StoreApi = ReturnType<typeof createStore>
