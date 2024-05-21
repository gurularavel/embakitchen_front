import React from 'react'
import Image from 'next/image'
import { socialContactsStyles } from '@embakitchen/_styles'

type SocialContactsLayout = 'horizontal' | 'vertical'

export interface SocialIcon {
  img: string
  url: string
  description: string
}

interface SocialIconsProps {
  layout: SocialContactsLayout
  icons: SocialIcon[]
}

export const SocialContacts: React.FC<SocialIconsProps> = ({ layout, icons }) => {
  const styles: Record<string, string> = socialContactsStyles as Record<string, string>
  const getLayoutStyles: (layout: SocialContactsLayout) => string = socialContactsStyles.layout as (
    layout: SocialContactsLayout,
  ) => string

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
