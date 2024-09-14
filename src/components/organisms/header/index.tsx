import { Logo, Search, Sidebar } from '~ek/components'

const headerStyles: Readonly<TwClasses> = {
  header: 'h-10 laptop:h-19 bg-gray-1 px-5 laptop:px-15 widescreen:px-25',
  wrapper: 'h-full flex items-center justify-between',
}
const styles = headerStyles as Readonly<StyleRecord>

export function Header(): React.ReactElement {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Sidebar />
        <Logo
          context='header'
          sizes='w-25 h-[17px] laptop:w-[158px] laptop:h-[27px]'
        />
        <Search />
      </div>
    </header>
  )
}

// import { ActionLink, Navbar } from '~ek/components'

// const headerStyles: Readonly<TailwindStyle> = {
//   compact: {
//     header: 'h-full flex items-center justify-between laptop:hidden relative',
//     options: 'w-6 mobile:w-[90px] flex items-center gap-x-4',
//     phone: 'w-[50px] hidden mobile:flex gap-x-2 text-sm font-medium',
//   },
//   largeScreen: {
//     header: 'hidden laptop:flex',
//   },
// }
// const compactHeaderStyles: Readonly<StyleRecord> =
//   headerStyles.compact as StyleRecord
// const largeScreenHeaderStyles: Readonly<StyleRecord> =
//   headerStyles.largeScreen as StyleRecord

// function CompactHeader(): ReactComponent {
//   return (
//     <div className={compactHeaderStyles.header}>
//       <Sidebar />
//       <Logo variant='header' />
//       <div className={compactHeaderStyles.options}>
//         <ActionLink
//           href='tel:126'
//           text='126'
//           iconVariant='phone'
//           gap={2}
//           classes={compactHeaderStyles.phone}
//           iconSize='w-5 h-5'
//         />

//         <Search />
//       </div>
//     </div>
//   )
// }

// function LargeScreenHeader(): ReactComponent {
//   return <div className={largeScreenHeaderStyles.header}>Laptop Header</div>
// }

// export function Header({}: Readonly<HeaderProps>): ReactComponent {
//   return (
//     <header className={styles.header}>
//       <CompactHeader />
//       <LargeScreenHeader />
//     </header>
//   )
// }
