import React from 'react'
import { Button, Dropdown, MenuItem } from '@ek/components'
import { menuStyles } from '@ek/components/molecules/styles'

const styles: StyleRecord = menuStyles as StyleRecord

interface MenuProps {}

export function Menu({}: MenuProps): React.ReactElement {
  return (
    <ul className={styles.container}>
      <MenuItem href='/kitchen-furniture'>Mətbəx mebelləri</MenuItem>
      <MenuItem href='/stores'>Mağazalar</MenuItem>
      <Dropdown
        text='Haqqımızda'
        items={[]}
      />
      <MenuItem href='/blog'>Blog</MenuItem>
      <MenuItem
        href='/campaigns'
        twStyles={styles.highlightedLink}
      >
        Kampaniyalar
      </MenuItem>
      <Button twStyles={`${styles.highlightedLink} ${styles.specialOrderBtn}`}>
        Özəl sifariş
      </Button>
    </ul>
  )
}
