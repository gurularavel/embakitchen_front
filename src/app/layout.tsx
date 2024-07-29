import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { twMerge } from 'tailwind-merge'
import { Header } from '@ek/components'
import '@ek/app/globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Embakitchen',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className={twMerge(montserrat.variable, 'font-montserrat')}
    >
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
