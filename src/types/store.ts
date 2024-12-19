import { createStore } from '~ek/store'

export interface ClientSlice {
  isClientRendering: boolean
  isDrawerVisible: boolean
  setClientRendering: (isClientRendering: boolean) => void
  setIsDrawerVisible: (isDrawerVisible: boolean) => void
}

export interface AppState {
  clientSlice: ClientSlice
}

export type StoreApi = ReturnType<typeof createStore>
