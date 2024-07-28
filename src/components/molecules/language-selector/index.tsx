import * as React from 'react'
import { Icon } from '@ek/components'

interface LanguageSelectorProps {}

const languageSelectorStyles: Readonly<TailwindStyle> = {
  languageSelector: '',
  selectedLanguage:
    'w-full bg-gray-3 h-11 rounded-lg flex items-center justify-center gap-x-2 text-base font-semibold leading-6 text-light-gray-10 cursor-pointer',
}
const styles: Readonly<StyleRecord> = languageSelectorStyles as StyleRecord

export function LanguageSelector({}: Readonly<LanguageSelectorProps>): React.ReactElement {
  return (
    <div className={styles.languageSelector}>
      <div className={styles.selectedLanguage}>
        <span>Az</span>
        <Icon variant='down-chevron-2' />
      </div>
    </div>
  )
}
