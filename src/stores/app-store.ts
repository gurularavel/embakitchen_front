import { createStore, type StoreApi } from 'zustand'
import type { AppState, AppStore } from '~ek/types'

export const defaultInitialState: AppState = {
  isClientRendering: false,
}

export function createAppStore(
  initialState: AppState = defaultInitialState,
): StoreApi<AppStore> {
  return createStore<AppStore>()(set => ({
    ...initialState,
    setClientRendering: (isClientRendering: boolean) =>
      set(() => ({ isClientRendering })),
  }))
}
