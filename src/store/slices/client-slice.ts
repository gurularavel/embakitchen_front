import type { StateCreator } from 'zustand'
import type { ClientSlice, AppState } from '~ek/types'

export const createClientSlice: StateCreator<
  AppState,
  [],
  [],
  ClientSlice
> = set => ({
  isClientRendering: false,
  isAuthFormDrawerVisible: false,
  isOrderFormDrawerVisible: false,
  setClientRendering: (isClientRendering: boolean) =>
    set(state => ({
      ...state,
      clientSlice: { ...state.clientSlice, isClientRendering },
    })),
  setIsAuthFormDrawerVisible: (isAuthFormDrawerVisible: boolean) =>
    set(state => ({
      ...state,
      clientSlice: { ...state.clientSlice, isAuthFormDrawerVisible },
    })),
  setIsOrderFormDrawerVisible: (isOrderFormDrawerVisible: boolean) =>
    set(state => ({
      ...state,
      clientSlice: { ...state.clientSlice, isOrderFormDrawerVisible },
    })),
})
