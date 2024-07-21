import React from 'react'
import { Icon, Logo } from '@ek/components/atoms'
import { headerStyles } from '@ek/components/organisms/header/header.style'

const styles: StyleRecord = headerStyles as StyleRecord

interface HeaderProps {}

export function Header({}: HeaderProps): React.ReactElement {
  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <Icon variant='menu' />
        <Logo variant='header' />
      </div>
    </header>
  )
}
