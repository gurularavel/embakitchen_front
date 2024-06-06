import React from 'react'
import { SocialContactsItem } from '@embakitchen/components'
import type { SocialContact } from '@embakitchen/types'
import { socialContactsStyles } from '@embakitchen/components/SocialContacts/SocialContacts.style'

interface SocialContactsProps {
  layout: LayoutOption
  contacts: SocialContact[]
}

export const SocialContacts: React.FC<SocialContactsProps> = ({
  layout,
  contacts,
}) => {
  const styles: StringPair = socialContactsStyles as StringPair

  const getLayoutStyles: (layout: LayoutOption) => string =
    socialContactsStyles.layout as (layout: LayoutOption) => string

  return (
    <div className={styles.wrapper}>
      <ul className={getLayoutStyles(layout)}>
        {contacts.map((contact: SocialContact, i) => (
          <SocialContactsItem
            key={i}
            contact={contact}
          />
        ))}
      </ul>
    </div>
  )
}
