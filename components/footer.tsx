'use client'

import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi'
import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className="surface-dots-dark border-t-4 border-nb-border py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="nb-dark-card grid gap-8 p-6 lg:grid-cols-[1fr_auto] lg:items-end lg:p-8">
          <div>
            <p className="section-eyebrow mb-4 inline-block border-3 border-nb-accent bg-nb-accent px-3 py-1 text-xs font-bold text-nb-text shadow-nb-sm">
              Open to opportunities
            </p>
            <h2 className="font-heading max-w-2xl text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
              <span className="nb-heading-block">
                Need a junior developer who can build clean web interfaces and keep learning fast?
              </span>
            </h2>
          </div>
          <Link
            href="#contact"
            className="nb-btn nb-btn-primary"
          >
            Contact me
            <HiArrowRight />
          </Link>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-3 border-white/30 pt-8 md:flex-row md:items-center md:justify-between">
          <div>
            <Link href="#home" className="font-heading text-base font-bold text-white">
              Muhammad Falih Akbar
            </Link>
            <p className="mt-1 text-sm font-medium text-neutral-400">
              Web Developer — AI and Data Enthusiast
            </p>
          </div>

          <p className="text-sm font-medium text-neutral-500">
            © 2026 Muhammad Falih Akbar. Built with Next.js and TypeScript.
          </p>

          <div className="flex items-center gap-3">
            <Link
              href="https://github.com/Sinholms"
              target="_blank"
              rel="noreferrer"
              className="nb-btn nb-btn-secondary !p-2.5"
              aria-label="GitHub"
            >
              <SiGithub size={18} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/muhammad-falih-akbar-364a1a321/"
              target="_blank"
              rel="noreferrer"
              className="nb-btn nb-btn-secondary !p-2.5"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
