'use client'

import * as React from 'react'
import { Button, Icon } from '~ek/components'
import { Language } from '~ek/types'

const languageSelectorStyles: Readonly<TwClasses> = {
  languageSelector: 'relative mobile:flex-1',
  selectedLanguage: 'relative z-10',
  selectedLanguageButton:
    'w-full h-11 bg-gray-3 rounded-lg flex items-center justify-center gap-x-2 text-base font-medium text-gray-10',
  selectedLanguageIcon: (isVisible: unknown) =>
    `transition-transform duration-200 ${(isVisible as boolean) ? 'rotate-180' : 'rotate-0'}`,
  languageDropdown: (isVisible: unknown) =>
    `absolute right-0 bottom-12 left-0 border border-solid border-gray-4 transition-all duration-300 origin-bottom ease-in-out ${(isVisible as boolean) ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`,
  language:
    'h-18 flex items-center justify-center text-base font-medium text-white bg-gray-1',
}
const styles = languageSelectorStyles as Readonly<StyleRecord>
const getSelectedLanguageIconStyles: StyleGetter =
  languageSelectorStyles.selectedLanguageIcon as StyleGetter
const getLanguageDropdownStyles: StyleGetter =
  languageSelectorStyles.languageDropdown as StyleGetter

export function LanguageSelector(): React.ReactElement {
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
    <div className={styles.languageSelector}>
      <div className={styles.selectedLanguage}>
        <Button
          onClick={() => handleLanguageSelectorVisibility(!isVisible)}
          classes={styles.selectedLanguageButton}
        >
          <span>{selectedLanguage}</span>
          <Icon
            variant='chevron-down'
            sizes='w-6 h-6'
            classes={getSelectedLanguageIconStyles(isVisible)}
          />
        </Button>
      </div>

      <ul className={getLanguageDropdownStyles(isVisible)}>
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
