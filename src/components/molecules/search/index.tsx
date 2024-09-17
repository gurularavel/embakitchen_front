'use client'

import * as React from 'react'
import { Button, Icon } from '~ek/components'

const searchStyles: Readonly<TwClasses> = {}
const styles = searchStyles as Readonly<StyleRecord>

export function Search(): React.ReactElement {
  const [isVisible, setIsVisible] = React.useState<boolean>(false)

  const handleSearchVisibility = (shouldBeVisible: boolean): void =>
    setIsVisible(shouldBeVisible)

  return (
    <div className={styles.search}>
      <Button>
        <Icon
          variant='search-1'
          sizes='w-6 h-6'
        />
      </Button>
    </div>
  )
}

// import { Input } from '~ek/components'
// import { useInputFocus } from '~ek/hooks'

// const searchStyles: Readonly<TailwindStyle> = {
//   search: 'w-6 h-full',
//   searchTogglerBtn: 'w-full h-full flex items-center',
//   searchTogglerIcon: 'w-full h-6',
//   searchContainer: (isSearchVisible: unknown) =>
//     `h-11 bg-[rgba(255,255,255,0.2)] px-3.5 shadow-sm shadow-auxiliary-1/5 flex items-center gap-x-2 absolute left-0 right-0 border border-solid border-gray-4 rounded-lg transition-all duration-300 ${(isSearchVisible as boolean) ? 'top-14 translate-y-0 opacity-100' : '-top-full -translate-y-full opacity-0'}`,
//   searchBarIcon: 'w-6 h-6',
//   input:
//     'w-full h-full text-sm placeholder:text-sm font-normal placeholder:font-normal text-gray-10 placeholder:text-gray-10 ',
// }
// const styles: Readonly<StyleRecord> = searchStyles as StyleRecord
// const getSearchContainerStyles: StyleGetter =
//   searchStyles.searchContainer as StyleGetter

// export function Search(): ReactComponent {
//   const searchInputRef = useInputFocus({
//     isInputVisible: isSearchVisible,
//     options: {
//       clearValue: true,
//     },
//   })

//     <div className={styles.search}>
//       <Button
//         classes={styles.searchTogglerBtn}
//         onClick={() => searchVisibilityHandler(!isSearchVisible)}
//       >
//         <Icon
//           variant='search-1'
//           classes={styles.searchTogglerIcon}
//         />
//       </Button>

//       <div className={getSearchContainerStyles(isSearchVisible)}>
//         <Icon
//           variant='search-2'
//           classes={styles.searchBarIcon}
//         />
//         <Input
//           type='search'
//           placeholder='Axtar'
//           classes={styles.input}
//           ref={searchInputRef}
//         />
//       </div>
//     </div>
