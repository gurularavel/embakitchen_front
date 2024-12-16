'use client'

import Image from 'next/image'
import { useParams } from 'next/navigation'
import { Banner, NavLink, Pagination } from '~ek/components'
import type { CategoryEntry, ProductCategoryProps } from '~ek/types'

const productCategoryStyles: Readonly<TwClasses> = {
  products:
    'flex flex-col tablet:grid tablet:grid-cols-2 laptop:grid-cols-3 widescreen:grid-cols-4 gap-y-6 tablet:gap-6 laptop:gap-y-10 px-4 tablet:px-10 laptop:px-15 widescreen:px-25 mb-6 laptop:mb-10',
  top: 'relative h-60',
  img: 'w-full h-full object-cover',
  tag: 'absolute top-0 right-0 bg-primary-9 px-6 h-12 flex items-center justify-center text-base font-medium text-primary-1',
  bottom: 'pt-3',
  title: 'text-xl leading-7 font-semibold text-gray-1',
}
const styles = productCategoryStyles as Readonly<StyleRecord>

export function ProductCategory({
  title,
  products,
}: Readonly<ProductCategoryProps>): React.ReactElement {
  const { category } = useParams()
  const decodedCategory = decodeURIComponent(category as string)

  return (
    <>
      {/* <Banner
        title={title ?? ''}
        image={image ?? ''}
      /> */}

      <div className={styles.products}>
        {products?.map(
          (product: ArrayElement<ProductCategoryProps['products']>) => (
            <div key={product.id}>
              <NavLink href={`/products/${decodedCategory}/${product.slug}`}>
                <div className={styles.top}>
                  <Image
                    src={product.bannerImage.original_url}
                    alt={`Embakitchen - ${product.title}`}
                    className={styles.img}
                    fill
                  />
                  <span className={styles.tag}>Ən çox satılan</span>
                </div>
                <div className={styles.bottom}>
                  <h5 className={styles.title}>{product.title}</h5>
                </div>
              </NavLink>
            </div>
          ),
        )}
      </div>

      {/* <Pagination totalPages={5} />  */}
    </>
  )
}
