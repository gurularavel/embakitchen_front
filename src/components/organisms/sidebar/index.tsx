'use client'

import * as React from 'react'
import {
  Button,
  Icon,
  //   LanguageSelector,
  //   Navbar,
  //   PhoneNumber,
  //   SocialContacts,
} from '~ek/components'

interface SidebarProps {}

const sidebarStyles: Readonly<TailwindStyle> = {
  sidebar: 'flex items-center',
  menuIcon: 'w-6 h-6',
  sidebarContent: (isSidebarVisible: unknown) =>
    `p-10 bg-gray-1 fixed top-0 right-0 bottom-0 left-0 transition-all duration-300 ease-in ${(isSidebarVisible as boolean) ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`,
  closeButton: 'h-6 mb-6 flex justify-end',
  closeIcon: 'w-4 h-4',
}
const styles: Readonly<StyleRecord> = sidebarStyles as StyleRecord
const getSidebarContentStyles: StyleGetter =
  sidebarStyles.sidebarContent as StyleGetter

// const sidebarStyles: Readonly<TailwindStyle> = {
//   sidebarContent: (isSidebarVisible: unknown) => `z-10 overflow-y-auto`,

//   sidebarBody: '',
//   sidebarNavTop: 'mb-6',
//   sidebarNavBottom: 'pt-2',
//   phone: 'mb-6',
//   options:
//     'flex flex-col mobile:flex-row gap-y-3 mobile:gap-y-0 gap-x-0 mobile:gap-x-6',
//   profileButton:
//     'w-full mobile:flex-1 bg-gray-3 h-11 rounded-lg flex items-center justify-center gap-x-2 text-base font-semibold leading-6 text-light-gray-10',
// }

export function Sidebar({}: Readonly<SidebarProps>): ReactComponent {
  const [isSidebarVisible, setIsSidebarVisible] = React.useState<boolean>(false)

  const sidebarVisibilityHandler = (shouldBeVisible: boolean): void =>
    setIsSidebarVisible(shouldBeVisible)

  return (
    <aside className={styles.sidebar}>
      <Button onClick={() => sidebarVisibilityHandler(true)}>
        <Icon
          variant='menu'
          classes={styles.menuIcon}
        />
      </Button>

      <div className={getSidebarContentStyles(isSidebarVisible)}>
        <div className={styles.closeButton}>
          <Button onClick={() => sidebarVisibilityHandler(false)}>
            <Icon
              variant='close'
              classes={styles.closeIcon}
            />
          </Button>
        </div>

        <div></div>
      </div>
    </aside>
  )
}

//       <div className={getSidebarContentStyles(isSidebarVisible)}>
//         <div className={styles.sidebarBody}>
//           <div className={styles.sidebarNavTop}>
//             <Navbar />
//             <SocialContacts layout='horizontal' />
//           </div>

//           <div className={styles.sidebarNavBottom}>
//             <PhoneNumber classes={styles.phone} />

//             <div className={styles.options}>
//               <Button classes={styles.profileButton}>
//                 <Icon variant='profile' />
//                 <span>Şəxsi kabinet</span>
//               </Button>

//               <LanguageSelector />
//             </div>
//           </div>
//         </div>
//       </div>
