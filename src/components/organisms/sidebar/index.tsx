'use client'

import * as React from 'react'
import { Button, Icon, Navbar } from '~ek/components'

const sidebarStyles: Readonly<TwClasses> = {
  sidebar: 'w-auto h-full flex items-center',
  menuIcon: 'w-6 h-6',
  sidebarContent: (isVisible: unknown) =>
    `bg-gray-1 p-10 fixed top-0 right-0 bottom-0 left-0 transition-all duration-300 ease-in ${(isVisible as boolean) ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`, // overflow-y-auto z-10
  closeSidebar: 'h-6 mb-6 flex justify-end',
  closeIcon: 'w-4 h-4',
  sidebarBody: '',
}
const styles = sidebarStyles as Readonly<StyleRecord>
const getSidebarContentStyles: StyleGetter =
  sidebarStyles.sidebarContent as StyleGetter

export function Sidebar(): React.ReactElement {
  const [isVisible, setIsVisible] = React.useState<boolean>(false)

  React.useEffect(() => {
    document.body.style.overflow = isVisible ? 'hidden' : 'auto'
  }, [isVisible])

  const handleSidebarVisibility = (shouldBeVisible: boolean): void =>
    setIsVisible(shouldBeVisible)

  return (
    <aside
      className={styles.sidebar}
      style={{ border: '2px solid red' }}
    >
      <Button onClick={() => handleSidebarVisibility(true)}>
        <Icon
          variant='menu'
          sizes={styles.menuIcon}
        />
      </Button>

      <div className={getSidebarContentStyles(isVisible)}>
        <div className={styles.closeSidebar}>
          <Button onClick={() => handleSidebarVisibility(false)}>
            <Icon
              variant='close'
              sizes={styles.closeIcon}
            />
          </Button>
        </div>

        <div className={styles.sidebarBody}>
          <Navbar context='sidebar' />
        </div>
      </div>
    </aside>
  )
}

// import {
//   ActionLink,
//   LanguageSelector,
//   Navbar,
//   SocialContacts,
// } from '~ek/components'

//   sidebar: 'mobile:w-[90px]',
//   socialContacts: 'mb-6',
//   phone: 'mb-6 pt-2', // relative z-10
//   options:
//     'flex flex-col mobile:flex-row gap-y-3 mobile:gap-y-0 gap-x-0 mobile:gap-x-6',
//   profileButton:
//     'w-full h-11 bg-gray-3 rounded-lg flex mobile:flex-1 justify-center items-center gap-x-2 text-base font-semibold text-gray-10',

//       <div className={getSidebarContentStyles(isSidebarVisible)}>
//         <div className={styles.sidebarBody}>
//           <SocialContacts
//             layout='horizontal'
//             theme='light'
//             gap={3}
//             classes={styles.socialContacts}
//           />

//           <ActionLink
//             href='tel:126'
//             text='126'
//             iconVariant='phone'
//             gap={2}
//             classes={styles.phone}
//           />

//           <div className={styles.options}>
//             <Button classes={styles.profileButton}>
//               <Icon variant='profile' />
//               <span>Şəxsi kabinet</span>
//             </Button>

//             <LanguageSelector />
//           </div>
//         </div>
//       </div>

//       {/* <div className={styles.sidebarBodyTop}>
//         <Navbar context='header' />
//       </div> */}
