import * as React from 'react'
// import { Logo, PhoneNumber, Search, Sidebar } from '@ek/components'
import { Logo, Sidebar } from '~ek/components'

interface HeaderProps {}

const headerStyles: Readonly<TailwindStyle> = {
  header: 'w-full h-10 bg-gray-1 px-5',
  wrapper: 'h-full flex items-center justify-between',
}
const styles: Readonly<StyleRecord> = headerStyles as StyleRecord

// const headerStyles: Readonly<TailwindStyle> = {
//   headerContentWrapper: 'relative',
//   right: 'flex items-center gap-x-4',
//   phone: 'hidden tablet:flex',
// }

// export function Header({}: Readonly<HeaderProps>): React.ReactElement {
//   return (
//         <div className={styles.right}>
//           <PhoneNumber classes={styles.phone} />
//           <Search />
//         </div>
//   )
// }

export function Header({}: Readonly<HeaderProps>): ReactComponent {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Sidebar />
        <Logo variant='header' />
        <p>Search</p>
      </div>
    </header>
  )
}
