'use client'

import * as React from 'react'
import { Button, Icon, Input } from '~ek/components'
import { useInputFocus } from '~ek/hooks'

interface SearchProps {}

const searchStyles: Readonly<TailwindStyle> = {
  searchContainer: (isSearchVisible: unknown) =>
    `h-11 bg-[rgba(255,255,255,0.2)] shadow-sm shadow-auxiliary-1/5 px-3.5 flex items-center gap-x-2 border border-solid border-gray-4 rounded-lg absolute left-0 right-0 transition-all duration-300 ${(isSearchVisible as boolean) ? 'top-14 translate-y-0 opacity-100' : '-top-full -translate-y-full opacity-0'}`,
  searchTogglerBtn: 'flex items-center',
  searchTogglerIcon: 'w-6 h-6',
  icon: 'w-6 h-6',
  input:
    'placeholder:text-gray-10 placeholder:font-normal placeholder:text-sm text-gray-10 font-normal text-sm w-full',
}
const styles: Readonly<StyleRecord> = searchStyles as StyleRecord
const getSearchContainerStyles: StyleGetter =
  searchStyles.searchContainer as StyleGetter

export function Search({}: Readonly<SearchProps>): ReactComponent {
  const [isSearchVisible, setIsSearchVisible] = React.useState<boolean>(false)
  const searchInputRef = useInputFocus({
    isInputVisible: isSearchVisible,
    options: {
      clearValue: true,
    },
  })

  const searchVisibilityHandler = (shouldBeVisible: boolean): void =>
    setIsSearchVisible(shouldBeVisible)

  return (
    <>
      <Button
        classes={styles.searchTogglerBtn}
        onClick={() => searchVisibilityHandler(!isSearchVisible)}
      >
        <Icon
          variant='search-1'
          classes={styles.searchTogglerIcon}
        />
      </Button>

      <div className={getSearchContainerStyles(isSearchVisible)}>
        <Icon
          variant='search-2'
          classes={styles.icon}
        />
        <Input
          type='search'
          placeholder='Axtar'
          classes={styles.input}
          ref={searchInputRef}
        />
      </div>
    </>
  )
}
