import React from 'react'
import { headerStyles } from '@embakitchen/components/Header/Header.style'

export const Header: React.FC = () => {
  const styles: Dictionary<string> = headerStyles as Dictionary<string>

  return (
    <header className={styles.header}>
      <h1>Header</h1>
    </header>
  )
}

// import React from 'react'
// import Image from 'next/image'
// import { Navbar } from '@embakitchen/components'
// import { headerStyles } from '@embakitchen/components/Header/Header.style'
// import logo from '/public/assets/images/logo.svg'

// interface MenuLink {
//   text: string
//   url: string
// }

// const menuLinks: MenuLink[] = [
//   {
//     text: 'Mətbəx mebelləri',
//     url: '/',
//   },
//   {
//     text: 'Mağazalar',
//     url: '/',
//   },
//   {
//     text: 'Haqqımızda',
//     url: '/',
//   },
//   {
//     text: 'Blog',
//     url: '/',
//   },
//   {
//     text: 'Kampaniyalar',
//     url: '/',
//   },
// ]

// export const Header: React.FC = () => {
//   const styles: Dictionary<string> = headerStyles as Dictionary<string>

//   return (
//     <header className={styles.header}>
//       <div className={styles.logo}>
//         <Image
//           src={logo}
//           alt='embakitchen logo'
//         />
//       </div>

//       <Navbar />
//     </header>
//   )
// }

// export const Header: React.FC = () => {
//   return (
//     <header className={styles.header}>
//       <div className={styles.mobileMenu}>
//         <button className={styles.mobileMenuBtn}>
//           <Image
//             width={24}
//             height={24}
//             src='/assets/images/kebab-menu.svg'
//             alt='menu'
//           />
//         </button>
//         <NavbarMobile />
//       </div>
//       <div className={styles.left}>
//         <div className={styles.logo}>
//           <Image
//             src='/assets/images/logo.svg'
//             alt='embakitchen logo'
//             fill={true}
//           />
//         </div>
//         <Navbar />
//       </div>
//       <div className={styles.right}>
//         <div>
//           <a
//             className={styles.tel}
//             href='tel:126'
//           >
//             <Image
//               width={30}
//               height={30}
//               alt='search'
//               src='/assets/images/call-calling.svg'
//             />
//             126
//           </a>
//         </div>
//         <div>
//           <button className={styles.search}>
//             <Image
//               width={24}
//               height={24}
//               alt='search'
//               src='/assets/images/search.svg'
//             />
//           </button>
//         </div>
//         <div>
//           <button className={styles.lang}>
//             Az
//             <Image
//               width={24}
//               height={24}
//               alt='search'
//               src='/assets/images/arrow-down.svg'
//             />
//           </button>
//         </div>
//         <div>
//           <button className={styles.privateCabinet}>
//             <Image
//               width={24}
//               height={24}
//               alt='search'
//               src='/assets/images/profile-circle.svg'
//             />
//             Şəxsi kabinet
//           </button>
//         </div>
//       </div>
//     </header>
//   )
// }
