'use client'

import * as React from 'react'
import { Button } from '~ek/components'
import { login } from '~ek/services'
import type { AuthFormVariant, LoginFormValues } from '~ek/types'
import { useStore } from '~ek/hooks'

interface AuthFormProps {
  variant: AuthFormVariant
}

const authFormStyles: Readonly<TwClasses> = {
  form: 'flex flex-col gap-y-5',
  inputGroup: 'flex flex-col gap-y-1',
  label: 'text-xs font-medium text-gray-1',
  input:
    'inline-block w-full h-14 px-4 text-gray-6 rounded border border-solid border-gray-8',
  submitButton: 'w-full h-14 bg-primary-1 text-white rounded-md',
  login: {},
  registration: {},
}
const styles = authFormStyles as Readonly<StyleRecord>
const loginFormStyles = authFormStyles.login as Readonly<StyleRecord>
const registrationFormStyles =
  authFormStyles.registration as Readonly<StyleRecord>

const authForms: Record<AuthFormVariant, React.ReactElement> = {
  login: <LoginForm />,
  registration: <RegistrationForm />,
}

function LoginForm(): React.ReactElement {
  const emailRef = React.useRef<HTMLInputElement>(null)
  const passwordRef = React.useRef<HTMLInputElement>(null)
  const {
    clientSlice: { setIsDrawerVisible },
    authSlice: { setAuthData },
  } = useStore(state => state)

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const email = emailRef.current?.value
    const password = passwordRef.current?.value

    const data = await login({
      email,
      password,
    } as LoginFormValues)
    setAuthData(data)
    setIsDrawerVisible(false)
    document.cookie = `token=${data.token}`
    localStorage.setItem('token', JSON.stringify(data.token))
    localStorage.setItem('user', JSON.stringify(data.user))
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleLogin}
    >
      <div className={styles.inputGroup}>
        <label>Email</label>
        <input
          type='email'
          placeholder='Email'
          ref={emailRef}
          className={styles.input}
        />
      </div>

      <div className={styles.inputGroup}>
        <label>Şifrə</label>
        <input
          type='password'
          placeholder='Şifrə'
          ref={passwordRef}
          className={styles.input}
        />
      </div>

      <div>
        <Button
          type='submit'
          classes={styles.submitButton}
        >
          Giriş
        </Button>
      </div>
    </form>
  )
}

function RegistrationForm(): React.ReactElement {
  const registrationFormRef = React.useRef<HTMLFormElement>(null)

  const handleRegistration = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!registrationFormRef.current) return

    const values = Array.from(registrationFormRef.current.elements)
      .filter(
        (element): element is HTMLInputElement => element.tagName === 'INPUT',
      )
      .reduce(
        (result, element) => ({ ...result, [element.name]: element.value }),
        {},
      )
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleRegistration}
      ref={registrationFormRef}
    >
      <div className={styles.inputGroup}>
        <label>Email</label>
        <input
          type='email'
          name='email'
          placeholder='Email'
          className={styles.input}
        />
      </div>

      <div className={styles.inputGroup}>
        <label>Mobil nömrə</label>
        <input
          type='tel'
          name='phone'
          placeholder='Mobil nömrə'
          className={styles.input}
        />
      </div>

      <div className={styles.inputGroup}>
        <label>Şifrə</label>
        <input
          type='password'
          name='password'
          placeholder='Şifrə'
          className={styles.input}
        />
      </div>

      <div className={styles.inputGroup}>
        <label>Şifrə (təkrar)</label>
        <input
          type='password'
          name='password'
          placeholder='Şifrə (təkrar)'
          className={styles.input}
        />
      </div>

      <div>
        <Button
          type='submit'
          classes={styles.submitButton}
        >
          Giriş
        </Button>
      </div>
    </form>
  )
}

export function AuthForm({
  variant,
}: Readonly<AuthFormProps>): React.ReactElement {
  return authForms[variant]
}
