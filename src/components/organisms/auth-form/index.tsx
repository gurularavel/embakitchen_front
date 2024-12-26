'use client'

import * as React from 'react'
import { useLocale } from 'next-intl'
import type { FormProps } from 'antd'
import { Form, Input, message } from 'antd'
import { useRouter } from '~ek/i18n/routing'
import { Button } from '~ek/components'
import { getCities, login, register } from '~ek/services'
import type {
  AuthFormVariant,
  CityEntry,
  Language,
  LoginFormValues,
  RegistrationFormValues,
  RegistrationRequestBody,
} from '~ek/types'
import { useStore } from '~ek/hooks'
import { LOCALIZED_PATHNAMES, transformToUiData } from '~ek/utils'

interface AuthFormProps {
  variant: AuthFormVariant
}

const authFormStyles: Readonly<TwClasses> = {
  form: 'flex flex-col gap-y-5',
  double: 'flex gap-x-4 [&_div]:flex-1',
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
  const {
    clientSlice: { setIsDrawerVisible },
    authSlice: { setAuthData },
  } = useStore(state => state)
  const router = useRouter()
  const locale = useLocale()

  const handleLogin: FormProps<LoginFormValues>['onFinish'] = async values => {
    try {
      const { email, password } = values
      const data = await login({
        email,
        password,
      } as LoginFormValues)

      setAuthData(data)
      setIsDrawerVisible(false)
      document.cookie = `token=${data.token}`
      localStorage.setItem('token', JSON.stringify(data.token))
      localStorage.setItem('user', JSON.stringify(data.user))
      router.push(LOCALIZED_PATHNAMES['/profile'][locale as Language])
    } catch (e: unknown) {
      if (e instanceof Error) {
        message.error(e.message)
      }
    }
  }

  return (
    <Form
      layout='vertical'
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      onFinish={handleLogin}
      autoComplete='off'
    >
      <Form.Item<LoginFormValues>
        label='Email'
        name='email'
        rules={[{ required: true, message: 'Zəhmət olmasa email daxil edin!' }]}
      >
        <Input className={styles.input} />
      </Form.Item>

      <Form.Item<LoginFormValues>
        label='Şifrə'
        name='password'
        rules={[{ required: true, message: 'Zəhmət olmasa şifrə daxil edin!' }]}
      >
        <Input.Password className={styles.input} />
      </Form.Item>

      <Form.Item label={null}>
        <Button
          type='submit'
          classes={styles.submitButton}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

function RegistrationForm(): React.ReactElement {
  const registrationFormRef = React.useRef<HTMLFormElement>(null)
  const locale = useLocale()
  const [cities, setCities] = React.useState<CityEntry<string>[]>([])

  React.useEffect(() => {
    async function initializeCities() {
      const fetchedCities = await getCities()
      const citiesForUi = transformToUiData(
        fetchedCities,
        locale as Language,
      ) as CityEntry<string>[]
      setCities(citiesForUi)
    }

    initializeCities()
  }, [locale])

  const handleRegistration = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!registrationFormRef.current) return

    const values = Array.from(registrationFormRef.current.elements)
      .filter(
        (element): element is HTMLInputElement | HTMLSelectElement =>
          element.tagName === 'INPUT' || element.tagName === 'SELECT',
      )
      .reduce(
        (result, element) => ({
          ...result,
          [element.name]:
            element.name !== 'city_id' ? element.value : Number(element.value),
        }),
        {},
      ) as RegistrationFormValues

    await register({
      ...values,
      role: 'user',
    } as RegistrationRequestBody)
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleRegistration}
      ref={registrationFormRef}
      autoComplete='off'
    >
      <div className={styles.double}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Ad</label>
          <input
            type='text'
            name='name'
            placeholder='Ad'
            className={styles.input}
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Soyad</label>
          <input
            type='text'
            name='surname'
            placeholder='Soyad'
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>Email</label>
        <input
          type='email'
          name='email'
          placeholder='Email'
          className={styles.input}
        />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>Mobil nömrə</label>
        <input
          type='tel'
          name='phone'
          placeholder='Mobil nömrə'
          className={styles.input}
        />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>Şəhər</label>
        <select
          name='city_id'
          id='city'
          className={styles.input}
        >
          {cities.map(city => (
            <option
              value={city.id}
              key={city.id}
            >
              {city.title}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>Şifrə</label>
        <input
          type='password'
          name='password'
          placeholder='Şifrə'
          className={styles.input}
        />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>Şifrə (təkrar)</label>
        <input
          type='password'
          name='password_confirmation'
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
