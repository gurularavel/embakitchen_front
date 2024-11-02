import { useLocale } from 'next-intl'
import { twMerge } from 'tailwind-merge'
import { Icon, NavLink } from '~ek/components'
import type {
  LayoutOption,
  SocialContact,
  SocialContactEntry,
  ColorScheme,
  Gap,
  ImgSize,
  Language,
} from '~ek/types'
import { getGapProperty } from '~ek/utils'

interface SocialContactsProps {
  layout: LayoutOption
  colorScheme: ColorScheme
  gap: Gap
  classes?: string
}

const renderSocialContactsIcon = (
  socialContact: SocialContact,
  colorScheme: ColorScheme,
  sizes: ImgSize = 'w-6 h-6',
) => (
  <Icon
    variant={`${socialContact}-${colorScheme}`}
    sizes={sizes}
  />
)

const socialContacts: Readonly<
  Record<ColorScheme, Record<SocialContact, SocialContactEntry>>
> = {
  light: {
    whatsapp: {
      href: 'https://web.whatsapp.com',
      icon: renderSocialContactsIcon('whatsapp', 'light'),
    },
    facebook: {
      href: 'https://www.facebook.com',
      icon: renderSocialContactsIcon('facebook', 'light'),
    },
    instagram: {
      href: 'https://www.instagram.com',
      icon: renderSocialContactsIcon('instagram', 'light'),
    },
    youtube: {
      href: 'https://www.youtube.com',
      icon: renderSocialContactsIcon('youtube', 'light'),
    },
  },
  dark: {
    whatsapp: {
      href: 'https://web.whatsapp.com',
      icon: renderSocialContactsIcon('whatsapp', 'dark'),
    },
    facebook: {
      href: 'https://www.facebook.com',
      icon: renderSocialContactsIcon('facebook', 'dark'),
    },
    instagram: {
      href: 'https://www.instagram.com',
      icon: renderSocialContactsIcon('instagram', 'dark'),
    },
    youtube: {
      href: 'https://www.youtube.com',
      icon: renderSocialContactsIcon('youtube', 'dark'),
    },
  },
}

const socialContactsStyles: Readonly<TwClasses> = {
  socialContacts: (layout: unknown) =>
    `flex ${(layout as LayoutOption) === 'horizontal' ? 'flex-row' : 'flex-col'}`,
  link: 'w-10 h-10 flex items-center justify-center bg-semi-white rounded',
}
const styles = socialContactsStyles as Readonly<StyleRecord>
const getSocialContactsStyles: StyleGetter =
  socialContactsStyles.socialContacts as StyleGetter

export function SocialContacts({
  layout,
  colorScheme,
  gap,
  classes,
}: Readonly<SocialContactsProps>): React.ReactElement {
  const locale = useLocale() as Language

  return (
    <ul
      className={getSocialContactsStyles(layout)}
      style={{ [getGapProperty(layout)]: `${gap}px` }}
    >
      {Object.entries(socialContacts[colorScheme]).map(([, value]) => (
        <li key={value.href}>
          <NavLink
            href={value.href}
            target='_blank'
            className={twMerge(styles.link, classes ?? '')}
            locale={locale}
          >
            {value.icon}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
