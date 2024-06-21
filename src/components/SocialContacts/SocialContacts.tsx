import React from 'react'
import { SocialContactsItem } from '@embakitchen/components'
import type { SocialContact } from '@embakitchen/types'
import { socialContactsStyles } from '@embakitchen/components/SocialContacts/SocialContacts.style'

interface SocialContactsProps {
  layout: LayoutOption
  contacts: SocialContact[]
  wrapperGap: string
  iconStyle?: string
}

export const SocialContacts: React.FC<SocialContactsProps> = ({
  layout,
  contacts,
  wrapperGap,
  iconStyle,
}) => {
  const getLayoutStyles: (layout: LayoutOption) => string =
    socialContactsStyles.layout as (layout: LayoutOption) => string

  return (
    <ul className={`${getLayoutStyles(layout)} ${wrapperGap}`}>
      {contacts.map((contact: SocialContact, i) => (
        <SocialContactsItem
          key={i}
          contact={contact}
          iconStyle={iconStyle ?? ''}
        />
      ))}
    </ul>
  )
}
