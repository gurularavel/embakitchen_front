import { createStore as createZustandStore } from 'zustand'
import type { AppState } from '~ek/types'
import { createClientSlice } from '~ek/store/slices'

export const createStore = () =>
  createZustandStore<AppState>((...a) => ({
    clientSlice: createClientSlice(...a),
  }))
