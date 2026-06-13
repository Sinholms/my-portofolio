import { Space_Grotesk } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import BackToTop from '@/components/backtotop'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata = {
  title: 'Muhammad Falih Akbar | Web Developer Portfolio',
  description: 'Portfolio of Muhammad Falih Akbar, a web developer focused on React, Next.js, AI, and data-driven products.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="bg-nb-bg text-nb-text antialiased">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}
