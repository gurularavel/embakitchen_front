'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { Col, Form, Input, message, Row } from 'antd'
import MaskedInput from 'antd-mask-input'
import { Button, Icon } from '~ek/components'
import { useStore } from '~ek/hooks'
import { changePassword, updateProfileInformation } from '~ek/services'
import type {
  ChangePasswordFormValues,
  UpdateProfileFormValues,
} from '~ek/types'
import { logout } from '~ek/utils'

interface TabHeader {
  label: string
  component: React.ReactElement
}

const profileStyles: Readonly<TwClasses> = {
  container: 'px-4 py-6',
  wrapper: 'flex flex-col laptop:flex-row gap-y-6 gap-x-10',
  aside: 'border border-solid border-gray-9',
  asideHeader:
    'flex items-center gap-x-2 p-6 capitalize border-b border-solid border-gray-9',
  profileIcon: 'w-8 h-8',
  tabHeader: 'p-6',
  tabHeaderItem: (isActive: unknown) =>
    `h-14 flex items-center mb-5 last:mb-0 cursor-pointer text-base font-medium px-6 py-4 ${(isActive as boolean) ? 'bg-primary-9 text-primary-1' : 'bg-white text-tertiary-3'}`,
  tabContent: 'w-[520px]',
  sectionTitle: 'text-2xl leading-9 text-primary-1 font-semibold mb-6',
  form: 'w-full flex flex-col gap-y-5',
  double: 'flex gap-x-4 [&_div]:flex-1',
  inputGroup: 'flex flex-col gap-y-1',
  label: 'text-xs font-medium text-gray-1',
  input:
    'inline-block w-full h-14 px-4 text-gray-6 rounded border border-solid border-gray-8',
  submitButton: 'w-full h-14 bg-primary-1 text-white rounded-md',
}
const styles = profileStyles as Readonly<StyleRecord>
const getTabHeaderItemStyles = profileStyles.tabHeaderItem as StyleGetter

const tabHeaders: TabHeader[] = [
  { label: 'Hesab məlumatları', component: <ProfileInformation /> },
  { label: 'Şifrəni dəyiş', component: <ChangePassword /> },
  { label: 'Ünvanlar', component: <Addresses /> },
  { label: 'Sifariş tarixçəsi', component: <OrderHistory /> },
  { label: 'Kredit ödənişi', component: <CreditPayment /> },
  { label: 'Öz dizaynını yarat', component: <CreateYourDesign /> },
]

export function Profile(): React.ReactElement {
  const [activeTav, setActiveTab] = React.useState<number>(0)
  const { user } = useStore(state => state.authSlice)

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <aside className={styles.aside}>
          <h4 className={styles.asideHeader}>
            <Icon
              variant='profile-dark'
              sizes=''
            />
            {user?.name} {user?.surname}
          </h4>

          <ul className={styles.tabHeader}>
            {tabHeaders.map((header: TabHeader, i: number) => (
              <li
                key={header.label}
                onClick={() => setActiveTab(i)}
                className={getTabHeaderItemStyles(i === activeTav)}
              >
                {header.label}
              </li>
            ))}
          </ul>
        </aside>

        <div className={styles.tabContent}>
          {tabHeaders[activeTav].component}
        </div>
      </div>
    </div>
  )
}

function ProfileInformation(): React.ReactElement {
  const { user } = useStore(state => state.authSlice)
  const [form] = Form.useForm()

  React.useEffect(() => {
    form.setFieldsValue({
      name: user?.name,
      surname: user?.surname,
      email: user?.email,
      phone: user?.phone,
    })
  }, [user, form])

  const saveProfileInformation = async (values: UpdateProfileFormValues) => {
    const areValuesChanged = Object.keys(values).some(
      key =>
        values[key as keyof UpdateProfileFormValues] !==
        user![key as keyof UpdateProfileFormValues],
    )

    if (areValuesChanged) {
      const response = await updateProfileInformation(values)

      if (!response) return

      message.success(response.message)
    }
  }

  return (
    <>
      <h4 className={styles.sectionTitle}>Hesab məlumatları</h4>

      <Form
        layout='vertical'
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        onFinish={saveProfileInformation}
        initialValues={{
          name: user?.name,
          surname: user?.surname,
          email: user?.email,
          phone: user?.phone,
        }}
        form={form}
      >
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item<UpdateProfileFormValues>
              label='Ad'
              name='name'
              rules={[
                {
                  required: true,
                  message: 'Zəhmət olmasa adınızı daxil edin!',
                },
              ]}
            >
              <Input className={styles.input} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item<UpdateProfileFormValues>
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

        <Form.Item<UpdateProfileFormValues>
          label='Email'
          name='email'
          rules={[
            { required: true, message: 'Zəhmət olmasa email daxil edin!' },
          ]}
        >
          <Input className={styles.input} />
        </Form.Item>

        <Form.Item<UpdateProfileFormValues>
          label='Mobil nömrə'
          name='phone'
          rules={[
            {
              required: true,
              message: 'Zəhmət olmasa mobil nömrə daxil edin!',
            },
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

        <Form.Item<UpdateProfileFormValues> label={null}>
          <Button
            type='submit'
            classes={styles.submitButton}
          >
            Yadda saxla
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

function ChangePassword(): React.ReactElement {
  const router = useRouter()
  const {
    authSlice: { removeAuthData },
    clientSlice: { setIsDrawerVisible },
  } = useStore(state => state)

  const handlePasswordChange = async (values: ChangePasswordFormValues) => {
    const response = await changePassword(values)

    if (response) {
      message.success(response.message)
      logout()
      router.refresh()
      removeAuthData()
      setIsDrawerVisible(true)
    }
  }

  return (
    <>
      <h4 className={styles.sectionTitle}>Şifrəni dəyiş</h4>

      <Form
        layout='vertical'
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        onFinish={handlePasswordChange}
        autoComplete='off'
      >
        <Form.Item<ChangePasswordFormValues>
          label='Şifrə'
          name='password'
          rules={[
            { required: true, message: 'Zəhmət olmasa şifrə daxil edin!' },
          ]}
        >
          <Input.Password className={styles.input} />
        </Form.Item>

        <Form.Item<ChangePasswordFormValues>
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

        <Form.Item<ChangePasswordFormValues> label={null}>
          <Button
            type='submit'
            classes={styles.submitButton}
          >
            Yadda saxla
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

function Addresses(): React.ReactElement {
  return <div>Addresses</div>
}

function OrderHistory(): React.ReactElement {
  return <div>OrderHistory</div>
}

function CreditPayment(): React.ReactElement {
  return <div>CreditPayment</div>
}

function CreateYourDesign(): React.ReactElement {
  return <div>CreateYourDesign</div>
}
