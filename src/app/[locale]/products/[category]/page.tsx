import { ProductCategory } from '~ek/components'
import type { ProductCategoryProps, ProductEntry } from '~ek/types'

const products: ProductEntry[] = Array(12)
  .fill(null)
  .map(() => ({
    title: 'Adel Ral',
    image: 'https://embakitchen.kvadrat.az/storage/156/0L1A5736.JPG',
  }))

export default function ProductCategoryPage({
  params: { locale, category },
}: Readonly<PageProps>): React.ReactElement {
  const decodedCategory = decodeURIComponent(category!)
  const productCategoryProps: ProductCategoryProps = {
    banner: {
      title: `${decodedCategory} mebelləri`,
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
    products,
  }

  return <ProductCategory {...productCategoryProps} />
}
