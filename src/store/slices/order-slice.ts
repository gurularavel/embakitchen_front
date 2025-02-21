import type { StateCreator } from 'zustand'
import type { OrderSlice, AppState } from '~ek/types'

export const createOrderSlice: StateCreator<
  AppState,
  [],
  [],
  OrderSlice
> = set => ({
  selectedProduct: null,
  setSelectedProduct: (selectedProduct: number | null) =>
    set(state => ({
      ...state,
      orderSlice: { ...state.orderSlice, selectedProduct },
    })),
})
