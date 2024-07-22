'use client'

import React, { useState } from 'react'
import { Button, Icon, Logo } from '@ek/components/atoms'
import { headerStyles } from '@ek/components/organisms/header/header.style'
import { Search } from '@ek/components/molecules'

const styles: StyleRecord = headerStyles as StyleRecord

interface HeaderProps {}

export function Header({}: HeaderProps): React.ReactElement {
  const [isSearchShown, setIsSearchShown] = useState<boolean>(false)

  const toggleSearchBar = () => setIsSearchShown(!isSearchShown)

  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <Icon variant='menu' />
        <Logo variant='header' />
        <Button onClick={toggleSearchBar}>
          <Icon variant='search-1' />
        </Button>
        <Search isSearchShown={isSearchShown} />
      </div>
    </header>
  )
}
