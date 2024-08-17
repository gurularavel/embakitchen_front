import * as React from 'react'
// import { PhoneNumber } from '@ek/components'
import { Logo, Search, Sidebar } from '~ek/components'

interface HeaderProps {}

const headerStyles: Readonly<TailwindStyle> = {
  header: 'w-full h-10 bg-gray-1 px-5',
  wrapper: 'relative h-full flex items-center justify-between',
}
const styles: Readonly<StyleRecord> = headerStyles as StyleRecord

// const headerStyles: Readonly<TailwindStyle> = {
//   right: 'flex items-center gap-x-4',
//   phone: 'hidden tablet:flex',
// }

// <div className={styles.right}>
//   <PhoneNumber classes={styles.phone} />
// </div>

export function Header({}: Readonly<HeaderProps>): ReactComponent {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Sidebar />
        <Logo variant='header' />
        <Search />
      </div>
    </header>
  )
}
