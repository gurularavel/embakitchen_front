import * as React from 'react'
import { useLocale } from 'next-intl'
import { Form, FormProps, message, Row, Input, Select } from 'antd'
import { Button } from '~ek/components/atoms'
import { CustomModal } from '~ek/components/molecules'
import type {
  CityEntry,
  DistrictEntry,
  Language,
  AddressFormValues,
} from '~ek/types'
import { useStore } from '~ek/hooks'
import { transformToUiData } from '~ek/utils'
import { getCities, getDistricts, postAddress } from '~ek/services'

interface AddAddressModalProps {
  open: boolean
  onClose: () => void
  responseAddresses: () => void
}
const { Option } = Select
const { TextArea } = Input

const formStyles: Readonly<TwClasses> = {
  form: 'flex flex-col gap-y-5',
  double: 'flex gap-x-4 [&_div]:flex-1',
  inputGroup: 'flex flex-col gap-y-1',
  label: 'text-xs font-medium text-gray-1',
  input:
    'inline-block w-full h-14 px-4 text-gray-6 rounded border border-solid border-gray-8',
  select: '!h-14 text-gray-6 rounded',
  submitButton: 'w-full h-14 bg-primary-1 text-white rounded-md',
}
const styles = formStyles as Readonly<StyleRecord>

export default function AddAddressModal({
  open,
  onClose,
  responseAddresses,
}: Readonly<AddAddressModalProps>): React.ReactElement {
  const locale = useLocale()
  const [cities, setCities] = React.useState<CityEntry<string>[]>([])
  const [form] = Form.useForm()
  const [selectedCity, setSelectedCity] = React.useState<CityEntry<string>>()
  const [districts, setDistricts] = React.useState<DistrictEntry<string>[]>([])
  const { user } = useStore(state => state.authSlice)

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

  React.useEffect(() => {
    async function fetchDistricts(cityId: number) {
      const fetchedDistricts = await getDistricts({ cityId })
      const uiData = transformToUiData(
        fetchedDistricts,
        locale as Language,
      ) as DistrictEntry<string>[]
      setDistricts(uiData)
    }

    if (selectedCity?.hasDistricts) {
      fetchDistricts(selectedCity.id)
    }
  }, [selectedCity, locale])

  const handleForm: FormProps<
    Omit<AddressFormValues, 'user_id'>
  >['onFinish'] = async values => {
    const data = await postAddress({
      user_id: user?.id,
      ...values,
    } as AddressFormValues)

    if (!data) return

    message.success('Yeni ünvan əlavə edildi!')
    responseAddresses()
    form.resetFields()
    onClose()
  }

  const onRegionSelect = (field: keyof AddressFormValues, value: number) => {
    form.setFieldsValue({ [field]: value })
    if (field === 'city_id') {
      const city = cities.find(c => c.id === value)
      setSelectedCity(city)
    }
  }

  return (
    <CustomModal
      title='Ünvan əlavə et'
      open={open}
      onCancel={onClose}
    >
      <Form
        layout='vertical'
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        onFinish={handleForm}
        autoComplete='off'
        form={form}
      >
        <Form.Item<AddressFormValues>
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
            onChange={(value: number) => onRegionSelect('city_id', value)}
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

        {selectedCity?.hasDistricts && (
          <Form.Item<AddressFormValues>
            name='district_id'
            label='Rayon'
            rules={[
              {
                required: true,
                message: 'Zəhmət olmasa yaşadığınız rayonu seçin!',
              },
            ]}
          >
            <Select
              placeholder='Rayon seçin'
              onChange={(value: number) => onRegionSelect('district_id', value)}
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

        <Form.Item<AddressFormValues>
          name='address'
          label='Ünvan'
          rules={[
            {
              required: true,
              message: 'Zəhmət olmasa yaşadığınız ünvanı daxil edin!',
            },
          ]}
        >
          <TextArea
            placeholder='Ünvan'
            className={styles.input}
            rows={3}
          />
        </Form.Item>

        <Form.Item<AddressFormValues> label={null}>
          <Button
            type='submit'
            classes={styles.submitButton}
          >
            Ünvan əlavə et
          </Button>
        </Form.Item>
      </Form>
    </CustomModal>
  )
}
