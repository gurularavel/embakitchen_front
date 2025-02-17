'use client'

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import type { LatLngTuple } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'
import type { StoresProps } from '~ek/types'

interface LeafletMapProps {
  stores: StoresProps['stores']
}

interface Position {
  title: string
  coords: LatLngTuple
}

const mapStyles: Readonly<TwClasses> = {
  map: 'h-[728px] z-0',
}
const styles = mapStyles as Readonly<StyleRecord>

export function LeafletMap({
  stores,
}: Readonly<LeafletMapProps>): React.ReactElement {
  const position: LatLngTuple = [40.38489374280334, 49.824969832271016]
  const positions: Position[] = Object.values(stores).map(
    (store: ArrayElement<StoresProps['stores']>) => ({
      title: store.title,
      coords: [store.coords.latitude, store.coords.longitude].map(
        Number.parseFloat,
      ) as LatLngTuple,
    }),
  )

  return (
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
  )
}
