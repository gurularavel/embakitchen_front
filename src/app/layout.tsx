import { Montserrat } from 'next/font/google'
import { twMerge } from 'tailwind-merge'
import { Footer, Header } from '~ek/components'
import '~ek/app/globals.css'

interface RootLayoutProps {
  children: React.ReactNode
}

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html
      lang='en'
      className={twMerge(montserrat.variable, 'font-montserrat')}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
