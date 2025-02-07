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
  AddressEntry,
} from '~ek/types'
import { useStore } from '~ek/hooks'
import { transformToUiData } from '~ek/utils'
import { getCities, getDistricts, editAddress } from '~ek/services'

interface AddAddressModalProps {
  open: boolean
  onClose: () => void
  responseAddresses: () => void
  address: AddressEntry<string>
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

export default function EditAddressModal({
  open,
  onClose,
  responseAddresses,
  address,
}: Readonly<AddAddressModalProps>): React.ReactElement {
  const locale = useLocale()
  const [cities, setCities] = React.useState<CityEntry<string>[]>([])
  const [form] = Form.useForm()
  const [selectedCity, setSelectedCity] = React.useState<CityEntry<string>>()
  const [districts, setDistricts] = React.useState<DistrictEntry<string>[]>([])
  const [cityChanged, setCityChanged] = React.useState<boolean>(false)
  const { user } = useStore(state => state.authSlice)

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
    return uiData
  }
  React.useEffect(() => {
    async function initializeForm() {
      if (open && address) {
        form.setFieldsValue({
          city_id: address.city?.id,
          address: address.address,
        })
        if (address.city?.id) {
          const fetchedDistricts = await fetchDistricts(
            address.city.id,
            locale as Language,
            setDistricts,
          )
          if (address.district?.id) {
            form.setFieldsValue({ district_id: address.district.id })
          } else if (fetchedDistricts.length) {
            form.setFieldsValue({ district_id: fetchedDistricts[0].id })
          }
        }
      } else {
        form.resetFields()
      }
    }

    initializeForm()
  }, [open, address, form, locale])

  React.useEffect(() => {
    async function initializeCities() {
      const fetchedCities = await getCities()
      const citiesForUi = transformToUiData(
        fetchedCities,
        locale as Language,
      ) as CityEntry<string>[]
      setCities(citiesForUi)
    }
    if (address.district?.id) {
      fetchDistricts(address.city.id, locale as Language, setDistricts)
    }
    initializeCities()
  }, [locale, address.city.id, address.district?.id])

  React.useEffect(() => {
    if (selectedCity?.hasDistricts) {
      fetchDistricts(selectedCity.id, locale as Language, setDistricts)
    }
  }, [selectedCity, locale])

  const handleForm: FormProps<
    Omit<AddressFormValues, 'user_id'>
  >['onFinish'] = async values => {
    const data = await editAddress(
      {
        user_id: user?.id,
        ...values,
      } as AddressFormValues,
      address.id,
    )

    if (!data) return
    message.success('Ünvan məlumatları dəyişdirildi!')
    responseAddresses()
    form.resetFields()
    onClose()
  }

  const onRegionSelect = (field: keyof AddressFormValues, value: number) => {
    form.setFieldsValue({ [field]: value })
    if (field === 'city_id') {
      const city = cities.find(c => c.id === value)
      setCityChanged(true)
      setSelectedCity(city)
    }
  }

  return (
    <CustomModal
      title='Məlumatı yenilə'
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

        {((address?.district?.id && !cityChanged) ||
          selectedCity?.hasDistricts) && (
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
            Dəyişiklik et
          </Button>
        </Form.Item>
      </Form>
    </CustomModal>
  )
}
