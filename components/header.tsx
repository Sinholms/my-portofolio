'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const [activeSection, setActiveSection] = useState('')
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.replace('#', '')))
      .filter((el): el is HTMLElement => el !== null)
    if (sections.length === 0) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      className="fixed inset-x-0 top-0 z-50 w-full border-b-3 border-nb-border bg-nb-bg"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-12">
        <Link href="/" className="font-heading text-lg font-bold tracking-tight text-nb-text">
          MFA<span className="text-nb-accent">.</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
               <li key={link.href}>
                 <Link
                   href={link.href}
                   aria-current={activeSection === link.href.replace('#', '') ? 'page' : undefined}
                   className={`rounded-none px-3 py-2 text-sm font-semibold transition-colors ${
                     activeSection === link.href.replace('#', '')
                       ? 'bg-nb-accent text-nb-text'
                       : 'text-nb-muted hover:bg-nb-accent hover:text-nb-text'
                   }`}
                 >
                   {link.label}
                 </Link>
               </li>
            ))}
          </ul>
          <Link
            href="#contact"
            className="nb-btn nb-btn-primary"
          >
            Hire me
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="#contact"
            className="nb-btn nb-btn-primary !px-3 !py-2 text-xs"
          >
            Hire me
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="nb-btn nb-btn-secondary !p-2"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t-3 border-nb-border bg-nb-bg md:hidden"
          >
            <ul className="space-y-1 px-4 py-5">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
               <Link
                 href={link.href}
                 onClick={() => setMobileMenuOpen(false)}
                 aria-current={activeSection === link.href.replace('#', '') ? 'page' : undefined}
                 className={`block px-3 py-3 text-base font-semibold transition-colors ${
                   activeSection === link.href.replace('#', '')
                     ? 'bg-nb-accent text-nb-text'
                     : 'text-nb-text hover:bg-nb-accent'
                 }`}
               >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-2"
              >
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="nb-btn nb-btn-primary w-full"
                >
                  Hire me
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
