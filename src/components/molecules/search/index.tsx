'use client'

import React, { useRef, useState } from 'react'
import { Button, Icon, Input } from '@ek/components'
import { searchStyles } from '@ek/components/molecules/search/search.style'

const getContainerStyles: StyleGetter = searchStyles.container as StyleGetter
const styles: Readonly<StyleRecord> = searchStyles as StyleRecord

interface SearchProps {}

export function Search({}: Readonly<SearchProps>): React.ReactElement {
  const [isSearchVisible, setIsSearchVisible] = useState<boolean>(false)
  const searchInputRef = useRef<HTMLInputElement | null>(null)

  const toggleSearchVisibility = (shouldBeVisible: boolean): void =>
    setIsSearchVisible(shouldBeVisible)

  return (
    <>
      <Button onClick={() => toggleSearchVisibility(!isSearchVisible)}>
        <Icon variant='search-1' />
      </Button>
      <div className={getContainerStyles(isSearchVisible)}>
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
