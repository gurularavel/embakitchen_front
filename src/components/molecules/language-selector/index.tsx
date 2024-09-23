'use client'

import * as React from 'react'
import { twMerge } from 'tailwind-merge'
import { Button, Icon } from '~ek/components'
import { Language } from '~ek/types'

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
    'w-full h-11 bg-gray-3 rounded-lg flex items-center justify-center gap-x-2 text-base font-medium text-gray-10',
  selectedLanguageIcon: (isVisible: unknown) =>
    `transition-transform duration-200 ${(isVisible as boolean) ? 'rotate-180' : 'rotate-0'}`,
  languageDropdown: (isVisible: unknown) =>
    `absolute right-0 left-0 transition-all duration-300 origin-bottom ease-in-out ${(isVisible as boolean) ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`,
  language:
    'h-18 flex items-center justify-center text-base font-medium text-white bg-gray-1 hover:bg-gray-2 cursor-pointer',
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
  const [selectedLanguage, setSelectedLanguage] = React.useState<Language>(
    Language.Az,
  )
  const [isVisible, setIsVisible] = React.useState<boolean>(false)

  const handleLanguageSelectorVisibility = (shouldBeVisible: boolean): void =>
    setIsVisible(shouldBeVisible)

  const selectLanguage = (language: Language): void => {
    setSelectedLanguage(language)
    handleLanguageSelectorVisibility(false)
  }

  return (
    <div className={getLanguageSelectorStyles(context)}>
      <div className={styles.selectedLanguage}>
        <Button
          onClick={() => handleLanguageSelectorVisibility(!isVisible)}
          classes={twMerge(styles.selectedLanguageButton, classes ?? '')}
        >
          <span>{selectedLanguage}</span>
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
            onClick={() => selectLanguage(value)}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  )
}
