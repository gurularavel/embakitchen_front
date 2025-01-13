import { NextRequest, NextResponse } from 'next/server'
import createMiddleware from 'next-intl/middleware'
import { routing } from '~ek/i18n/routing'
import { LOCALIZED_PATHNAMES } from '~ek/utils'

export default function middleware(request: NextRequest): NextResponse {
  const isLoggedIn = Boolean(request.cookies.get('token'))
  const protectedRoutes = LOCALIZED_PATHNAMES['/profile']
  const pathWithoutLocale = request.nextUrl.pathname.replace(
    /^\/(az|ru|en)/,
    '',
  )

  if (
    Object.values(protectedRoutes).includes(pathWithoutLocale) &&
    !isLoggedIn
  ) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  if (request.headers.get('accept-language')) {
    request.headers.delete('accept-language')
  }

  return createMiddleware(routing)(request)
}

export const config = {
  matcher: ['/', '/(az|ru|en)/:path*'],
}
