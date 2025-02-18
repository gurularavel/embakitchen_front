'use client'
import { useTranslations } from 'next-intl'
import { twMerge } from 'tailwind-merge'
import {
  ActionLink,
  Button,
  Icon,
  Logo,
  Navbar,
  SocialContacts,
} from '~ek/components'
import { useStore } from '~ek/hooks'

const footerStyles: Readonly<TwClasses> = {
  footer:
    'w-auto mobile:w-full mx-4 mobile:mx-0 px-5 mobile:px-10 laptop:px-15 widescreen:px-25 pb-6 laptop:pb-20',
  footerContent: 'flex flex-col laptop:flex-row justify-between',
  companyInfo: 'w-full laptop:max-w-[424px] mr-0 laptop:mr-6',
  footerNav:
    'flex flex-col laptop:flex-row justify-between gap-y-6 laptop:gap-x-6 desktop:gap-x-[157.33px] laptop:mr-6',
  description: 'mb-6 text-base font-medium text-tertiary-4',
  footerItem: 'mb-6 last:mb-0 laptop:mb-0',
  contactUs: '',
  contactUsItem: 'mb-6 last:mb-0 flex items-center gap-x-2',
  contactUsLabel:
    'inline-block w-14 min-w-14 text-base font-medium text-tertiary-4',
  contactUsLink: 'text-base font-medium text-tertiary-1 break-all',
  specialOrderButton:
    'w-full py-1 px-3 min-h-12 flex justify-center items-center gap-x-2 rounded-md bg-primary-9 text-base font-semibold text-primary-2',
}
const styles = footerStyles as Readonly<StyleRecord>

export function Footer(): React.ReactElement {
  const t = useTranslations()
  const {
    clientSlice: { setIsAuthFormDrawerVisible, setIsOrderFormDrawerVisible },
    orderSlice: { setSelectedProduct },
    authSlice: { user },
  } = useStore(state => state)

  const makeCustomOrder = (): void => {
    if (user) {
      setIsOrderFormDrawerVisible(true)
      setSelectedProduct(null)
    } else {
      setIsAuthFormDrawerVisible(true)
    }
  }
  return (
    <footer className={styles.footer}>
      <ul className={styles.footerContent}>
        <li className={twMerge(styles.footerItem, styles.companyInfo)}>
          <Logo
            context='footer'
            sizes='w-[132px] h-[21px]'
          />

          <h5 className={styles.description}>{t('texts.brandDescription')}</h5>

          <SocialContacts
            layout='horizontal'
            colorScheme='dark'
            gap={12}
            classes='w-6 h-6'
          />
        </li>

        <li className={styles.footerItem}>
          <Navbar
            context='footer'
            classes={styles.footerNav}
          />
        </li>

        <li className={styles.footerItem}>
          <ul className={styles.contactUs}>
            <li className={styles.contactUsItem}>
              <span className={styles.contactUsLabel}>
                {t('texts.contact')}
              </span>
              <ActionLink
                href='tel:+994552207212'
                label='+994552207212'
                classes={styles.contactUsLink}
              />
            </li>

            <li className={styles.contactUsItem}>
              <span className={styles.contactUsLabel}>
                {t('labels.email')}:
              </span>
              <ActionLink
                href='mailto:support@embakitchen.az'
                label='support@embakitchen.az'
                classes={styles.contactUsLink}
              />
            </li>

            <li className={styles.contactUsItem}>
              <Button
                classes={styles.specialOrderButton}
                onClick={makeCustomOrder}
              >
                <span>{t('buttons.createCustomOrder')}</span>
                <Icon
                  variant='chevron-right-orange'
                  sizes='w-6 h-6'
                />
              </Button>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  )
}
