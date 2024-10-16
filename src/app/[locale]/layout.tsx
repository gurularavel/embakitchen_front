import { Montserrat } from 'next/font/google'
import { twMerge } from 'tailwind-merge'
import { type AbstractIntlMessages, NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Footer, Header } from '~ek/components'
import type { Language } from '~ek/types'
import '~ek/app/globals.css'

interface Params {
  locale: `${Language}`
}

interface RootLayoutProps {
  children: React.ReactNode
  params: Params
}

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  const messages: AbstractIntlMessages = await getMessages()

  return (
    <html
      lang={locale}
      className={twMerge(montserrat.variable, 'font-montserrat')}
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
