import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
// import { Header } from '@embakitchen/_components'
import { Footer } from '@embakitchen/components'
import '@embakitchen/app/globals.css'

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
      className={`${montserrat.variable} font-montserrat`}
    >
      <body>
        {/* <Header /> */}
        {children}
        <Footer />
      </body>
    </html>
  )
}
