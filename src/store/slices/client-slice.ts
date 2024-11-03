import type { StateCreator } from 'zustand'
import type { ClientSlice, AppState } from '~ek/types'

export const createClientSlice: StateCreator<
  AppState,
  [],
  [],
  ClientSlice
> = set => ({
  isClientRendering: false,
  setClientRendering: (isClientRendering: boolean) =>
    set(() => ({ isClientRendering })),
})
