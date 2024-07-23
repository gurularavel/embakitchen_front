'use client'

import React, { useRef, useState } from 'react'
import { Button, Icon, Input } from '@ek/components/atoms'
import { searchStyles } from '@ek/components/molecules/search/search.style'

const getContainerStyles: StyleGetter = searchStyles.container as StyleGetter
const styles: Readonly<StyleRecord> = searchStyles as StyleRecord

interface SearchProps {}

export function Search({}: Readonly<SearchProps>): React.ReactElement {
  const [isSearchShown, setIsSearchShown] = useState<boolean>(false)
  const searchInputRef = useRef<HTMLInputElement | null>(null)

  const toggleSearchBar = (): void => setIsSearchShown(!isSearchShown)

  return (
    <>
      <Button onClick={toggleSearchBar}>
        <Icon variant='search-1' />
      </Button>
      <div className={getContainerStyles(isSearchShown)}>
        <Icon variant='search-2' />
        <Input
          twStyles={styles.input}
          placeholder='Axtar'
          // ref={searchInputRef}
        />
      </div>
    </>
  )
}
