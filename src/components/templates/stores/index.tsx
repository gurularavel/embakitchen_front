'use client'

import { type LatLngTuple } from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Icon } from '~ek/components'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'

const storesStyles: Readonly<TwClasses> = {
  wrapper: 'relative mb-10 tablet:mb-15 laptop:mb-25 mt-6 laptop:mt-10',
  stores:
    'p-6 bg-white flex flex-col gap-y-6 tablet:absolute tablet:z-10 tablet:top-6 tablet:bottom-6 tablet:left-15 widescreen:left-25',
  title: 'text-2xl leading-9 text-gray-1 font-semibold ',
  store: 'p-6 border border-solid border-gray-9',
  storeTitle: 'mb-4 text-xl leading-6 text-primary-1 font-semibold',
  storeInfoWrapper: 'flex items-center gap-x-2 mb-6 last:mb-0',
  storeIcon: 'w-6 h-6',
  storeInfo: 'text-sm text-gray-1 font-normal break-all',
  map: 'h-[728px] z-0',
}
const styles = storesStyles as Readonly<StyleRecord>

export function Stores(): React.ReactElement {
  const position: LatLngTuple = [40.4093, 49.8671]

  return (
    <div className={styles.wrapper}>
      <div className={styles.stores}>
        <h1 className={styles.title}>Mağazalar</h1>
        <div className={styles.store}>
          <h5 className={styles.storeTitle}>Embakitchen Atatürk</h5>
          <div className={styles.storeInfoWrapper}>
            <Icon
              variant='store-phone'
              sizes={styles.storeIcon}
            />
            <span className={styles.storeInfo}>055 252 83 10</span>
          </div>
          <div className={styles.storeInfoWrapper}>
            <Icon
              variant='clock'
              sizes={styles.storeIcon}
            />
            <span className={styles.storeInfo}>09:00 - 18:00</span>
          </div>
          <div className={styles.storeInfoWrapper}>
            <Icon
              variant='location'
              sizes={styles.storeIcon}
            />
            <span className={styles.storeInfo}>
              Bakı şəh., N.Nərimanov r., Atatürk pr. 37
            </span>
          </div>
          <div className={styles.storeInfoWrapper}>
            <Icon
              variant='email'
              sizes={styles.storeIcon}
            />
            <span className={styles.storeInfo}>
              dizayner.ataturk@embawood.az
            </span>
          </div>
        </div>
        <div className={styles.store}>
          <h5 className={styles.storeTitle}>Embakitchen Elmlər</h5>
          <div className={styles.storeInfoWrapper}>
            <Icon
              variant='store-phone'
              sizes={styles.storeIcon}
            />
            <span className={styles.storeInfo}>055 252 83 10</span>
          </div>
          <div className={styles.storeInfoWrapper}>
            <Icon
              variant='clock'
              sizes={styles.storeIcon}
            />
            <span className={styles.storeInfo}>09:00 - 18:00</span>
          </div>
          <div className={styles.storeInfoWrapper}>
            <Icon
              variant='location'
              sizes={styles.storeIcon}
            />
            <span className={styles.storeInfo}>
              Bakı şəh., N.Nərimanov r., Atatürk pr. 37
            </span>
          </div>
          <div className={styles.storeInfoWrapper}>
            <Icon
              variant='email'
              sizes={styles.storeIcon}
            />
            <span className={styles.storeInfo}>
              dizayner.ataturk@embawood.az
            </span>
          </div>
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
        <Marker position={position}>
          <Popup>Marker popup for detailed information.</Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
