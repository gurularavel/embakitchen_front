'use client'
import { useLocale } from 'next-intl'
import { Link } from '~ek/i18n/routing'
import type { Language } from '~ek/types'

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  closeMenu?: () => void
}

export function NavLink({
  href,
  children,
  className = '',
  target,
  closeMenu,
  onClick,
}: Readonly<NavLinkProps>): React.ReactElement {
  const locale = useLocale() as Language
  const additionalProps =
    target === '_blank' ? { target, rel: 'noopener noreferrer' } : {}
  const hrefGuard = typeof href === 'string' ? href : ''

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(event)
    }
    if (closeMenu) {
      closeMenu()
    }
  }

  return (
    <Link
      href={hrefGuard}
      className={className}
      locale={locale}
      onClick={handleClick}
      {...additionalProps}
    >
      {children}
    </Link>
  )
}
