'use client'

import * as React from 'react'
import Image from 'next/image'
import { format } from 'date-fns'
import { az } from 'date-fns/locale'
import { Banner, Button, Icon, Slider } from '~ek/components'
import type {
  Color,
  Comment,
  MediaFile,
  ProductDetailsProps,
  SimilarProduct,
} from '~ek/types'
import birbank from '/public/assets/images/birbank.png'
import { httpClient } from '~ek/http-client'

const productDetailsStyles: Readonly<TwClasses> = {
  productMainInfoWrapper:
    'grid grid-cols-1 laptop:grid-cols-3 gap-y-6 gap-x-7 mb-6 laptop:mb-10 px-0 laptop:px-15',
  slider: 'col-span-1 laptop:col-span-2 px-0 tablet:px-10 laptop:px-0',
  productInfoWrapper: 'flex flex-col laptop:flex-row gap-y-6 gap-x-7',
  line: 'h-px laptop:h-full w-full tablet:w-[calc(100%-theme(width.20))] laptop:w-1 bg-primary-7 mx-auto',
  productInfo: 'px-4 tablet:px-10 laptop:px-0 flex flex-col gap-y-6',
  paymentInfo:
    'flex items-center gap-x-6 border border-solid border-primary-7 px-6 py-[18px]',
  birbank: 'w-[50px] h-[80px]',
  paymentPerMonth:
    'inline-block mb-[6px] text-xl leading-7 font-semibold text-gray-1',
  paymentInfoText: 'text-base font-normal text-gray-5',
  characteristicsList: 'flex flex-col gap-y-6',
  characteristicsItem: 'flex gap-x-3',
  characteristicsLabel: 'flex-none w-[70px] text-base font-normal text-gray-3',
  characteristicsValue: 'flex-1 text-base font-medium text-gray-1',
  productColors: 'flex flex-col gap-y-1',
  productColorLabel: 'text-xs font-medium text-gray-7',
  productColorSelector:
    'h-14 border border-solid border-gray-8 rounded relative',
  selectedColor: 'h-full flex items-center px-4',
  colorsWrapper: (isColorSelectorVisible: unknown) =>
    `h-[336px] overflow-y-auto bg-white absolute top-14 -right-px -left-px ${(isColorSelectorVisible as boolean) ? 'block drop-shadow-md' : 'hidden'}`,
  color:
    'h-14 flex items-center gap-x-2.5 px-4 cursor-pointer hover:bg-primary-9 hover:text-primary-1',
  colorTitle: '',
  order: '',
  orderButton:
    'w-full h-14 flex items-center justify-center gap-x-2 bg-primary-1 rounded-md text-base font-semibold text-white',
  orderButtonIcon: '',
  productContent:
    'px-4 tablet:px-10 laptop:px-15 widescreen:px-25 mb-6 laptop:mb-10',
  productContentTitle:
    'mb-6 text-2xl laptop:text-3xl laptop:leading-12 font-semibold text-gray-1',
  productContentText: 'text-base leading-[28px] font-normal text-gray-3',
  commentsWrapper:
    'px-4 tablet:px-10 laptop:px-15 widescreen:px-25 mb-6 laptop:mb-10',
  commentsWrapperTitle:
    'h-[58px] relative mb-10 text-3xl laptop:text-[36px] leading-10 laptop:leading-[44px] font-semibold text-tertiary-1 after:content-[""] after:inline-block after:h-[2px] after:w-20 after:bg-tertiary-2 after:absolute after:left-0 after:bottom-0',
  comments: 'max-h-[433px] overflow-y-auto',
  comment: 'bg-tertiary-11 flex flex-col gap-y-4 px-10 py-6 mb-6 last:mb-0',
  rateAndDate: 'flex flex-col',
  rate: 'flex gap-x-2 mb-[9px]',
  date: 'text-base font-normal text-gray-4',
  message: 'text-base font-normal text-gray-1',
  fullname: 'text-base font-medium text-gray-1',
  newComment: '',
  newCommentInput:
    'w-full h-25 mt-2 border border-solid border-gray-8 rounded focus:outline-none px-4 py-3',
  newCommentBtn:
    'bg-primary-1 text-white flex w-full h-10 items-center justify-center rounded',
  similarProductsWrapper: 'px-4 tablet:px-10 laptop:px-15 widescreen:px-25',
  similarProductsTitle:
    'h-[58px] relative mb-10 text-3xl laptop:text-[36px] leading-10 laptop:leading-[44px] font-semibold text-tertiary-1 after:content-[""] after:inline-block after:h-[2px] after:w-20 after:bg-tertiary-2 after:absolute after:left-0 after:bottom-0',
  similarProducts:
    'grid grid-cols-1 laptop:grid-cols-3 widescreen:grid-cols-4 gap-6 mb-6 laptop:mb-15',
  similarProduct: '',
  productImageWrapper: 'w-full h-[290px] relative mb-8',
  productImage: 'w-full h-full object-cover',
  productTitle: 'text-xl leading-7 font-medium text-tertiary-1 mb-4',
}
const styles = productDetailsStyles as Readonly<StyleRecord>
const getColorsWrapperStyles = productDetailsStyles.colorsWrapper as StyleGetter

export function ProductDetails({
  id,
  bannerImage,
  title,
  style,
  material,
  facade,
  decor,
  design,
  colors,
  content,
  comments,
  similar_products,
}: Readonly<ProductDetailsProps>): React.ReactElement {
  const [isColorSelectorVisible, setIsColorSelectorVisible] =
    React.useState<boolean>(false)
  const [selectedColor, setSelectedColor] = React.useState<string>(
    colors[0].title,
  )
  const newCommentInput = React.useRef<HTMLTextAreaElement>(null)

  const addNewComment = async (): Promise<void> => {
    const message = newCommentInput.current?.value
    const body = {
      name: 'Test',
      surname: 'Test',
      email: 'test@gmail.com',
      product_id: id,
      rate: 5,
      message,
    }
    const response = await httpClient.post('/comments', body)
  }

  return (
    <>
      <Banner
        title={title ?? ''}
        image={bannerImage ?? ''}
      />

      <div className={styles.productMainInfoWrapper}>
        <div className={styles.slider}>
          <Slider variant='product' />
        </div>

        <div className={styles.productInfoWrapper}>
          <div className={styles.line}></div>

          <div className={styles.productInfo}>
            <div className={styles.paymentInfo}>
              <Image
                src={birbank}
                alt='birbank installment card'
                className={styles.birbank}
              />
              <div>
                <strong className={styles.paymentPerMonth}>
                  50 AZN x 18 ay
                </strong>
                <p className={styles.paymentInfoText}>
                  Birbank kartı ilə 18 aya faizsiz ödə
                </p>
              </div>
            </div>

            <div className={styles.productCharacteristics}>
              <ul className={styles.characteristicsList}>
                <li className={styles.characteristicsItem}>
                  <span className={styles.characteristicsLabel}>Stil</span>
                  <span className={styles.characteristicsValue}>{style}</span>
                </li>

                <li className={styles.characteristicsItem}>
                  <span className={styles.characteristicsLabel}>Material</span>
                  <span className={styles.characteristicsValue}>
                    {material}
                  </span>
                </li>

                <li className={styles.characteristicsItem}>
                  <span className={styles.characteristicsLabel}>Fasadlar</span>
                  <span className={styles.characteristicsValue}>{facade}</span>
                </li>

                <li className={styles.characteristicsItem}>
                  <span className={styles.characteristicsLabel}>Dekor</span>
                  <span className={styles.characteristicsValue}>{decor}</span>
                </li>

                <li className={styles.characteristicsItem}>
                  <span className={styles.characteristicsLabel}>Dizayn</span>
                  <span className={styles.characteristicsValue}>{design}</span>
                </li>
              </ul>
            </div>

            <div
              className={styles.productColors}
              onClick={() => setIsColorSelectorVisible(!isColorSelectorVisible)}
            >
              <span className={styles.productColorLabel}>Rəng</span>
              <div className={styles.productColorSelector}>
                <div className={styles.selectedColor}>{selectedColor}</div>
                <div className={getColorsWrapperStyles(isColorSelectorVisible)}>
                  {colors.map((color: Color<string>) => (
                    <div
                      key={color.id}
                      className={styles.color}
                      onClick={() => setSelectedColor(color.title)}
                    >
                      <Image
                        src={
                          (color.image as unknown as { original_url: string })
                            .original_url
                        }
                        alt={color.title}
                        width={22}
                        height={22}
                      />
                      <span className={styles.colorTitle}>{color.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.order}>
              <Button classes={styles.orderButton}>
                <span>Sifariş ver</span>
                <Icon
                  variant='arrow-right-white'
                  sizes={styles.orderButtonIcon}
                />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.productContent}>
        <h5 className={styles.productContentTitle}>Məhsul haqqında</h5>

        <div
          className={styles.productContentText}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>

      <div className={styles.commentsWrapper}>
        <h5 className={styles.commentsWrapperTitle}>Sifarişçi rəyi</h5>

        <div className={styles.comments}>
          {comments?.map((comment: Comment) => (
            <div
              className={styles.comment}
              key={comment.id}
            >
              <div className={styles.rateAndDate}>
                <span className={styles.rate}>
                  {Array(5)
                    .fill(0)
                    .map((_, i: number) => (
                      <Icon
                        key={i}
                        variant={i < comment.rate ? 'star-yellow' : 'star-gray'}
                        sizes='w-6 h-6'
                      />
                    ))}
                </span>
                <span className={styles.date}>
                  {format(comment.created_at, 'd MMMM yyyy', { locale: az })}
                </span>
              </div>
              <span className={styles.message}>{comment.message}</span>
              <div className={styles.fullname}>
                {comment.name} {comment.surname}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.newComment}>
          <textarea
            className={styles.newCommentInput}
            ref={newCommentInput}
          ></textarea>

          <Button
            classes={styles.newCommentBtn}
            onClick={addNewComment}
          >
            Göndər
          </Button>
        </div>
      </div>

      <div className={styles.similarProductsWrapper}>
        {similar_products && (
          <h4 className={styles.similarProductsTitle}>Oxşar məhsullar</h4>
        )}

        <div className={styles.similarProducts}>
          {similar_products?.map((similarProduct: SimilarProduct<string>) => (
            <div
              key={similarProduct.id}
              className={styles.similarProduct}
            >
              <div className={styles.productImageWrapper}>
                <Image
                  src={
                    (similarProduct.bannerImage as unknown as MediaFile)
                      .original_url
                  }
                  alt={`Embakitchen - ${similarProduct.title}`}
                  className={styles.productImage}
                  fill
                />
              </div>
              <div>
                <h4 className={styles.productTitle}>{similarProduct.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
