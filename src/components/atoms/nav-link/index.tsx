import { Link } from '~ek/i18n/routing'
import type { Language } from '~ek/types'

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  locale: Language | undefined
}

export function NavLink({
  href,
  children,
  className,
  target,
  locale,
}: Readonly<NavLinkProps>): React.ReactElement {
  const additionalProps =
    target === '_blank' ? { target, rel: 'noopener noreferrer' } : {}

  return (
    <Link
      href={href as string}
      className={className ?? ''}
      locale={locale}
      {...additionalProps}
    >
      {children}
    </Link>
  )
}
