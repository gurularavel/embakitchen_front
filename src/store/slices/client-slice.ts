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
  selectedProduct: null,
  setClientRendering: (isClientRendering: boolean) =>
    set(state => ({
      ...state,
      clientSlice: { ...state.clientSlice, isClientRendering },
    })),
  setSelectedProduct: (selectedProduct: number | null) =>
    set(state => ({
      ...state,
      clientSlice: { ...state.clientSlice, selectedProduct },
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
