import { Logo, Navbar, SocialContacts } from '~ek/components'

const footerStyles: Readonly<TwClasses> = {
  footer: '',
  footerContent: '',
}
const styles = footerStyles as Readonly<StyleRecord>

export function Footer(): React.ReactElement {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footerContent}>
        <li>
          <Logo
            context='footer'
            sizes='w-[132px] h-[21px]'
          />

          <h5 className={styles.description}>
            Embakitchen - Embawood şirkətinin mətbəx mebeli üzrə ixtisaslaşmış
            brendidir.
          </h5>

          <SocialContacts
            layout='horizontal'
            colorScheme='dark'
            gap={12}
            classes='w-6 h-6'
          />
        </li>

        <li className={styles.footerItem}>
          {/* <Navbar context='footer' /> */}
        </li>
      </ul>
    </footer>
  )
}

// import { twMerge } from 'tailwind-merge'
// import {
//   ActionLink,
//   Button,
//   Icon,
//   Logo,
//   Navbar,
//   SocialContacts,
// } from '~ek/components'

//   footer:
//     'w-auto mobile:w-full mx-4 mobile:mx-0 px-5 mobile:px-10 laptop:px-15 widescreen:px-25 pb-6 laptop:pb-20',
//   footerContent: 'flex flex-col laptop:flex-row justify-between',
//   description: 'mb-6 text-base font-medium text-auxiliary-2',
//   footerItem: 'mb-6 last:mb-0 laptop:mb-0',
//   footerNav:
//     'flex flex-col laptop:flex-row justify-between gap-y-6 laptop:gap-x-6 desktop:gap-x-[157.33px] laptop:mr-6',
//   companyInfo: 'w-full laptop:max-w-[424px] mr-0 laptop:mr-6',
//   contactUs: '',
//   contactUsItem: 'mb-6 last:mb-0 flex items-center gap-x-2',
//   contactUsLabel:
//     'inline-block w-14 min-w-14 text-base font-medium text-auxiliary-2',
//   contactUsLink: 'text-base font-medium text-auxiliary-3 break-all',
//   specialOrder:
//     'w-full laptop:w-[215px] h-12 flex justify-center items-center rounded-md bg-primary-9 text-base font-semibold text-primary-2',
//   specialOrderIcon: 'ml-2',

//         <li className={twMerge(styles.footerItem, styles.companyInfo)}></li>

//         <li className={styles.footerItem}>
//           <Navbar
//             context='footer'
//             classes={styles.footerNav}
//           />
//         </li>

//         <li className={styles.footerItem}>
//           <ul className={styles.contactUs}>
//             <li className={styles.contactUsItem}>
//               <span className={styles.contactUsLabel}>Əlaqə:</span>
//               <ActionLink
//                 href='tel:+994552207212'
//                 text='+994552207212'
//                 classes={styles.contactUsLink}
//               />
//             </li>

//             <li className={styles.contactUsItem}>
//               <span className={styles.contactUsLabel}>Email:</span>
//               <ActionLink
//                 href='mailto:support@embakitchen.az'
//                 text='support@embakitchen.az'
//                 classes={styles.contactUsLink}
//               />
//             </li>

//             <li className={styles.contactUsItem}>
//               <Button classes={styles.specialOrder}>
//                 <span>Özəl sifariş yarat</span>
//                 <Icon
//                   variant='right-arrow-orange'
//                   classes={styles.specialOrderIcon}
//                 />
//               </Button>
//             </li>
//           </ul>
//         </li>
