'use client'

import * as React from 'react'
import { Form, Input, Select } from 'antd'
import { CityEntry, Language, OrderFormValues } from '~ek/types'
import { useStore } from '~ek/hooks'
import { getCities } from '~ek/services'
import { transformToUiData } from '~ek/utils'
import { useLocale } from 'next-intl'
import { Button } from '~ek/components/atoms'

const orderFormStyles: Readonly<TwClasses> = {
  form: 'w-full',
  select: '!h-14 text-gray-6 rounded',
  submitButton: 'w-full h-14 bg-primary-1 text-white rounded-md',
}
const styles = orderFormStyles as Readonly<StyleRecord>

export function OrderForm(): React.ReactElement {
  const locale = useLocale()
  const [form] = Form.useForm()
  const [cities, setCities] = React.useState<CityEntry<string>[]>([])
  const {
    authSlice: { user },
  } = useStore(state => state)

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

  const onCitySelect = (city_id: number) => form.setFieldsValue({ city_id })

  const sendOrderHandler = (values: OrderFormValues) => {
    const userDataForOrder = {
      user_id: user?.id,
      name: user?.name,
      surname: user?.surname,
      phone: user?.phone,
    }
  }

  return (
    <Form
      layout='vertical'
      className={styles.form}
      onFinish={sendOrderHandler}
      autoComplete='off'
      form={form}
    >
      <Form.Item<OrderFormValues>
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

      <Form.Item<OrderFormValues> label={null}>
        <Button
          type='submit'
          classes={styles.submitButton}
        >
          Sifariş göndər
        </Button>
      </Form.Item>
    </Form>
  )
}
