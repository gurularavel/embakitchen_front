'use client'

import * as React from 'react'
import { Col, Form, Input, InputNumber, message, Row, Select } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { useLocale, useTranslations } from 'next-intl'
import { Button } from '~ek/components'
import type {
  AddressEntry,
  CityEntry,
  DistrictEntry,
  Language,
  OrderFormValues,
  OrderResquestBody,
  ProductEntry,
} from '~ek/types'
import { useStore } from '~ek/hooks'
import {
  createOrder,
  getAddresses,
  getCities,
  getDistricts,
  getProducts,
} from '~ek/services'
import { transformToUiData } from '~ek/utils'
import SimpleBar from 'simplebar-react'
import { MaskedInput } from 'antd-mask-input'

const { TextArea } = Input

type OrderProductEntry = Pick<ProductEntry<string>, 'id' | 'title'>

const orderFormStyles: Readonly<TwClasses> = {
  form: 'w-full',
  orderFormScroll:
    'h-full [&_.simplebar-scrollbar::before]:bg-gray-400 [&_.simplebar-scrollbar::before]:opacity-100 [&_.simplebar-scrollbar::before]:w-3 [&_.simplebar-track.simplebar-vertical]:w-[15px] [&_.simplebar-track.simplebar-vertical]:rounded pr-10',
  select: '!h-14 text-gray-6 rounded',
  input:
    'inline-block !w-full h-14 px-4 text-gray-6 rounded border border-solid border-gray-8',
  removeIcon: '!h-8',
  orderedProduct: 'p-4 bg-[rgba(224,218,218,0.2)] rounded-md',
  submitButton: 'w-full h-14 bg-primary-1 text-white rounded-md',
}
const styles = orderFormStyles as Readonly<StyleRecord>

async function fetchDistricts(
  cityId: number,
  locale: Language,
  setDistricts: React.Dispatch<React.SetStateAction<DistrictEntry<string>[]>>,
) {
  const fetchedDistricts = await getDistricts({ cityId })
  const uiData = transformToUiData(
    fetchedDistricts,
    locale as Language,
  ) as DistrictEntry<string>[]
  setDistricts(uiData)
}

export function OrderForm(): React.ReactElement {
  const locale = useLocale()
  const [form] = Form.useForm()
  const t = useTranslations()
  const [cities, setCities] = React.useState<CityEntry<string>[]>([])
  const [products, setProducts] = React.useState<OrderProductEntry[]>([])
  const [addresses, setAddresses] = React.useState<AddressEntry<string>[]>([])
  const [selectedCity, setSelectedCity] = React.useState<CityEntry<string>>()
  const [isAddressSelected, setIsAddressSelected] =
    React.useState<boolean>(true)
  const [districts, setDistricts] = React.useState<DistrictEntry<string>[]>([])
  const {
    authSlice: { user, token },
    clientSlice: { setIsOrderFormDrawerVisible, isOrderFormDrawerVisible },
    orderSlice: { setSelectedProduct, selectedProduct },
  } = useStore(state => state)

  React.useEffect(() => {
    async function initializeFormValues() {
      if (!token) return
      const headers = {
        Authorization: `Bearer ${token}`,
      }
      const initialCities = await getCities()
      const initialProducts = await getProducts()
      const initialAddresses = await getAddresses({ headers })
      const uiData = {
        products: transformToUiData(
          initialProducts.data.map(p => ({ id: p.id, title: p.title })),
          locale as Language,
        ) as OrderProductEntry[],
        cities: transformToUiData(
          initialCities,
          locale as Language,
        ) as CityEntry<string>[],
        addresses: transformToUiData(
          initialAddresses,
          locale as Language,
        ) as AddressEntry<string>[],
      }
      setCities(uiData.cities)
      setProducts(uiData.products)
      setAddresses(uiData.addresses)
    }

    if (selectedProduct) {
      form.setFieldsValue({
        products: [{ id: selectedProduct }],
      })
    }

    initializeFormValues()
  }, [locale, token, selectedProduct, form])

  React.useEffect(() => {
    !isOrderFormDrawerVisible && form.resetFields()
    setSelectedProduct(null)
  }, [isOrderFormDrawerVisible, form, setSelectedProduct])

  React.useEffect(() => {
    if (selectedCity?.hasDistricts) {
      fetchDistricts(selectedCity.id, locale as Language, setDistricts)
    }
  }, [selectedCity, locale])

  const onSelectChange = (field: keyof OrderFormValues, value: number) => {
    if (field === 'addresses') {
      setIsAddressSelected(true)
    } else {
      form.setFieldsValue({ [field]: value })
    }

    if (field === 'city_id') {
      const city = cities.find(c => c.id === value)
      setSelectedCity(city)
    }
  }

  const sendOrderHandler = async (values: OrderFormValues) => {
    let addressInfo = {}
    const orderedUser = {
      user_id: user?.id,
      name: user?.name,
      surname: user?.surname,
      phone: user?.phone,
    }
    const address = addresses?.find(a => a.id === values.addresses)
    if (address) {
      addressInfo = {
        city_id: address.city?.id,
        district_id: address.district?.id,
        address: address.address,
      }
    }
    const body = {
      ...orderedUser,
      ...addressInfo,
      ...values,
    } as OrderResquestBody

    await createOrder(body)
    setIsOrderFormDrawerVisible(false)
    form.resetFields()
    message.success(t('messages.orderSuccess'))
  }

  return (
    <SimpleBar className={styles.orderFormScroll}>
      <Form
        layout='vertical'
        className={styles.form}
        onFinish={sendOrderHandler}
        autoComplete='off'
        form={form}
      >
        <Form.List
          name='products'
          initialValue={[{}]}
        >
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Row
                  key={key}
                  gutter={[16, 0]}
                  style={{ margin: '0 0 0.75rem 0' }}
                  className={styles.orderedProduct}
                >
                  <Col span={24}>
                    <Form.Item<OrderFormValues['products']>
                      {...restField}
                      name={[name, 'id']}
                      label={t('labels.product')}
                      rules={[
                        {
                          required: true,
                          message: t('validations.selectProduct'),
                        },
                      ]}
                    >
                      <Select
                        placeholder={t('placeholder.selectProduct')}
                        allowClear
                        className={styles.select}
                        showSearch
                        optionFilterProp='label'
                        filterSort={(optionA, optionB) =>
                          ((optionA?.label as string) ?? '')
                            .toLowerCase()
                            .localeCompare(
                              ((optionB?.label as string) ?? '').toLowerCase(),
                            )
                        }
                        options={products.map(product => ({
                          value: product.id,
                          label: product.title,
                        }))}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item<OrderFormValues['products']>
                      {...restField}
                      label={t('labels.width')}
                      name={[name, 'width']}
                      rules={[
                        {
                          required: true,
                          message: t('validations.enterWidth'),
                        },
                      ]}
                    >
                      <InputNumber
                        placeholder={t('placeholder.width')}
                        className={styles.input}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item<OrderFormValues['products']>
                      {...restField}
                      name={[name, 'height']}
                      label={t('labels.height')}
                      rules={[
                        {
                          required: true,
                          message: t('validations.enterHeight'),
                        },
                      ]}
                    >
                      <InputNumber
                        placeholder={t('placeholder.height')}
                        className={styles.input}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Button
                      onClick={() => remove(name)}
                      classes={styles.submitButton}
                    >
                      {t('buttons.delete')}
                    </Button>
                  </Col>
                </Row>
              ))}
              <Form.Item>
                <Button
                  onClick={() => add()}
                  classes={styles.submitButton}
                >
                  <PlusOutlined />
                  <span>{t('buttons.addProduct')}</span>
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item<OrderFormValues>
          name='phone'
          label='Phone'
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

        {isAddressSelected ? (
          <>
            <Form.Item<OrderFormValues>
              name='addresses'
              label={t('labels.address')}
              rules={[
                {
                  required: true,
                  message: t('validations.enterAddress'),
                },
              ]}
            >
              <Select
                placeholder={t('placeholder.address')}
                onChange={(value: number) => onSelectChange('addresses', value)}
                allowClear
                className={styles.select}
                showSearch
                optionFilterProp='label'
                filterSort={(optionA, optionB) =>
                  ((optionA?.label as string) ?? '')
                    .toLowerCase()
                    .localeCompare(
                      ((optionB?.label as string) ?? '').toLowerCase(),
                    )
                }
                options={addresses.map(address => ({
                  value: address.id,
                  label: `${address.city.title} şəhəri, ${address.district && address.district.title + ' rayonu,'} ${address.address}`,
                }))}
              />
            </Form.Item>
            <div
              className='text-right text-blue-400 decoration-blue-400 underline cursor-pointer'
              onClick={() => setIsAddressSelected(!isAddressSelected)}
            >
              {t('buttons.addAnotherAddress')}
            </div>
          </>
        ) : (
          <>
            <Form.Item<OrderFormValues>
              name='city_id'
              label={t('labels.city')}
              rules={[
                {
                  required: true,
                  message: t('validations.selectCity'),
                },
              ]}
            >
              <Select
                placeholder={t('placeholder.selectCity')}
                onChange={(value: number) => onSelectChange('city_id', value)}
                allowClear
                className={styles.select}
                showSearch
                optionFilterProp='label'
                filterSort={(optionA, optionB) =>
                  ((optionA?.label as string) ?? '')
                    .toLowerCase()
                    .localeCompare(
                      ((optionB?.label as string) ?? '').toLowerCase(),
                    )
                }
                options={cities.map(city => ({
                  value: city.id,
                  label: city.title,
                }))}
              />
            </Form.Item>

            {selectedCity?.hasDistricts && (
              <Form.Item<OrderFormValues>
                name='district_id'
                label={t('labels.district')}
                rules={[
                  {
                    required: true,
                    message: t('validations.selectDistrict'),
                  },
                ]}
              >
                <Select
                  placeholder={t('placeholder.selectDistrict')}
                  onChange={(value: number) =>
                    onSelectChange('district_id', value)
                  }
                  allowClear
                  className={styles.select}
                  showSearch
                  optionFilterProp='label'
                  filterSort={(optionA, optionB) =>
                    ((optionA?.label as string) ?? '')
                      .toLowerCase()
                      .localeCompare(
                        ((optionB?.label as string) ?? '').toLowerCase(),
                      )
                  }
                  options={districts.map(district => ({
                    value: district.id,
                    label: district.title,
                  }))}
                />
              </Form.Item>
            )}

            <Form.Item<OrderFormValues>
              name='address'
              label={t('labels.address')}
              rules={[
                {
                  required: true,
                  message: t('validations.enterAddress'),
                },
              ]}
            >
              <Input
                placeholder={t('placeholder.address')}
                className={styles.input}
              />
            </Form.Item>
            <div
              className='text-right text-blue-400 decoration-blue-400 underline cursor-pointer'
              onClick={() => setIsAddressSelected(!isAddressSelected)}
            >
              {t('buttons.selectExistingAddress')}
            </div>
          </>
        )}

        <Form.Item<OrderFormValues>
          name='message'
          label={t('labels.note')}
        >
          <TextArea
            placeholder={t('placeholder.note')}
            rows={4}
          />
        </Form.Item>

        <Form.Item<OrderFormValues> label={null}>
          <Button
            type='submit'
            classes={styles.submitButton}
          >
            {t('buttons.sendOrder')}
          </Button>
        </Form.Item>
      </Form>
    </SimpleBar>
  )
}
