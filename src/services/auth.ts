import { message } from 'antd'
import { httpClient } from '~ek/http-client'
import type {
  ChangePasswordFormValues,
  LoginFormValues,
  LoginResponse,
  PlainApiResponse,
  RegistrationFormValues,
  RegistrationResponse,
  UpdateProfileFormValues,
} from '~ek/types'

export async function login(
  values: LoginFormValues,
): Promise<LoginResponse | undefined> {
  try {
    const response = await httpClient.post<LoginResponse, LoginFormValues>(
      '/login',
      values,
    )
    return response as LoginResponse
  } catch (e: unknown) {
    if (e instanceof Error) {
      message.error(e.message)
    }
  }
}

export async function register(
  values: RegistrationFormValues,
): Promise<RegistrationResponse | undefined> {
  try {
    const response = await httpClient.post<
      RegistrationResponse,
      RegistrationFormValues
    >('/register', values)

    return response as RegistrationResponse
  } catch (e: unknown) {
    if (e instanceof Error) {
      message.error(e.message)
    }
  }
}

export async function updateProfileInformation(
  values: UpdateProfileFormValues,
): Promise<PlainApiResponse | undefined> {
  try {
    const response = await httpClient.post<
      PlainApiResponse,
      UpdateProfileFormValues
    >('/update-user', values)

    return response as PlainApiResponse
  } catch (e: unknown) {
    if (e instanceof Error) {
      message.error(e.message)
    }
  }
}

export async function changePassword(
  values: ChangePasswordFormValues,
): Promise<PlainApiResponse | undefined> {
  try {
    const response = await httpClient.post<
      PlainApiResponse,
      ChangePasswordFormValues
    >('/change-password', values)

    return response as PlainApiResponse
  } catch (e) {
    if (e instanceof Error) {
      message.error(e.message)
    }
  }
}
