import { createStore as createZustandStore } from 'zustand'
import type { AppState } from '~ek/types'
import {
  createAuthSlice,
  createClientSlice,
  createOrderSlice,
} from '~ek/store/slices'

export const createStore = () =>
  createZustandStore<AppState>((...a) => ({
    clientSlice: createClientSlice(...a),
    authSlice: createAuthSlice(...a),
    orderSlice: createOrderSlice(...a),
  }))
