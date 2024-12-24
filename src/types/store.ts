import { createStore } from '~ek/store'
import type { UserEntry } from '~ek/types'

export interface ClientSlice {
  isClientRendering: boolean
  isDrawerVisible: boolean
  setClientRendering: (isClientRendering: boolean) => void
  setIsDrawerVisible: (isDrawerVisible: boolean) => void
}

export interface AuthSliceLoginParams {
  user: UserEntry
  token: string
}

export interface AuthSlice {
  user: UserEntry | null
  token: string | null
  setAuthData: (params: AuthSliceLoginParams) => void
  removeAuthData: () => void
}

export interface AppState {
  clientSlice: ClientSlice
  authSlice: AuthSlice
}

export type StoreApi = ReturnType<typeof createStore>
