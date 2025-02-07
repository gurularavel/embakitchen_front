import dynamic from 'next/dynamic'

const Map = dynamic(
  () =>
    import('~ek/components/organisms/map/leaflet-map').then(
      module => module.LeafletMap,
    ),
  {
    ssr: false,
  },
)

export default Map
