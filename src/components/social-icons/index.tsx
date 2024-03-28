import React from 'react'
import Image from 'next/image'
import type {
  SocialIconsProps,
  SocialIconsLayout,
} from '@embakitchen/components/social-icons/types'
import { styles as socialIconsStyles } from '@embakitchen/components/social-icons/styles'

export const SocialIcons: React.FC<SocialIconsProps> = ({ layout, icons }) => {
  const styles: Record<string, string> = socialIconsStyles as Record<string, string>
  const getLayoutStyles: (layout: SocialIconsLayout) => string = socialIconsStyles.layout as (
    layout: SocialIconsLayout,
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
