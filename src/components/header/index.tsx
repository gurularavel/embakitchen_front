import React from 'react'
import { styles } from '@embakitchen/components/header/styles'
import { IHeaderPropsType } from '@embakitchen/components/header/types'

export const Header: React.FC<IHeaderPropsType> = () => {
  return (
    <header className={styles.header}>
      <p>Header component</p>
    </header>
  )
}
