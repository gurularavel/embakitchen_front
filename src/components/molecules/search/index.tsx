'use client'

import * as React from 'react'
import { Button, Icon, Input } from '@ek/components'

interface SearchProps {}

const searchStyles: Readonly<TailwindStyle> = {
  search: (isSearchVisible: unknown) =>
    `h-11 bg-light-gray-4 absolute left-0 right-0 flex gap-x-2 px-3.5 rounded-lg transition-all duration-300 ${(isSearchVisible as boolean) ? 'top-14 translate-y-0 opacity-100' : '-top-full -translate-y-full opacity-0'}`,
  input:
    'placeholder:text-light-gray-10 placeholder:font-normal placeholder:text-sm text-light-gray-10',
}
const getSearchStyles: StyleGetter = searchStyles.search as StyleGetter
const styles: Readonly<StyleRecord> = searchStyles as StyleRecord

export function Search({}: Readonly<SearchProps>): React.ReactElement {
  const [isSearchVisible, setIsSearchVisible] = React.useState<boolean>(false)
  const searchInputRef = React.useRef<HTMLInputElement | null>(null)

  const toggleSearchVisibility = (shouldBeVisible: boolean): void =>
    setIsSearchVisible(shouldBeVisible)

  return (
    <>
      <Button onClick={() => toggleSearchVisibility(!isSearchVisible)}>
        <Icon variant='search-1' />
      </Button>
      <div className={getSearchStyles(isSearchVisible)}>
        <Icon variant='search-2' />
        <Input
          classes={styles.input}
          type='search'
          placeholder='Axtar'
          // ref={searchInputRef}
        />
      </div>
    </>
  )
}
