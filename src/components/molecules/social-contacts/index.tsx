import * as React from 'react'
import { Icon, NavLink } from '~ek/components'
import { LayoutOption, SocialContact, SocialContactEntry } from '~ek/types'

interface SocialContactsProps {
  layout: LayoutOption
  gap: TailwindUtilityNumber
}

interface SocialContactStyleGetterParams {
  layout: LayoutOption
  gapClass: string
}

const socialContactsStyles: Readonly<TailwindStyle> = {
  socialContacts: (dynamicClasses: unknown) =>
    `flex ${dynamicClasses as string}`,
  socialLink:
    'w-10 h-10 bg-semi-white flex items-center justify-center rounded',
}
const styles: Readonly<StyleRecord> = socialContactsStyles as StyleRecord
const getSocialContactsStyles: StyleGetter =
  socialContactsStyles.socialContacts as StyleGetter

const socialIcons: Readonly<Record<SocialContact, SocialContactEntry>> = {
  whatsapp: {
    href: 'https://web.whatsapp.com/',
    icon: <Icon variant='whatsapp' />,
  },
  facebook: {
    href: 'https://www.facebook.com/',
    icon: <Icon variant='facebook' />,
  },
  instagram: {
    href: 'https://www.instagram.com/',
    icon: <Icon variant='instagram' />,
  },
  youtube: {
    href: 'https://www.youtube.com/',
    icon: <Icon variant='youtube' />,
  },
}

export function SocialContacts({
  layout,
  gap,
}: Readonly<SocialContactsProps>): ReactComponent {
  const dynamicClasses = Object.values({
    layout: (layout as LayoutOption) === 'vertical' ? 'flex-col' : 'flex-row',
    gap: `gap-${(layout as LayoutOption) === 'vertical' ? 'y' : 'x'}-${gap}`,
  }).join(' ')

  return (
    <ul className={getSocialContactsStyles(dynamicClasses)}>
      {Object.entries(socialIcons).map(([key, value]) => (
        <li key={key}>
          <NavLink
            href={value.href}
            classes={styles.socialLink}
            openInNewWindow={true}
          >
            {value.icon}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
