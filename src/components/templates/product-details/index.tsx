'use client'

import * as React from 'react'
import Image from 'next/image'
import { format } from 'date-fns'
import { az } from 'date-fns/locale'
import { Avatar, Tooltip, Space } from 'antd'
import { useTranslations } from 'next-intl'
import SimpleBar from 'simplebar-react'
import { Banner, Button, Icon, NavLink, Slider } from '~ek/components'
import type {
  Color,
  Comment,
  MediaFile,
  ProductDetailsProps,
  SimilarProduct,
} from '~ek/types'
import birbank from '/public/assets/images/birbank.png'
import { httpClient } from '~ek/http-client'
import { usePathname } from '~ek/i18n/routing'
import { useOrderForm } from '~ek/hooks'

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
  productColorSelector: '[&&]:h-14 relative',
  colorAvatar: 'border border-solid [&&]:border-gray-8 p-1',
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
  commentsWrapperContent:
    'flex flex-col gap-[50px] laptop:flex-row laptop:gap-10',
  comments:
    'max-h-[433px] w-full overflow-y-auto laptop:max-h-[433px] [&_.simplebar-scrollbar::before]:bg-gray-400 [&_.simplebar-scrollbar::before]:opacity-100 [&_.simplebar-scrollbar::before]:w-3 [&_.simplebar-track.simplebar-vertical]:bg-gray-9 [&_.simplebar-track.simplebar-vertical]:w-[15px] [&_.simplebar-track.simplebar-vertical]:rounded',
  comment: 'bg-tertiary-11 flex flex-col gap-y-4 px-10 py-6 mb-6 last:mb-0',
  rateAndDate: 'flex flex-col',
  rate: 'flex gap-x-2 mb-[9px]',
  date: 'text-base font-normal text-gray-4',
  message: 'text-base font-normal text-gray-1',
  fullname: 'text-base font-medium text-gray-1',
  newComment: 'w-full max-h-[430px]',
  newCommentWrapperContent: 'laptop:w-1/2',
  newCommentInput:
    'w-full h-32 max-h-[300px] laptop:max-h-[88%] border border-solid border-gray-8 rounded focus:outline-none px-4 py-3',
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

const renderRating = (rate: number) =>
  Array(5)
    .fill(0)
    .map((_, i: number) => (
      <Icon
        key={i}
        variant={i < rate ? 'star-yellow' : 'star-gray'}
        sizes='w-6 h-6'
      />
    ))

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
  const newCommentInput = React.useRef<HTMLTextAreaElement>(null)
  const pathname = usePathname()
  const t = useTranslations()
  const pathnameWithoutLastSlug = pathname.split('/').slice(0, -1).join('/')
  const { openOrderForm } = useOrderForm()

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
    await httpClient.post('/comments', body)
  }

  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = event.target

    if (textarea.scrollHeight > textarea.clientHeight) {
      textarea.style.height = `${textarea.scrollHeight}px`
    }
    textarea.style.overflowY = textarea.scrollHeight > 430 ? 'scroll' : 'hidden'
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
                  {t('texts.installmentInfo')}
                </p>
              </div>
            </div>

            <div className={styles.productCharacteristics}>
              <ul className={styles.characteristicsList}>
                <li className={styles.characteristicsItem}>
                  <span className={styles.characteristicsLabel}>
                    {t('texts.style')}
                  </span>
                  <span className={styles.characteristicsValue}>{style}</span>
                </li>

                <li className={styles.characteristicsItem}>
                  <span className={styles.characteristicsLabel}>
                    {t('texts.material')}
                  </span>
                  <span className={styles.characteristicsValue}>
                    {material}
                  </span>
                </li>

                <li className={styles.characteristicsItem}>
                  <span className={styles.characteristicsLabel}>
                    {t('texts.facades')}
                  </span>
                  <span className={styles.characteristicsValue}>{facade}</span>
                </li>

                <li className={styles.characteristicsItem}>
                  <span className={styles.characteristicsLabel}>
                    {t('texts.decor')}
                  </span>
                  <span className={styles.characteristicsValue}>{decor}</span>
                </li>

                <li className={styles.characteristicsItem}>
                  <span className={styles.characteristicsLabel}>
                    {t('texts.design')}
                  </span>
                  <span className={styles.characteristicsValue}>{design}</span>
                </li>
              </ul>
            </div>

            <div
              className={styles.productColors}
              onClick={() => setIsColorSelectorVisible(!isColorSelectorVisible)}
            >
              <span className={styles.productColorLabel}>
                {t('texts.color')}
              </span>
              <Space
                wrap
                size={4}
              >
                {colors.map((color: Color<string, MediaFile>) => (
                  <Tooltip
                    title={color.title}
                    key={color.id}
                  >
                    <Avatar
                      src={color.image.original_url}
                      className={styles.colorAvatar}
                      shape='square'
                      size='default'
                    />
                  </Tooltip>
                ))}
              </Space>
            </div>

            <div className={styles.order}>
              <Button
                classes={styles.orderButton}
                onClick={() => openOrderForm(id)}
              >
                <span>{t('buttons.placeOrder')}</span>
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
        <h5 className={styles.productContentTitle}>
          {t('titles.aboutProduct')}
        </h5>

        <div
          className={styles.productContentText}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>

      <div className={styles.commentsWrapper}>
        <h5 className={styles.commentsWrapperTitle}>
          {t('titles.customerFeedback')}
        </h5>

        <div className={styles.commentsWrapperContent}>
          {!!comments?.length && (
            <SimpleBar className={styles.comments}>
              {comments?.map((comment: Comment) => (
                <div
                  className={styles.comment}
                  key={comment.id}
                >
                  <div className={styles.rateAndDate}>
                    <span className={styles.rate}>
                      {renderRating(comment.rate)}
                    </span>
                    <span className={styles.date}>
                      {format(comment.created_at, 'd MMMM yyyy', {
                        locale: az,
                      })}
                    </span>
                  </div>
                  <span className={styles.message}>{comment.message}</span>
                  <div className={styles.fullname}>
                    {comment.name} {comment.surname}
                  </div>
                </div>
              ))}
            </SimpleBar>
          )}

          <div
            className={`${styles.newComment}
              ${!!comments?.length ? styles.newCommentWrapperContent : ''}`}
          >
            <textarea
              className={styles.newCommentInput}
              ref={newCommentInput}
              onInput={handleInput}
              placeholder='Sizin mesajınız...'
            ></textarea>

            <Button
              classes={styles.newCommentBtn}
              onClick={addNewComment}
            >
              {t('buttons.send')}
            </Button>
          </div>
        </div>
      </div>

      {similar_products?.length && (
        <div className={styles.similarProductsWrapper}>
          <h4 className={styles.similarProductsTitle}>
            {t('titles.similarProducts')}
          </h4>

          <div className={styles.similarProducts}>
            {similar_products?.map(
              (similarProduct: SimilarProduct<string, MediaFile>) => (
                <NavLink
                  key={similarProduct.id}
                  href={`${pathnameWithoutLastSlug}/${similarProduct.slug}`}
                  className={styles.similarProduct}
                >
                  <div className={styles.productImageWrapper}>
                    <Image
                      src={similarProduct.bannerImage.original_url}
                      alt={`Embakitchen - ${similarProduct.title}`}
                      className={styles.productImage}
                      fill
                    />
                  </div>
                  <div>
                    <h4 className={styles.productTitle}>
                      {similarProduct.title}
                    </h4>
                  </div>
                </NavLink>
              ),
            )}
          </div>
        </div>
      )}
    </>
  )
}
