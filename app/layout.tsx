import Providers from '@/components/providers'
import Header from '@/components/header'
import Footer from '@/components/footer'
import BackToTop from '@/components/backtotop'
import './globals.css'

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
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-neutral-900 antialiased transition-colors dark:bg-[#0f0f0f] dark:text-white">
        <Providers>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
          <BackToTop />
        </Providers>
      </body>
    </html>
  )
}
