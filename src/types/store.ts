import { createAppStore } from '~ek/stores'

export interface AppState {
  isClientRendering: boolean
}

export interface AppActions {
  setClientRendering: (isClientRendering: boolean) => void
}

export type AppStore = AppState & AppActions

export type AppStoreApi = ReturnType<typeof createAppStore>
