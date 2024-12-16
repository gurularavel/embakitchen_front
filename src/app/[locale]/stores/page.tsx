import { Stores } from '~ek/components'
import { getCitiesWithStores, getStores } from '~ek/services'
import type { StoresProps } from '~ek/types'
import { transformToUiData } from '~ek/utils'

export default async function StoresPage({
  params: { locale },
}: Readonly<PageProps>): Promise<React.ReactElement> {
  const stores = await getStores()
  const citiesWithStores = await getCitiesWithStores()

  const storesProps: StoresProps = {
    stores: transformToUiData(stores, locale) as StoresProps['stores'],
    cities: transformToUiData(
      citiesWithStores,
      locale,
    ) as StoresProps['cities'],
  }

  return <Stores {...storesProps} />
}
