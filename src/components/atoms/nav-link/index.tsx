import { useLocale } from 'next-intl'
import { Link } from '~ek/i18n/routing'
import type { Language } from '~ek/types'

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export function NavLink({
  href,
  children,
  className = '',
  target,
}: Readonly<NavLinkProps>): React.ReactElement {
  const locale = useLocale() as Language
  const additionalProps =
    target === '_blank' ? { target, rel: 'noopener noreferrer' } : {}
  const hrefGuard = typeof href === 'string' ? href : ''

  return (
    <Link
      href={hrefGuard}
      className={className}
      locale={locale}
      {...additionalProps}
    >
      {children}
    </Link>
  )
}
