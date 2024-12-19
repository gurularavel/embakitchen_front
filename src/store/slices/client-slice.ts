import type { StateCreator } from 'zustand'
import type { ClientSlice, AppState } from '~ek/types'

export const createClientSlice: StateCreator<
  AppState,
  [],
  [],
  ClientSlice
> = set => ({
  isClientRendering: false,
  isDrawerVisible: false,
  setClientRendering: (isClientRendering: boolean) =>
    set(state => ({
      ...state,
      clientSlice: { ...state.clientSlice, isClientRendering },
    })),
  setIsDrawerVisible: (isDrawerVisible: boolean) =>
    set(state => ({
      ...state,
      clientSlice: { ...state.clientSlice, isDrawerVisible },
    })),
})
