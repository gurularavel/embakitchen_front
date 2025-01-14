'use client'

import * as React from 'react'
import { twMerge } from 'tailwind-merge'
import { useLocale } from 'next-intl'
import { Link, usePathname } from '~ek/i18n/routing'
import { Button, Icon } from '~ek/components'
import { Language } from '~ek/types'
import { updatePrimitiveState } from '~ek/utils'

type LanguageSelectorContext = 'sidebar' | 'header'

interface LanguageSelectorProps {
  context: LanguageSelectorContext
  classes?: string
  dropdownClasses?: string
}

const languageSelectorStyles: Readonly<TwClasses> = {
  languageSelector: (context: unknown) =>
    `relative mobile:flex-1 ${(context as LanguageSelectorContext) === 'header' ? 'h-full flex items-center' : ''}`,
  selectedLanguage: 'relative z-10',
  selectedLanguageButton:
    'w-full h-11 bg-gray-3 rounded-lg flex items-center justify-center gap-x-2 text-base font-medium text-gray-10 capitalize',
  selectedLanguageIcon: (isVisible: unknown) =>
    `transition-transform duration-200 ${(isVisible as boolean) ? 'rotate-180' : 'rotate-0'}`,
  languageDropdown: (isVisible: unknown) =>
    `absolute right-0 left-0 z-20 transition-all duration-300 origin-bottom ease-in-out ${(isVisible as boolean) ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`,
  language:
    'h-18 text-base font-medium text-white bg-gray-1 hover:bg-gray-2 cursor-pointer capitalize',
  languageOption: 'w-full h-full flex items-center justify-center',
}
const styles = languageSelectorStyles as Readonly<StyleRecord>
const getLanguageSelectorStyles =
  languageSelectorStyles.languageSelector as StyleGetter
const getSelectedLanguageIconStyles: StyleGetter =
  languageSelectorStyles.selectedLanguageIcon as StyleGetter
const getLanguageDropdownStyles: StyleGetter =
  languageSelectorStyles.languageDropdown as StyleGetter

export function LanguageSelector({
  context,
  classes,
  dropdownClasses,
}: Readonly<LanguageSelectorProps>): React.ReactElement {
  const locale = useLocale()
  const pathname: string = usePathname()
  const [isVisible, setIsVisible] = React.useState<boolean>(false)

  return (
    <div className={getLanguageSelectorStyles(context)}>
      <div className={styles.selectedLanguage}>
        <Button
          onClick={() => updatePrimitiveState(!isVisible, setIsVisible)}
          classes={twMerge(styles.selectedLanguageButton, classes ?? '')}
        >
          <span>{locale}</span>
          <Icon
            variant='chevron-down'
            sizes='w-6 h-6'
            classes={getSelectedLanguageIconStyles(isVisible)}
          />
        </Button>
      </div>

      <ul
        className={twMerge(
          getLanguageDropdownStyles(isVisible),
          dropdownClasses ?? '',
        )}
      >
        {Object.values(Language).map(value => (
          <li
            key={value}
            className={styles.language}
            onClick={() => updatePrimitiveState(false, setIsVisible)}
          >
            <Link
              href={pathname}
              locale={value}
              className={styles.languageOption}
            >
              {value}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
