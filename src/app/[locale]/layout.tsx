import { Montserrat } from 'next/font/google'
import { twMerge } from 'tailwind-merge'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Footer, Header } from '~ek/components'
import '~ek/app/globals.css'

interface RootLayoutProps {
  children: React.ReactNode
  params: {
    locale: string
  }
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
  const messages = await getMessages()

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
