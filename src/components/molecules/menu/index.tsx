import * as React from 'react'
import { twMerge } from 'tailwind-merge'
import { Button, Dropdown, MenuItem } from '@ek/components'

interface MenuProps {}

const menuStyles: Readonly<TailwindStyle> = {
  menu: '',
  menuItem: 'mb-6 text-base font-normal leading-6 text-white',
  highlightedLink: 'text-secondary-4',
  specialOrderBtn:
    'w-[135px] h-11 border border-solid border-light-gray-4 rounded-lg',
}
const styles: Readonly<StyleRecord> = menuStyles as StyleRecord

export function Menu({}: Readonly<MenuProps>): React.ReactElement {
  return (
    <ul className={styles.menu}>
      <MenuItem
        href='/kitchen-furniture'
        classes={styles.menuItem}
      >
        Mətbəx mebelləri
      </MenuItem>
      <MenuItem
        href='/stores'
        classes={styles.menuItem}
      >
        Mağazalar
      </MenuItem>
      <Dropdown
        text='Haqqımızda'
        items={[
          { text: 'Şirkət haqqında', href: '/about/company' },
          { text: 'Layihələrimiz', href: '/about/projects' },
          { text: 'Partnyorlar', href: '/about/partners' },
        ]}
      />
      <MenuItem
        href='/blog'
        classes={styles.menuItem}
      >
        Blog
      </MenuItem>
      <MenuItem
        href='/campaigns'
        classes={twMerge(styles.menuItem, styles.highlightedLink)}
      >
        Kampaniyalar
      </MenuItem>
      <Button classes={twMerge(styles.highlightedLink, styles.specialOrderBtn)}>
        Özəl sifariş
      </Button>
    </ul>
  )
}
