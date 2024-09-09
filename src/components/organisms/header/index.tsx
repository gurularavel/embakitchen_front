import * as React from 'react'
import { ActionLink, Logo, Search, Sidebar } from '~ek/components'

interface HeaderProps {}

const headerStyles: Readonly<TailwindStyle> = {
  header: 'w-full h-10 bg-gray-1 px-5',
  wrapper: 'relative h-full flex items-center justify-between',
  options: 'flex items-center gap-x-4', // w-[90px]
  phone: 'hidden mobile:flex', // w-[50px]
}
const styles: Readonly<StyleRecord> = headerStyles as StyleRecord

export function Header({}: Readonly<HeaderProps>): ReactComponent {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Sidebar />
        <Logo variant='header' />
        <div className={styles.options}>
          <ActionLink
            href='tel:126'
            text='126'
            iconVariant='phone'
            gap={2}
            classes={styles.phone}
          />

          <Search />
        </div>
      </div>
    </header>
  )
}
