import { ProductDetails } from '~ek/components'
import type { ProductDetailsProps } from '~ek/types'

export default function ProductDetailsPage({
  params: { locale, category, slug },
}: PageProps): React.ReactElement {
  const decodedSlug = decodeURIComponent(slug!)

  const productDetailsProps: ProductDetailsProps = {
    banner: {
      title: decodedSlug.split('-').join(' '),
      image: {
        name: '0L1A5736',
        file_name: '0L1A5736.JPG',
        uuid: '91929660-d21d-45f4-bf57-ba4843d608c8',
        preview_url: '',
        original_url: 'https://embakitchen.kvadrat.az/storage/156/0L1A5736.JPG',
        order: 1,
        custom_properties: [],
        extension: 'JPG',
        size: 7043050,
      },
    },
  }

  return <ProductDetails {...productDetailsProps} />
}
