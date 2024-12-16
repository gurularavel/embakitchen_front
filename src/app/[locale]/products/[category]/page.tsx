import { ProductCategory } from '~ek/components'
import { getCategoryDetails } from '~ek/services'
import type {
  CategoryEntry,
  CategoryResponse,
  ProductCategoryProps,
} from '~ek/types'
import { omit, transformToUiData } from '~ek/utils'

export default async function ProductCategoryPage({
  params: { locale, category },
}: Readonly<PageProps>): Promise<React.ReactElement> {
  const decodedCategory = decodeURIComponent(category!)
  const categoryData: CategoryEntry = await getCategoryDetails(decodedCategory!)

  const productCategoryProps = {
    ...(transformToUiData(
      {
        title: `${decodedCategory} mebelləri`,
        image: {
          name: '0L1A5736',
          file_name: '0L1A5736.JPG',
          uuid: '91929660-d21d-45f4-bf57-ba4843d608c8',
          preview_url: '',
          original_url:
            'https://embakitchen.kvadrat.az/storage/156/0L1A5736.JPG',
          order: 1,
          custom_properties: [],
          extension: 'JPG',
          size: 7043050,
        },
      },
      locale,
    ) as Omit<ProductCategoryProps, 'products'>),
    products: transformToUiData(
      categoryData.products.map(
        (p: ArrayElement<CategoryResponse['products']>) =>
          omit({
            source: p as ArrayElement<CategoryResponse['products']>,
            fields: ['images'],
          }),
      ),
      locale,
    ) as ProductCategoryProps['products'],
  }

  return <ProductCategory {...productCategoryProps} />
}
