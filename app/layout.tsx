import Providers from '@/components/providers'
import Header from '@/components/header'
import Footer from '@/components/footer'
import BackToTop from '@/components/backtotop'
import PageLoader from '@/components/pageloader'
import './globals.css'

export const metadata = {
  title: 'Falih Akbar | Portfolio',
  description: 'Web, AI, and Data Enthusiast',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-[#0f0f0f] text-neutral-900 dark:text-white transition-colors">
        <Providers>
          <PageLoader />
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