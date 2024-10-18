import type { NextRequest, NextResponse } from 'next/server'
import createMiddleware from 'next-intl/middleware'
import { routing } from '~ek/i18n/routing'

export default function middleware(request: NextRequest): NextResponse {
  if (request.headers.get('accept-language')) {
    request.headers.delete('accept-language')
  }

  return createMiddleware(routing)(request)
}

export const config = {
  matcher: ['/', '/(az|ru|en)/:path*'],
}
