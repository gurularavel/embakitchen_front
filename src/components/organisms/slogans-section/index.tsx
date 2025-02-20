'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Button } from '~ek/components'
import { useOrderForm } from '~ek/hooks'
import { MediaFile } from '~ek/types'

interface SlogansSectionProps {
  title: string
  content: string
  backgroundImg: MediaFile
}

const slogansSectionStyles: Readonly<TwClasses> = {
  slogansSection:
    'bg-gray-1 h-[360px] laptop:h-[440px] flex items-center justify-center mb-6 laptop:mb-25 relative',
  backgroundWrapper: 'relative top-0 right-0 bottom-0 left-0 size-full',
  backgroundImg: 'bg-cover',
  slogansContent: 'max-w-72 laptop:max-w-4xl absolute',
  s1: 'text-base laptop:text-xl leading-6 laptop:leading-7 font-medium text-primary-5 text-center uppercase mb-6',
  s2: 'text-2xl laptop:text-4xl leading-8 laptop:leading-14 font-semibold text-white text-center mb-10',
  buttonWrapper: 'flex justify-center',
  specialOrderButton:
    'w-full mobile:w-72 laptop:w-auto laptop:px-10 h-14 bg-primary-2 rounded-md text-base leading-6 font-semibold text-tertiary-11',
}
const styles = slogansSectionStyles as Readonly<StyleRecord>

export function SlogansSection({
  title,
  content,
  backgroundImg,
}: Readonly<SlogansSectionProps>): React.ReactElement {
  const t = useTranslations('buttons')
  const { openOrderForm } = useOrderForm()

  return (
    <section className={styles.slogansSection}>
      <div className={styles.backgroundWrapper}>
        <Image
          fill
          src={backgroundImg.original_url}
          alt='Embakitchen slogans section background'
          className={styles.backgroundImg}
        />
      </div>

      <div className={styles.slogansContent}>
        <h4 className={styles.s1}>{title}</h4>
        <h4 className={styles.s2}>{content}</h4>
        <div className={styles.buttonWrapper}>
          <Button
            classes={styles.specialOrderButton}
            onClick={() => openOrderForm(null)}
          >
            {t('createCustomOrder')}
          </Button>
        </div>
      </div>
    </section>
  )
}
