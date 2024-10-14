import type { Metadata } from 'next'
import { Home } from '~ek/components'

export const metadata: Metadata = {
  title: 'Embakitchen Ana Səhifə',
}

export default function HomePage(): React.ReactElement {
  return <Home />
}
