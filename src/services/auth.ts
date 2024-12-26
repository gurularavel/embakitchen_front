import { httpClient } from '~ek/http-client'
import type {
  LoginFormValues,
  LoginResponse,
  RegistrationFormValues,
  RegistrationResponse,
} from '~ek/types'

export async function login(values: LoginFormValues): Promise<LoginResponse> {
  const response = await httpClient.post<LoginResponse, LoginFormValues>(
    '/login',
    values,
  )
  return response as LoginResponse
}

export async function register(
  values: RegistrationFormValues,
): Promise<RegistrationResponse> {
  const response = await httpClient.post<
    RegistrationResponse,
    RegistrationFormValues
  >('/register', values)

  return response as RegistrationResponse
}
