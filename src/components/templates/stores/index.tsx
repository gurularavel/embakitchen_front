'use client'

import * as React from 'react'
import SimpleBar from 'simplebar-react'
import { ActionLink, Icon, Map } from '~ek/components'
import { useLocale, useTranslations } from 'next-intl'
import type { Language, StoresProps } from '~ek/types'
import { getStores } from '~ek/services'
import { transformToUiData } from '~ek/utils'

const storesStyles: Readonly<TwClasses> = {
  wrapper: 'relative mb-10 tablet:mb-15 laptop:mb-25 mt-6 laptop:mt-10',
  storesWrapper:
    'h-[680px] w-full tablet:w-[424px] widescreen:w-[512px] p-6 bg-white flex flex-col gap-y-6 tablet:absolute tablet:z-10 tablet:top-6 tablet:bottom-6 tablet:left-15 widescreen:left-25',
  title: 'text-2xl leading-9 text-gray-1 font-semibold',
  citiesWrapper: '',
  cities:
    'block w-full h-11 rounded-lg border border-solid border-gray-8 px-3.5',
  stores:
    'h-full overflow-y-auto [&_.simplebar-scrollbar::before]:bg-gray-400 [&_.simplebar-scrollbar::before]:opacity-100 [&_.simplebar-scrollbar::before]:w-3 [&_.simplebar-track.simplebar-vertical]:bg-gray-9 [&_.simplebar-track.simplebar-vertical]:w-[15px] [&_.simplebar-track.simplebar-vertical]:rounded-[4x]',
  store: 'p-6 border border-solid border-gray-9',
  storeTitle: 'mb-4 text-xl leading-6 text-primary-1 font-semibold',
  storeInfoWrapper: 'flex items-center gap-x-2 mb-6 last:mb-0',
  storeIcon: 'w-6 h-6',
  storeInfo: 'text-sm text-gray-1 font-normal break-all',
}
const styles = storesStyles as Readonly<StyleRecord>

export function Stores({
  stores,
  cities,
}: Readonly<StoresProps>): React.ReactElement {
  const t = useTranslations('titles')
  const locale = useLocale()
  const [storesToRender, setStoresToRender] =
    React.useState<StoresProps['stores']>(stores)

  async function handleCitySelection(e: React.ChangeEvent<HTMLSelectElement>) {
    const cityId = +e.target.value
    const filteredStores = await getStores({ cityId })
    const uiData = transformToUiData(
      filteredStores,
      locale as Language,
    ) as StoresProps['stores']
    setStoresToRender(uiData)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.storesWrapper}>
        <h1 className={styles.title}>{t('stores')}</h1>
        <div className={styles.citiesWrapper}>
          <select
            className={styles.cities}
            onChange={handleCitySelection}
          >
            {cities.map((city: ArrayElement<StoresProps['cities']>) => (
              <option
                value={city.id}
                key={city.id}
              >
                {city.title}
              </option>
            ))}
          </select>
        </div>

        <SimpleBar className={styles.stores}>
          {storesToRender.map((store: ArrayElement<StoresProps['stores']>) => (
            <div
              className={styles.store}
              key={store.id}
            >
              <h5 className={styles.storeTitle}>{store.title}</h5>
              <div className={styles.storeInfoWrapper}>
                <ActionLink
                  href={`tel:${store.phone}`}
                  actionLinkIcon={{
                    variant: 'store-phone',
                    sizes: styles.storeIcon,
                  }}
                  label={store.phone}
                  classes={styles.storeInfo}
                  gap={8}
                />
              </div>
              <div className={styles.storeInfoWrapper}>
                <Icon
                  variant='clock'
                  sizes={styles.storeIcon}
                />
                <span className={styles.storeInfo}>
                  {store.schedule.open} - {store.schedule.close}
                </span>
              </div>
              <div className={styles.storeInfoWrapper}>
                <Icon
                  variant='location'
                  sizes={styles.storeIcon}
                />
                <span className={styles.storeInfo}>{store.address}</span>
              </div>
              <div className={styles.storeInfoWrapper}>
                <ActionLink
                  href={`mailto:${store.email}`}
                  label={store.email}
                  actionLinkIcon={{ variant: 'email', sizes: styles.storeIcon }}
                  classes={styles.storeInfo}
                  gap={8}
                />
              </div>
            </div>
          ))}
        </SimpleBar>
      </div>

      <Map stores={stores} />
    </div>
  )
}
