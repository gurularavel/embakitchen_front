import * as React from 'react'
import { twMerge } from 'tailwind-merge'
import { Icon, NavLink } from '~ek/components'
import {
  LayoutOption,
  SocialContact,
  SocialContactEntry,
  Theme,
} from '~ek/types'

interface SocialContactsProps {
  layout: LayoutOption
  theme: Theme
  gap: TailwindUtilityNumber
  classes?: string
}

const socialContactsStyles: Readonly<TailwindStyle> = {
  socialContacts: (param: unknown) => {
    const { layout, gap } = param as Partial<SocialContactsProps>

    return `flex ${(layout as LayoutOption) === 'vertical' ? `flex-col gap-y-${gap}` : `flex-row gap-x-${gap}`}`
  },
  socialLink:
    'w-10 h-10 bg-semi-white flex items-center justify-center rounded',
}
const styles: Readonly<StyleRecord> = socialContactsStyles as StyleRecord
const getSocialContactsStyles: StyleGetter =
  socialContactsStyles.socialContacts as StyleGetter

const renderSocialContactIcon = (socialContact: string, theme: Theme) => (
  <Icon variant={`${socialContact}-${theme}` as SocialContact} />
)

const getSocialIcons = (
  theme: Theme,
): Readonly<Record<string, SocialContactEntry>> => ({
  whatsapp: {
    href: 'https://web.whatsapp.com/',
    icon: renderSocialContactIcon('whatsapp', theme),
  },
  facebook: {
    href: 'https://www.facebook.com/',
    icon: renderSocialContactIcon('facebook', theme),
  },
  instagram: {
    href: 'https://www.instagram.com/',
    icon: renderSocialContactIcon('instagram', theme),
  },
  youtube: {
    href: 'https://www.youtube.com/',
    icon: renderSocialContactIcon('youtube', theme),
  },
})

export function SocialContacts({
  layout,
  theme,
  gap,
  classes,
}: Readonly<SocialContactsProps>): ReactComponent {
  return (
    <ul className={getSocialContactsStyles({ layout, gap })}>
      {Object.entries(getSocialIcons(theme)).map(([key, value]) => (
        <li key={key}>
          <NavLink
            href={value.href}
            classes={twMerge(styles.socialLink, classes ?? '')}
            openInNewWindow={true}
          >
            {value.icon}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
