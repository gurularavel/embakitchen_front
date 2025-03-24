'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { Col, Form, Input, message, Row } from 'antd'
import MaskedInput from 'antd-mask-input'
import { LogoutOutlined } from '@ant-design/icons'
import { useLocale, useTranslations } from 'next-intl'
import { Button, Icon, AddAddressModal, EditAddressModal } from '~ek/components'
import { useAuth, useStore } from '~ek/hooks'
import {
  changePassword,
  updateProfileInformation,
  getOrders,
  deleteAddress,
  getAddresses,
} from '~ek/services'
import type {
  AddressEntry,
  ChangePasswordFormValues,
  Language,
  OrderEntry,
  UpdateProfileFormValues,
} from '~ek/types'
import { confirmModal, transformToUiData } from '~ek/utils'

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
  form: 'w-full laptop:w-[520px] flex flex-col gap-y-5',
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
    orderWrapper: 'border border-gray-9 my-4 p-4',
    order:
      'flex flex-wrap items-center justify-between border-b last:border-b-0 py-3',
    orderInfoWrapper: 'flex flex-1 flex-col gap-y-2 mb-2 max-width-[200px]',
    orderInfoLabel: 'text-sm leading-[18px] text-gray-4 font-normal',
    product: 'text-lg font-semibold text-[#EB804E]',
    orderInfoText: 'text-base font-medium text-[#4B494A]',
  },
  addresses: {
    wrapper:
      'flex flex-col tablet:grid tablet:grid-cols-1 laptop:grid-cols-2 widescreen:grid-cols-3 gap-y-6 tablet:gap-6 laptop:gap-y-10 mb-6 laptop:mb-10',
    addressInfoWrapper: 'border border-solid border-gray-9 gap-3 pb-6',
    addressInfoHeader: 'bg-gray-10 p-4 flex justify-between',
    headerTitle: 'text-gray-3 font-semibold text-lg',
    actionButtons: 'flex gap-x-6 justify-between',
    addressContent: 'flex flex-col mt-3 gap-y-3',
    addressTitle: 'px-3 py-4',
    buttonWrapper: '',
    loading: 'flex justify-center py-4',
  },
}
const styles = profileStyles as Readonly<StyleRecord>
const getTabHeaderItemStyles = profileStyles.tabHeaderItem as StyleGetter
const orderHistoryStyles = profileStyles.orders as Readonly<StyleRecord>
const addressesStyles = profileStyles.addresses as Readonly<StyleRecord>

export function Profile(): React.ReactElement {
  const t = useTranslations('profile')
  const [activeTav, setActiveTab] = React.useState<number>(0)
  const { user } = useStore(state => state.authSlice)
  const { logout } = useAuth()
  const router = useRouter()

  const tabHeaders = React.useMemo(
    () => [
      { label: t('accountInfo'), component: <ProfileInformation /> },
      { label: t('changePassword'), component: <ChangePassword /> },
      { label: t('addresses'), component: <Addresses /> },
      { label: t('orderHistory'), component: <OrderHistory /> },
    ],
    [t],
  )

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
                <span>{t('logout')}</span>
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
  const t = useTranslations()

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
      <h4 className={styles.sectionTitle}>{t('texts.accountInformation')}</h4>

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
              label={t('labels.name')}
              name='name'
              rules={[
                {
                  required: true,
                  message: t('validations.enterName'),
                },
              ]}
            >
              <Input className={styles.input} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item<UpdateProfileFormValues>
              label={t('labels.surname')}
              name='surname'
              rules={[
                {
                  required: true,
                  message: t('validations.enterSurname'),
                },
              ]}
            >
              <Input className={styles.input} />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item<UpdateProfileFormValues>
              label={t('labels.email')}
              name='email'
              rules={[{ required: true, message: t('validations.enterEmail') }]}
            >
              <Input className={styles.input} />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item<UpdateProfileFormValues>
              label={t('labels.mobileNumber')}
              name='phone'
              rules={[
                {
                  required: true,
                  message: t('validations.enterMobileNumber'),
                },
                {
                  pattern: /^\+994 \d{2} \d{3} \d{2} \d{2}$/,
                  message: t('validations.invalidMobileNumber'),
                },
              ]}
            >
              <MaskedInput
                mask={'+994 00 000 00 00'}
                className={styles.input}
              />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item<UpdateProfileFormValues> label={null}>
              <Button
                type='submit'
                classes={styles.submitButton}
              >
                {t('buttons.remember')}
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  )
}

function ChangePassword(): React.ReactElement {
  const { logout } = useAuth()
  const t = useTranslations()

  const handlePasswordChange = async (values: ChangePasswordFormValues) => {
    const response = await changePassword(values)

    if (response) {
      message.success(response.message)
      logout(true)
    }
  }

  return (
    <>
      <h4 className={styles.sectionTitle}>{t('texts.changePassword')}</h4>

      <Form
        layout='vertical'
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        onFinish={handlePasswordChange}
        autoComplete='off'
        className={styles.form}
      >
        <Form.Item<ChangePasswordFormValues>
          label={t('labels.password')}
          name='password'
          rules={[{ required: true, message: t('validations.enterPassword') }]}
        >
          <Input.Password className={styles.input} />
        </Form.Item>

        <Form.Item<ChangePasswordFormValues>
          label={t('labels.repeatPassword')}
          name='password_confirmation'
          rules={[
            { required: true, message: t('validations.enterRepeatPassword') },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve()
                }
                return Promise.reject(
                  new Error(t('validations.reEnterRepeatPassword')),
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
            {t('buttons.remember')}
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

function Addresses(): React.ReactElement {
  const t = useTranslations()
  const locale = useLocale()
  const [addresses, setAddresses] = React.useState<AddressEntry<string>[]>([])
  const [selectedAddress, setSelectedAddress] =
    React.useState<AddressEntry<string> | null>(null)
  const [isAddOpen, setIsAddOpen] = React.useState(false)
  const [isEditOpen, setIsEditOpen] = React.useState(false)
  const [loading, setLoading] = React.useState<boolean>(false)
  const token = localStorage.getItem('token')
    ? JSON.parse(localStorage.getItem('token') as string)
    : ''

  async function initializeAddresses() {
    setLoading(true)
    const headers = {
      Authorization: `Bearer ${token}`,
    }
    try {
      const fetchedAddresses = await getAddresses({ headers })
      const uiAddress = transformToUiData(
        fetchedAddresses,
        locale as Language,
      ) as AddressEntry<string>[]
      setAddresses(uiAddress)
    } catch (error) {
      console.error('Error fetching addresses:', error)
    } finally {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    initializeAddresses()
  }, [locale])

  const handleEditAddress = (address: AddressEntry<string>) => {
    setSelectedAddress(address)
    setIsEditOpen(true)
  }

  return (
    <div>
      <h4 className={styles.sectionTitle}>{t('profile.addresses')}</h4>
      {loading && (
        <div className={addressesStyles.loading}>
          <Icon
            variant='loading'
            sizes='w-8 h-8'
            classes='animate-spin'
          />
        </div>
      )}
      <div className={addressesStyles.wrapper}>
        {addresses?.map((address, index) => (
          <div
            key={address.id}
            className={addressesStyles.addressInfoWrapper}
          >
            <div className={addressesStyles.addressInfoHeader}>
              <span className={addressesStyles.headerTitle}>
                {t('texts.address')} {++index}
              </span>
              <div className={addressesStyles.actionButtons}>
                <span onClick={() => handleEditAddress(address)}>
                  <Icon
                    variant='edit'
                    sizes='w-6 h-6'
                    classes='cursor-pointer'
                  />
                </span>
                <span
                  onClick={() =>
                    confirmModal({
                      okText: t('modal.okText'),
                      cancelText: t('modal.cancelText'),
                      title: t('modal.deleteTitle'),
                      onOk: async () => {
                        await deleteAddress(address.id)
                        setAddresses(prev =>
                          prev.filter(a => a.id !== address.id),
                        )
                      },
                    })
                  }
                >
                  <Icon
                    variant='trash'
                    sizes='w-6 h-6'
                    classes='cursor-pointer'
                  />
                </span>
              </div>
            </div>
            <div className={addressesStyles.addressContent}>
              <div className={addressesStyles.addressTitle}>
                {address.city.title} şəhəri{' '}
                {address.district && `, ${address.district.title} rayonu`}
              </div>
              <div className={addressesStyles.addressTitle}>
                {address.address}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={addressesStyles.wrapper}>
        <div className={addressesStyles.buttonWrapper}>
          <Button
            onClick={() => setIsAddOpen(true)}
            type='button'
            classes={styles.submitButton}
          >
            {t('buttons.addAddress')}
          </Button>
        </div>
      </div>
      <AddAddressModal
        open={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        responseAddresses={initializeAddresses}
      />
      {selectedAddress && (
        <EditAddressModal
          open={isEditOpen}
          onClose={() => setIsEditOpen(false)}
          address={selectedAddress}
          responseAddresses={initializeAddresses}
        />
      )}
    </div>
  )
}

function OrderHistory(): React.ReactElement {
  const [orders, setOrders] = React.useState<OrderEntry<string>[]>([])
  const locale = useLocale()
  const t = useTranslations()

  React.useEffect(() => {
    const token = localStorage.getItem('token')
      ? JSON.parse(localStorage.getItem('token') as string)
      : ''

    async function initializeOrders() {
      const headers = {
        Authorization: `Bearer ${token}`,
      }
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
    <>
      <h2 className='text-xl font-semibold text-primary-1 pb-2'>
        {t('profile.orderHistory')}
      </h2>

      {orders.map(order => (
        <div
          key={order.id}
          className={orderHistoryStyles.orderWrapper}
        >
          {order.products.flat().map(product => (
            <div
              key={product.id}
              className={orderHistoryStyles.order}
            >
              <div className={orderHistoryStyles.orderInfoWrapper}>
                <span className={orderHistoryStyles.orderInfoLabel}>
                  {t('texts.product')}
                </span>
                <span className={orderHistoryStyles.product}>
                  {product.title}
                </span>
              </div>

              <div className={orderHistoryStyles.orderInfoWrapper}>
                <span className={orderHistoryStyles.orderInfoLabel}>
                  {t('texts.size')}
                </span>
                <span className={orderHistoryStyles.orderInfoText}>
                  {product.width}x{product.height}
                </span>
              </div>

              <div className={orderHistoryStyles.orderInfoWrapper}>
                <span className={orderHistoryStyles.orderInfoLabel}>
                  {t('texts.address')}
                </span>
                <span className={orderHistoryStyles.orderInfoText}>
                  {order.address}
                </span>
              </div>

              <div className={orderHistoryStyles.orderInfoWrapper}>
                <span className={orderHistoryStyles.orderInfoLabel}>Phone</span>
                <span className={orderHistoryStyles.orderInfoText}>
                  555 555 55 55
                </span>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  )
}
