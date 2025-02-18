import { createStore } from '~ek/store'
import type { UserEntry } from '~ek/types'

export interface ClientSlice {
  isClientRendering: boolean
  isAuthFormDrawerVisible: boolean
  isOrderFormDrawerVisible: boolean
  selectedProduct: number | null
  setSelectedProduct: (product: number | null) => void
  setClientRendering: (isClientRendering: boolean) => void
  setIsAuthFormDrawerVisible: (isAuthFormDrawerVisible: boolean) => void
  setIsOrderFormDrawerVisible: (isOrderFormDrawerVisible: boolean) => void
}

export interface AuthSliceLoginParams {
  user: UserEntry
  token: string
}

export interface AuthSlice {
  user: UserEntry | null
  token: string | null
  setAuthData: (params: AuthSliceLoginParams) => void
  removeAuthData: VoidFunction
}

export interface AppState {
  clientSlice: ClientSlice
  authSlice: AuthSlice
}

export type StoreApi = ReturnType<typeof createStore>
