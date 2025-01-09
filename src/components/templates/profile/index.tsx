'use client'

import * as React from 'react'
import { Col, Form, Input, message, Row } from 'antd'
import MaskedInput from 'antd-mask-input'
import { LogoutOutlined } from '@ant-design/icons'
import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'
import { Button, Icon } from '~ek/components'
import { useAuth, useStore } from '~ek/hooks'
import {
  changePassword,
  updateProfileInformation,
  getOrders,
} from '~ek/services'
import type {
  ChangePasswordFormValues,
  Language,
  OrderEntry,
  UpdateProfileFormValues,
} from '~ek/types'
import { transformToUiData } from '~ek/utils'

interface TabHeader {
  label: string
  component: React.ReactElement
}

const profileStyles: Readonly<TwClasses> = {
  container: 'px-4 laptop:px-15 widescreen:px-25 py-6',
  wrapper: 'flex flex-col laptop:flex-row gap-y-6 gap-x-10',
  aside: 'w-full laptop:w-[312px] border border-solid border-gray-9',
  asideHeader:
    'flex items-center gap-x-2 p-6 capitalize border-b border-solid border-gray-9',
  profileIcon: 'w-8 h-8',
  tabHeader: 'p-6',
  tabHeaderItem: (isActive: unknown) =>
    `h-14 flex items-center mb-5 last:mb-0 cursor-pointer text-base font-medium px-6 py-4 ${(isActive as boolean) ? 'bg-primary-9 text-primary-1' : 'bg-white text-tertiary-3'}`,
  tabContent: 'w-full',
  sectionTitle: 'text-2xl leading-9 text-primary-1 font-semibold mb-6',
  form: 'w-[520px] flex flex-col gap-y-5',
  double: 'flex gap-x-4 [&_div]:flex-1',
  inputGroup: 'flex flex-col gap-y-1',
  label: 'text-xs font-medium text-gray-1',
  input:
    'inline-block w-full h-14 px-4 text-gray-6 rounded border border-solid border-gray-8',
  submitButton: 'w-full h-14 bg-primary-1 text-white rounded-md',
  logout: 'h-14 mb-5 last:mb-0',
  logoutButton:
    'w-full h-full flex items-center justify-center gap-x-2 bg-primary-1 text-white text-base font-medium rounded-md',
  orders: {
    wrapper: '',
    order:
      'flex flex-col laptop:flex-row justify-between gap-x-[30px] gap-y-4 border border-solid border-gray-9 p-6',
    orderInfoWrapper: 'flex flex-1 flex-col gap-y-2',
    orderInfoLabel: 'text-sm leading-[18px] text-gray-4 font-normal',
    product: 'text-lg font-semibold text-[#EB804E]',
    orderInfoText: 'text-base font-medium text-[#4B494A]',
  },
}
const styles = profileStyles as Readonly<StyleRecord>
const getTabHeaderItemStyles = profileStyles.tabHeaderItem as StyleGetter
const orderHistoryStyles = profileStyles.orders as Readonly<StyleRecord>

const tabHeaders: TabHeader[] = [
  { label: 'Hesab məlumatları', component: <ProfileInformation /> },
  { label: 'Şifrəni dəyiş', component: <ChangePassword /> },
  { label: 'Ünvanlar', component: <Addresses /> },
  { label: 'Sifariş tarixçəsi', component: <OrderHistory /> },
]

export function Profile(): React.ReactElement {
  const [activeTav, setActiveTab] = React.useState<number>(0)
  const { user } = useStore(state => state.authSlice)
  const { logout } = useAuth()
  const router = useRouter()

  React.useEffect(() => {
    if (!user) {
      router.push('/')
    }
  }, [user, router])

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

            <li className={styles.logout}>
              <button
                onClick={() => logout(false)}
                className={styles.logoutButton}
              >
                <LogoutOutlined />
                <span>Çıxış</span>
              </button>
            </li>
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
        className={styles.form}
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
  const { logout } = useAuth()

  const handlePasswordChange = async (values: ChangePasswordFormValues) => {
    const response = await changePassword(values)

    if (response) {
      message.success(response.message)
      logout(true)
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
        className={styles.form}
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
  const [orders, setOrders] = React.useState<OrderEntry<string>[]>([])
  const locale = useLocale()

  React.useEffect(() => {
    const token = localStorage.getItem('token')
      ? JSON.parse(localStorage.getItem('token') as string)
      : ''

    const headers = {
      Authorization: `Bearer ${token}`,
    }

    async function initializeOrders() {
      const fetchedOrders = await getOrders({ headers })
      const uiOrders = transformToUiData(
        fetchedOrders,
        locale as Language,
      ) as OrderEntry<string>[]
      setOrders(uiOrders)
    }

    initializeOrders()
  }, [locale])

  return (
    <div className={orderHistoryStyles.wrapper}>
      {orders
        .map(order => order.products)
        .flat()
        .map((product: ArrayElement<OrderEntry<string>['products']>) => (
          <div
            className={orderHistoryStyles.order}
            key={product.id}
          >
            <div className={orderHistoryStyles.orderInfoWrapper}>
              <span className={orderHistoryStyles.orderInfoLabel}>Məhsul</span>
              <span className={orderHistoryStyles.product}>
                {product.title}
              </span>
            </div>

            <div className={orderHistoryStyles.orderInfoWrapper}>
              <span className={orderHistoryStyles.orderInfoLabel}>Rəng</span>
              <span className={orderHistoryStyles.orderInfoText}>Boz</span>
            </div>

            <div className={orderHistoryStyles.orderInfoWrapper}>
              <span className={orderHistoryStyles.orderInfoLabel}>Ölçü</span>
              <span className={orderHistoryStyles.orderInfoText}>
                {product.width}x{product.height}
              </span>
            </div>

            <div className={orderHistoryStyles.orderInfoWrapper}>
              <span className={orderHistoryStyles.orderInfoLabel}>Ünvan</span>
              <span className={orderHistoryStyles.orderInfoText}>
                Bakı şəh. Nərimanov r., Ə.Rəcəbli küç 11/A
              </span>
            </div>
          </div>
        ))}
    </div>
  )
}

function CreditPayment(): React.ReactElement {
  return <div>CreditPayment</div>
}

function CreateYourDesign(): React.ReactElement {
  return <div>CreateYourDesign</div>
}
