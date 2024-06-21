import React from 'react'
import Image from 'next/image'
import type { SocialContact } from '@embakitchen/types'
import { socialContactsItemStyles } from '@embakitchen/components/SocialContacts/SocialContactsItem/SocialContactsItem.style'

interface SocialContactsItemProps {
  contact: SocialContact
  iconStyle?: string
}

export const SocialContactsItem: React.FC<SocialContactsItemProps> = ({
  contact,
  iconStyle,
}) => {
  const styles: Dictionary<string> =
    socialContactsItemStyles as Dictionary<string>

  return (
    <li key={contact.url}>
      <a
        href={contact.url}
        className={`${styles.link} ${iconStyle}`}
      >
        <Image
          src={contact.img}
          alt={contact.alt}
          className={styles.icon}
        />
      </a>
    </li>
  )
}
