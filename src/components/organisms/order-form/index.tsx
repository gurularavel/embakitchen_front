'use client'

import * as React from 'react'
import { Col, Form, Input, InputNumber, message, Row, Select } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { useLocale, useTranslations } from 'next-intl'
import {
  CityEntry,
  DistrictEntry,
  Language,
  OrderFormValues,
  OrderResquestBody,
  ProductEntry,
} from '~ek/types'
import { useStore } from '~ek/hooks'
import { createOrder, getCities, getDistricts, getProducts } from '~ek/services'
import { transformToUiData } from '~ek/utils'
import { Button } from '~ek/components/atoms'

const { TextArea } = Input

type OrderProductEntry = Pick<ProductEntry<string>, 'id' | 'title'>

const orderFormStyles: Readonly<TwClasses> = {
  form: 'w-full',
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
  const [selectedCity, setSelectedCity] = React.useState<CityEntry<string>>()
  const [districts, setDistricts] = React.useState<DistrictEntry<string>[]>([])
  const [cityChanged, setCityChanged] = React.useState<boolean>(false)
  const {
    authSlice: { user },
    clientSlice: { setIsOrderFormDrawerVisible },
  } = useStore(state => state)

  React.useEffect(() => {
    if (user) {
      if (user.city?.hasDistricts) {
        fetchDistricts(user.city.id, locale as Language, setDistricts)
      }

      form.setFieldsValue({
        city_id: user.city?.id,
        district_id: user.district?.id,
        address: user.address,
      })
    }
  }, [user, form, locale])

  React.useEffect(() => {
    async function initializeFormValues() {
      const initialCities = await getCities()
      const initialProducts = await getProducts()
      const uiData = {
        products: transformToUiData(
          initialProducts.map(p => ({ id: p.id, title: p.title })),
          locale as Language,
        ) as OrderProductEntry[],
        cities: transformToUiData(
          initialCities,
          locale as Language,
        ) as CityEntry<string>[],
      }
      setCities(uiData.cities)
      setProducts(uiData.products)
    }

    initializeFormValues()
  }, [locale])

  React.useEffect(() => {
    if (selectedCity?.hasDistricts) {
      fetchDistricts(selectedCity.id, locale as Language, setDistricts)
    }
  }, [selectedCity, locale])

  const onRegionSelect = (field: keyof OrderFormValues, value: number) => {
    form.setFieldsValue({ [field]: value })
    if (field === 'city_id') {
      setCityChanged(true)
      const city = cities.find(c => c.id === value)
      setSelectedCity(city)
    }
  }

  const sendOrderHandler = async (values: OrderFormValues) => {
    const orderedUser = {
      user_id: user?.id,
      name: user?.name,
      surname: user?.surname,
      phone: user?.phone,
    }
    const body = {
      ...orderedUser,
      ...values,
    } as OrderResquestBody

    await createOrder(body)
    setIsOrderFormDrawerVisible(false)
    form.resetFields()
    message.success(t('messages.orderSuccess'))
  }

  return (
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
          onChange={(value: number) => onRegionSelect('city_id', value)}
          allowClear
          className={styles.select}
          showSearch
          optionFilterProp='label'
          filterSort={(optionA, optionB) =>
            ((optionA?.label as string) ?? '')
              .toLowerCase()
              .localeCompare(((optionB?.label as string) ?? '').toLowerCase())
          }
          options={cities.map(city => ({
            value: city.id,
            label: city.title,
          }))}
        />
      </Form.Item>

      {((user?.district?.id && !cityChanged) || selectedCity?.hasDistricts) && (
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
            onChange={(value: number) => onRegionSelect('district_id', value)}
            allowClear
            className={styles.select}
            showSearch
            optionFilterProp='label'
            filterSort={(optionA, optionB) =>
              ((optionA?.label as string) ?? '')
                .toLowerCase()
                .localeCompare(((optionB?.label as string) ?? '').toLowerCase())
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

      <Form.Item<OrderFormValues>
        name='message'
        label={t('labels.note')}
      >
        <TextArea
          placeholder={t('placeholder.mote')}
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
  )
}
