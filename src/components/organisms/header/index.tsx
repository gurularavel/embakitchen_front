import React from 'react'
import { Icon, Logo } from '@ek/components/atoms'
import { Search } from '@ek/components/molecules'
import { headerStyles } from '@ek/components/organisms/header/header.style'

const styles: Readonly<StyleRecord> = headerStyles as StyleRecord

interface HeaderProps {}

export function Header({}: Readonly<HeaderProps>): React.ReactElement {
  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <Icon variant='menu' />
        <Logo variant='header' />
        <Search />
      </div>
    </header>
  )
}
