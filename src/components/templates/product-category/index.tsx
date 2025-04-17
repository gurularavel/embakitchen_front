'use client'

import Image from 'next/image'
import { useParams } from 'next/navigation'
import { Banner, NavLink, Pagination } from '~ek/components'
import type { ProductCategoryProps } from '~ek/types'

const productCategoryStyles: Readonly<TwClasses> = {
  container: 'mb-6 laptop:mb-15',
  products:
    'flex flex-col tablet:grid tablet:grid-cols-2 laptop:grid-cols-3 widescreen:grid-cols-4 gap-y-6 tablet:gap-6 laptop:gap-y-10 px-4 tablet:px-10 laptop:px-15 widescreen:px-25 mb-6 laptop:mb-10',
  top: 'relative h-[17rem]',
  img: 'w-full h-full object-cover',
  tag: 'absolute top-0 right-0 bg-primary-9 px-6 h-12 flex items-center justify-center text-base font-medium text-primary-1',
  bottom: 'pt-3',
  title: 'text-xl leading-7 font-semibold text-gray-1',
}
const styles = productCategoryStyles as Readonly<StyleRecord>

export function ProductCategory({
  title,
  bannerImage,
  products: { data, pagination },
}: Readonly<ProductCategoryProps>): React.ReactElement {
  const { category } = useParams()
  const decodedCategory = decodeURIComponent(category as string)
  return (
    <div className={styles.container}>
      <Banner
        title={title ?? ''}
        image={bannerImage ?? ''}
      />

      <div className={styles.products}>
        {data?.map(
          (product: ArrayElement<ProductCategoryProps['products']['data']>) => (
            <div key={product.id}>
              <NavLink href={`/products/${decodedCategory}/${product.slug}`}>
                <div className={styles.top}>
                  <Image
                    src={product.mainImage.original_url}
                    alt={`Embakitchen - ${product.title}`}
                    className={styles.img}
                    fill
                  />
                  {product?.tags?.length &&
                    product?.tags?.map(tag => (
                      <span
                        key={tag.id}
                        className={styles.tag}
                      >
                        {tag.title}
                      </span>
                    ))}
                </div>
                <div className={styles.bottom}>
                  <h5 className={styles.title}>{product.title}</h5>
                </div>
              </NavLink>
            </div>
          ),
        )}
      </div>
      <Pagination total={pagination?.total} />
    </div>
  )
}
