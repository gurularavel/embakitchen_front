import { httpClient } from '~ek/http-client'
import type { LoginFormValues, LoginResponse } from '~ek/types'

export async function login(values: LoginFormValues): Promise<LoginResponse> {
  const response = await httpClient.post<LoginResponse, LoginFormValues>(
    '/login',
    values,
  )
  return response as LoginResponse
}
