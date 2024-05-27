import React from 'react'
import Image from 'next/image'
import type { SocialContact } from '@embakitchen/_types'
import { socialContactsStyles } from '@embakitchen/_components/SocialContacts/SocialContacts.style'

interface SocialIconsProps {
  layout: LayoutOptions
  icons: SocialContact[]
}

export const SocialContacts: React.FC<SocialIconsProps> = ({
  layout,
  icons,
}) => {
  const styles: Record<string, string> = socialContactsStyles as Record<
    string,
    string
  >
  const getLayoutStyles: (layout: LayoutOptions) => string =
    socialContactsStyles.layout as (layout: LayoutOptions) => string

  return (
    <div className={styles.wrapper}>
      <ul className={getLayoutStyles(layout)}>
        {icons.map(icon => (
          <li key={icon.img}>
            <a
              href={icon.url}
              className={styles.link}
            >
              <Image
                src={icon.img}
                alt={icon.description}
                width={30}
                height={30}
                className={styles.icon}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
