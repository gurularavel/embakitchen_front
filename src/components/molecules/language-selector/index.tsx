'use client'

import * as React from 'react'
import { Icon } from '~ek/components'
import { Language } from '~ek/types'

interface LanguageSelectorProps {}

const languageSelectorStyles: Readonly<TailwindStyle> = {
  languageSelector: 'relative mobile:flex-1',
  selectedLanguage:
    'w-full h-11 bg-gray-3 relative z-10 rounded-lg flex items-center justify-center gap-x-2 text-base font-medium text-gray-10', // cursor-pointer
  selectedLanguageIcon: (isVisible: unknown) =>
    `transition-transform duration-200 ${(isVisible as boolean) ? 'rotate-180' : 'rotate-0'}`,
  languageDropdown: (isVisible: unknown) =>
    `absolute right-0 bottom-12 left-0 border border-solid border-gray-4 transition-transform duration-200 origin-bottom ${(isVisible as boolean) ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-12 z-0'}`,
  language:
    'h-18 flex items-center justify-center text-base font-medium text-white bg-gray-1',
}
const styles: Readonly<StyleRecord> = languageSelectorStyles as StyleRecord
const getSelectedLanguageIconStyles: StyleGetter =
  languageSelectorStyles.selectedLanguageIcon as StyleGetter
const getLanguageDropdownStyles: StyleGetter =
  languageSelectorStyles.languageDropdown as StyleGetter

export function LanguageSelector({}: Readonly<LanguageSelectorProps>): ReactComponent {
  const [selectedLanguage, setSelectedLanguage] = React.useState<Language>(
    Language.Az,
  )
  const [isVisible, setIsVisible] = React.useState<boolean>(false)

  const languageSelectorVisibilityHandler = (): void => setIsVisible(!isVisible)

  const selectLanguage = (language: Language): void => {
    setSelectedLanguage(language)
    languageSelectorVisibilityHandler()
  }

  return (
    <div className={styles.languageSelector}>
      <div
        className={styles.selectedLanguage}
        onClick={languageSelectorVisibilityHandler}
      >
        <span>{selectedLanguage}</span>
        <Icon
          variant='down-chevron'
          classes={getSelectedLanguageIconStyles(isVisible)}
        />
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
