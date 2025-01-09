import { useRouter } from 'next/navigation'
import { useStore } from '~ek/hooks'
import { removeBrowserAuthData } from '~ek/utils'

interface AuthActions {
  logout: (retryLogin: boolean) => void
}

export function useAuth(): AuthActions {
  const router = useRouter()
  const {
    authSlice: { removeAuthData },
    clientSlice: { setIsAuthFormDrawerVisible },
  } = useStore(state => state)

  const logout = (retryLogin: boolean): void => {
    router.push('/')
    removeAuthData()
    removeBrowserAuthData()
    if (retryLogin) {
      setIsAuthFormDrawerVisible(true)
    }
  }

  return { logout }
}
