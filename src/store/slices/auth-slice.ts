import type { StateCreator } from 'zustand'
import type { AuthSlice, AppState, AuthSliceLoginParams } from '~ek/types'

export const createAuthSlice: StateCreator<
  AppState,
  [],
  [],
  AuthSlice
> = set => ({
  user: null,
  token: null,
  setAuthData: ({ user, token }: AuthSliceLoginParams) =>
    set(state => ({
      ...state,
      authSlice: { ...state.authSlice, user, token },
    })),
  removeAuthData: () =>
    set(state => ({
      ...state,
      authSlice: { ...state.authSlice, user: null, token: null },
    })),
})
