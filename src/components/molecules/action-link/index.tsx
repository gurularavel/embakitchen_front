import * as React from 'react'
import { twMerge } from 'tailwind-merge'
import { Icon } from '~ek/components'
import { IconVariant } from '~ek/types'

interface ActionLinkProps {
  href: string
  text: string
  iconVariant?: IconVariant
  gap?: TailwindUtilityNumber
  classes?: string
}

const actionLinkStyles: Readonly<TailwindStyle> = {
  text: 'flex items-center text-xl leading-7 font-medium text-secondary-4',
}
const styles: Readonly<StyleRecord> = actionLinkStyles as StyleRecord

export function ActionLink({
  href,
  text,
  iconVariant,
  gap,
  classes,
}: Readonly<ActionLinkProps>): ReactComponent {
  return (
    <a
      href={href}
      className={twMerge(styles.text, gap ? `gap-x-${gap}` : '', classes ?? '')}
    >
      {iconVariant && <Icon variant={iconVariant} />}
      <span>{text}</span>
    </a>
  )
}
