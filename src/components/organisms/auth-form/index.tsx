'use client'

import * as React from 'react'
import { useLocale } from 'next-intl'
import type { FormProps } from 'antd'
import { Col, Form, Input, message, Row, Select } from 'antd'
import { MaskedInput } from 'antd-mask-input'
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

const { Option } = Select

interface AuthFormProps {
  variant: AuthFormVariant
  setSelectedAuthForm: (authFormVariant: AuthFormVariant) => void
}

const authFormStyles: Readonly<TwClasses> = {
  form: 'flex flex-col gap-y-5',
  double: 'flex gap-x-4 [&_div]:flex-1',
  inputGroup: 'flex flex-col gap-y-1',
  label: 'text-xs font-medium text-gray-1',
  input:
    'inline-block w-full h-14 px-4 text-gray-6 rounded border border-solid border-gray-8',
  select: '!h-14 text-gray-6 rounded',
  submitButton: 'w-full h-14 bg-primary-1 text-white rounded-md',
}
const styles = authFormStyles as Readonly<StyleRecord>

const authForms = (
  variant: AuthFormVariant,
  setSelectedAuthForm: AuthFormProps['setSelectedAuthForm'],
): React.ReactElement => {
  const authForms = {
    login: <LoginForm />,
    registration: (
      <RegistrationForm setSelectedAuthForm={setSelectedAuthForm} />
    ),
  }

  return authForms[variant]
}

function LoginForm(): React.ReactElement {
  const {
    clientSlice: { setIsAuthFormDrawerVisible },
    authSlice: { setAuthData },
  } = useStore(state => state)
  const router = useRouter()
  const locale = useLocale()

  const handleLogin: FormProps<LoginFormValues>['onFinish'] = async values => {
    const { email, password } = values
    const data = await login({
      email,
      password,
    } as LoginFormValues)

    if (!data) return

    setAuthData(data)
    setIsAuthFormDrawerVisible(false)
    document.cookie = `token=${data.token}`
    localStorage.setItem('token', JSON.stringify(data.token))
    localStorage.setItem('user', JSON.stringify(data.user))
    router.push(LOCALIZED_PATHNAMES['/profile'][locale as Language])
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
          Giriş et
        </Button>
      </Form.Item>
    </Form>
  )
}

function RegistrationForm({
  setSelectedAuthForm,
}: Pick<AuthFormProps, 'setSelectedAuthForm'>): React.ReactElement {
  const locale = useLocale()
  const [cities, setCities] = React.useState<CityEntry<string>[]>([])
  const [form] = Form.useForm()

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

  const handleRegistration: FormProps<RegistrationFormValues>['onFinish'] =
    async values => {
      const data = await register({
        ...values,
        role: 'user',
      } as RegistrationRequestBody)

      if (!data) return

      message.success('Siz uğurla qeydiyyatdan keçdiniz!')
      setSelectedAuthForm('login')
    }

  const onCitySelect = (city_id: number) => form.setFieldsValue({ city_id })

  return (
    <Form
      layout='vertical'
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      onFinish={handleRegistration}
      autoComplete='off'
      form={form}
    >
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Form.Item<RegistrationFormValues>
            label='Ad'
            name='name'
            rules={[
              { required: true, message: 'Zəhmət olmasa adınızı daxil edin!' },
            ]}
          >
            <Input className={styles.input} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item<RegistrationFormValues>
            label='Soyad'
            name='surname'
            rules={[
              {
                required: true,
                message: 'Zəhmət olmasa soyadınızı daxil edin!',
              },
            ]}
          >
            <Input className={styles.input} />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item<RegistrationFormValues>
        label='Email'
        name='email'
        rules={[{ required: true, message: 'Zəhmət olmasa email daxil edin!' }]}
      >
        <Input className={styles.input} />
      </Form.Item>

      <Form.Item<RegistrationFormValues>
        label='Mobil nömrə'
        name='phone'
        rules={[
          { required: true, message: 'Zəhmət olmasa mobil nömrə daxil edin!' },
          {
            pattern: /^\+994 \d{2} \d{3} \d{2} \d{2}$/,
            message: 'Zəhmət olmasa düzgün formatda mobil nömrə daxil edin.',
          },
        ]}
      >
        <MaskedInput
          mask={'+994 00 000 00 00'}
          className={styles.input}
        />
      </Form.Item>

      <Form.Item<RegistrationFormValues>
        name='city_id'
        label='Şəhər'
        rules={[
          {
            required: true,
            message: 'Zəhmət olmasa yaşadığınız şəhəri seçin!',
          },
        ]}
      >
        <Select
          placeholder='Şəhər seçin'
          onChange={onCitySelect}
          allowClear
          className={styles.select}
        >
          {cities.map(city => (
            <Option
              key={city.id}
              value={city.id}
            >
              {city.title}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item<RegistrationFormValues>
        label='Şifrə'
        name='password'
        rules={[{ required: true, message: 'Zəhmət olmasa şifrə daxil edin!' }]}
      >
        <Input.Password className={styles.input} />
      </Form.Item>

      <Form.Item<RegistrationFormValues>
        label='Şifrə (təkrar)'
        name='password_confirmation'
        rules={[
          { required: true, message: 'Zəhmət olmasa şifrənin təkrar edin!' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve()
              }
              return Promise.reject(
                new Error(
                  'Zəhmət olmasa şifrənizin təkrarını düzgün daxil edin!',
                ),
              )
            },
          }),
        ]}
      >
        <Input.Password className={styles.input} />
      </Form.Item>

      <Form.Item<RegistrationFormValues> label={null}>
        <Button
          type='submit'
          classes={styles.submitButton}
        >
          Qeydiyyatdan keç
        </Button>
      </Form.Item>
    </Form>
  )
}

export function AuthForm({
  variant,
  setSelectedAuthForm,
}: Readonly<AuthFormProps>): React.ReactElement {
  return authForms(variant, setSelectedAuthForm)
}
