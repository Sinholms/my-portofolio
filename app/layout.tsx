'use client'

import { ThemeProvider } from 'next-themes'
import Header from '@/components/header'
import Footer from '@/components/footer'
import BackToTop from '@/components/backtotop'
import PageLoader from '@/components/pageloader'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-[#0f0f0f] text-neutral-900 dark:text-white transition-colors">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <PageLoader />
          <Header />
          <main>
            {children}
          </main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}