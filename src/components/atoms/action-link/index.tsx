import { twMerge } from 'tailwind-merge'
import type { Gap, IconVariant, ImgSize } from '~ek/types'
import { Icon } from '~ek/components'

interface ActionLinkIcon {
  variant: IconVariant
  sizes: ImgSize
}

interface ActionLinkProps {
  href: string
  label: string
  classes?: string
  actionLinkIcon?: ActionLinkIcon
  gap?: Gap
}

const actionLinkStyles: Readonly<TwClasses> = {
  link: 'flex items-center text-xl leading-7 font-medium text-secondary-4',
}
const styles = actionLinkStyles as Readonly<StyleRecord>

export function ActionLink({
  href,
  label,
  classes,
  actionLinkIcon,
  gap,
}: Readonly<ActionLinkProps>): React.ReactElement {
  return (
    <a
      href={href}
      className={twMerge(styles.link, classes ?? '')}
      style={{ columnGap: gap ? `${gap}px` : 0 }}
    >
      {actionLinkIcon && (
        <Icon
          variant={actionLinkIcon.variant}
          sizes={actionLinkIcon.sizes}
        />
      )}
      <span>{label}</span>
    </a>
  )
}
