import * as React from 'react'
import { twMerge } from 'tailwind-merge'
import { Icon } from '~ek/components'
import { IconVariant } from '~ek/types'

interface PhoneLinkProps {
  href: string
  phone: string
  iconVariant: IconVariant
  gap: TailwindUtilityNumber
  classes?: string
}

const phoneLinkStyles: Readonly<TailwindStyle> = {
  phone: 'flex items-center text-xl leading-7 font-medium text-secondary-4',
}
const styles: Readonly<StyleRecord> = phoneLinkStyles as StyleRecord

export function PhoneLink({
  href,
  phone,
  iconVariant,
  gap,
  classes,
}: Readonly<PhoneLinkProps>): ReactComponent {
  return (
    <a
      href={href}
      className={twMerge(styles.phone, `gap-x-${gap}`, classes ?? '')}
    >
      <Icon variant={iconVariant} />
      <span>{phone}</span>
    </a>
  )
}
