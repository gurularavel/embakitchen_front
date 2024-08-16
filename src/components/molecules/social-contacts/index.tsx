// import * as React from 'react'
// import { Icon, MenuItem } from '@ek/components'
// import { LayoutOption, SocialContact } from '@ek/types'

// interface SocialContactEntry {
//   href: string
//   icon: React.ReactElement
// }

// interface SocialContactsProps {
//   layout: LayoutOption
// }

// const socialContactsStyles: Readonly<TailwindStyle> = {
//   socialContactsWrapper: (layout: unknown) =>
//     `flex ${(layout as LayoutOption) === 'vertical' ? 'flex-col' : ''} gap-x-3`,
//   socialLink:
//     'w-10 h-10 bg-semi-white flex items-center justify-center rounded',
// }
// const styles: Readonly<StyleRecord> = socialContactsStyles as StyleRecord
// const getSocialContactsWrapperStyles: StyleGetter =
//   socialContactsStyles.socialContactsWrapper as StyleGetter

// const socialIcons: Readonly<Record<SocialContact, SocialContactEntry>> = {
//   whatsapp: {
//     href: 'https://web.whatsapp.com/',
//     icon: <Icon variant='whatsapp' />,
//   },
//   facebook: {
//     href: 'https://www.facebook.com/',
//     icon: <Icon variant='facebook' />,
//   },
//   instagram: {
//     href: 'https://www.instagram.com/',
//     icon: <Icon variant='instagram' />,
//   },
//   youtube: {
//     href: 'https://www.youtube.com/',
//     icon: <Icon variant='youtube' />,
//   },
// }

// export function SocialContacts({
//   layout,
// }: Readonly<SocialContactsProps>): React.ReactElement {
//   return (
//     <ul className={getSocialContactsWrapperStyles(layout)}>
//       {Object.entries(socialIcons)?.map(([key, value]) => (
//         <MenuItem
//           key={key}
//           href={value.href}
//           classes={styles.socialLink}
//           openInNewWindow={true}
//         >
//           {value.icon}
//         </MenuItem>
//       ))}
//     </ul>
//   )
// }
