'use client'

import * as React from 'react'
import { type LatLngTuple } from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { ActionLink, Icon } from '~ek/components'
import type { Language, StoresProps } from '~ek/types'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'
import { useLocale, useTranslations } from 'next-intl'
import { getStores } from '~ek/services'
import { transformToUiData } from '~ek/utils'

interface Position {
  title: string
  coords: LatLngTuple
}

const storesStyles: Readonly<TwClasses> = {
  wrapper: 'relative mb-10 tablet:mb-15 laptop:mb-25 mt-6 laptop:mt-10',
  storesWrapper:
    'h-[680px] w-full tablet:w-[424px] widescreen:w-[512px] p-6 bg-white flex flex-col gap-y-6 tablet:absolute tablet:z-10 tablet:top-6 tablet:bottom-6 tablet:left-15 widescreen:left-25 overflow-y-auto',
  title: 'text-2xl leading-9 text-gray-1 font-semibold',
  citiesWrapper: '',
  cities:
    'block w-full h-11 rounded-lg border border-solid border-gray-8 px-3.5',
  stores: '',
  store: 'p-6 border border-solid border-gray-9',
  storeTitle: 'mb-4 text-xl leading-6 text-primary-1 font-semibold',
  storeInfoWrapper: 'flex items-center gap-x-2 mb-6 last:mb-0',
  storeIcon: 'w-6 h-6',
  storeInfo: 'text-sm text-gray-1 font-normal break-all',
  map: 'h-[728px] z-0',
}
const styles = storesStyles as Readonly<StyleRecord>

export function Stores({
  stores,
  cities,
}: Readonly<StoresProps>): React.ReactElement {
  const t = useTranslations('titles')
  const locale = useLocale()
  const position: LatLngTuple = [40.38489374280334, 49.824969832271016]
  const positions: Position[] = Object.values(stores).map(
    (store: ArrayElement<StoresProps['stores']>) => ({
      title: store.title,
      coords: [store.coords.latitude, store.coords.longitude].map(
        Number.parseFloat,
      ) as LatLngTuple,
    }),
  )
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

        <div className={styles.stores}>
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
                <Icon
                  variant='email'
                  sizes={styles.storeIcon}
                />
                <span className={styles.storeInfo}>{store.email}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <MapContainer
        center={position}
        zoom={25}
        scrollWheelZoom={false}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {positions.map(
          ({ title, coords }: { title: string; coords: LatLngTuple }) => (
            <Marker
              position={coords}
              key={title}
            >
              <Popup>{title}</Popup>
            </Marker>
          ),
        )}
      </MapContainer>
    </div>
  )
}
