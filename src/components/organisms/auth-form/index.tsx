'use client'

import * as React from 'react'
import { Button } from '~ek/components'
import { login } from '~ek/services'
import type { AuthFormVariant, LoginFormValues } from '~ek/types'

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

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const email = emailRef.current?.value
    const password = passwordRef.current?.value

    const data = await login({
      email,
      password,
      role: 'admin',
    } as LoginFormValues)
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleLogin}
    >
      <div className={styles.inputGroup}>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          placeholder='Email'
          ref={emailRef}
          className={styles.input}
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor='password'>Şifrə</label>
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
  return (
    <form>
      <div>Registration Form</div>
    </form>
  )
}

export function AuthForm({
  variant,
}: Readonly<AuthFormProps>): React.ReactElement {
  return authForms[variant]
}
