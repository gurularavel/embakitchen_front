// 'use client'

// import * as React from 'react'
// import { Icon } from '@ek/components'
// import { Language } from '@ek/types'

// interface LanguageSelectorProps {}

// const languageSelectorStyles: Readonly<TailwindStyle> = {
//   languageSelector: 'relative mobile:flex-1',
//   selectedLanguage:
//     'w-full bg-gray-3 h-11 rounded-lg flex items-center justify-center gap-x-2 text-base font-semibold leading-6 text-light-gray-10 cursor-pointer relative z-10',
//   selectedLanguageIcon: (isVisible: unknown) =>
//     `transition-transform duration-200 ${isVisible ? 'rotate-180' : 'rotate-0'}`,
//   languageDropdown: (isVisible: unknown) =>
//     `w-full absolute right-0 bottom-12 left-0 border border-solid border-light-gray-4 transition-all duration-200 origin-bottom ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`,
//   language:
//     'h-18 flex items-center justify-center text-base font-medium leading-6 text-white bg-dark-gray-1',
// }
// const styles: Readonly<StyleRecord> = languageSelectorStyles as StyleRecord
// const getSelectedLanguageIconStyles: StyleGetter =
//   languageSelectorStyles.selectedLanguageIcon as StyleGetter
// const getLanguageDropdownStyles: StyleGetter =
//   languageSelectorStyles.languageDropdown as StyleGetter

// export function LanguageSelector({}: Readonly<LanguageSelectorProps>): React.ReactElement {
//   const [selectedLanguage, setSelectedLanguage] = React.useState<Language>('Az')
//   const [isVisible, setIsVisible] = React.useState<boolean>(false)

//   const toggleLanguageSelectorVisiblity = (): void => setIsVisible(!isVisible)

//   return (
//     <div className={styles.languageSelector}>
//       <div
//         className={styles.selectedLanguage}
//         onClick={toggleLanguageSelectorVisiblity}
//       >
//         <span>{selectedLanguage}</span>
//         <Icon
//           variant='down-chevron-2'
//           classes={getSelectedLanguageIconStyles(isVisible)}
//         />
//       </div>

//       <ul className={getLanguageDropdownStyles(isVisible)}>
//         <li className={styles.language}>Az</li>
//         <li className={styles.language}>En</li>
//         <li className={styles.language}>Ru</li>
//       </ul>
//     </div>
//   )
// }
