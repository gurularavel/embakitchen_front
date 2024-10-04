'use client'

import * as React from 'react'
import { Button, Icon, Input } from '~ek/components'
import { useInputFocus } from '~ek/hooks'

const searchStyles: Readonly<TwClasses> = {
  search: 'w-auto h-full',
  searchButton: 'w-auto h-full flex items-center',
  searchContainer: (isVisible: unknown) =>
    `h-11 bg-[rgba(255,255,255,0.2)] shadow-sm shadow-supplementary-1/5 px-3.5 absolute left-0 right-0 z-10 border border-solid border-gray-4 rounded-lg flex items-center gap-x-2 transition-all duration-300 ease-in-out ${(isVisible as boolean) ? 'top-14 laptop:top-24 opacity-100 translate-y-0' : '-top-full opacity-0 -translate-y-full'}`,
  searchInputIcon: 'w-6 h-6',
  input:
    'w-full h-full text-sm placeholder:text-sm font-normal placeholder:font-normal text-gray-10 placeholder:text-gray-10',
}
const styles = searchStyles as Readonly<StyleRecord>
const getSearchContainerStyles: StyleGetter =
  searchStyles.searchContainer as StyleGetter

export function Search(): React.ReactElement {
  const [isVisible, setIsVisible] = React.useState<boolean>(false)
  const searchInputRef = useInputFocus({
    isVisible,
    options: {
      clearValue: true,
    },
  })

  const handleSearchVisibility = (shouldBeVisible: boolean): void =>
    setIsVisible(shouldBeVisible)

  return (
    <div className={styles.search}>
      <Button
        onClick={() => handleSearchVisibility(!isVisible)}
        classes={styles.searchButton}
      >
        <Icon
          variant='search-1'
          sizes='w-6 h-6'
        />
      </Button>

      <div className={getSearchContainerStyles(isVisible)}>
        <Icon
          variant='search-2'
          sizes='w-6 h-6'
          classes={styles.searchInputIcon}
        />

        <Input
          type='search'
          placeholder='Axtar'
          classes={styles.input}
          ref={searchInputRef}
        />
      </div>
    </div>
  )
}
