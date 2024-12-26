import { httpClient } from '~ek/http-client'
import type {
  ChangePasswordFormValues,
  LoginFormValues,
  LoginResponse,
  PlainApiResponse,
  RegistrationFormValues,
  RegistrationResponse,
} from '~ek/types'

export async function login(values: LoginFormValues): Promise<LoginResponse> {
  try {
    const response = await httpClient.post<LoginResponse, LoginFormValues>(
      '/login',
      values,
    )
    return response as LoginResponse
  } catch (e: unknown) {
    throw new Error(e as string)
  }
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

export async function changePassword(
  values: ChangePasswordFormValues,
): Promise<PlainApiResponse> {
  const response = await httpClient.post<
    PlainApiResponse,
    ChangePasswordFormValues
  >('/change-password', values)

  return response as PlainApiResponse
}
