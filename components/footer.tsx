'use client'

import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi'
import { SiGithub, SiLinkedin } from 'react-icons/si'

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 py-12 dark:border-neutral-800 dark:bg-[#0a0a0a] sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="grid gap-8 border-b border-neutral-200 pb-10 dark:border-neutral-800 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="section-eyebrow mb-4 text-xs font-semibold text-blue-700 dark:text-teal-300">
              Open to opportunities
            </p>
            <h2 className="max-w-2xl text-2xl font-semibold tracking-tight text-neutral-950 dark:text-white sm:text-3xl">
              Need a junior developer who can build clean web interfaces and keep learning fast?
            </h2>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-neutral-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
          >
            Contact me
            <HiArrowRight />
          </Link>
        </div>

        <div className="flex flex-col gap-6 pt-8 md:flex-row md:items-center md:justify-between">
          <div>
            <Link href="#home" className="text-base font-semibold text-neutral-950 dark:text-white">
              Muhammad Falih Akbar
            </Link>
            <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
              Web Developer - AI and Data Enthusiast
            </p>
          </div>

          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            © 2026 Muhammad Falih Akbar. Built with Next.js and TypeScript.
          </p>

          <div className="flex items-center gap-3">
            <Link
              href="https://github.com/Sinholms"
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-md border border-neutral-300 text-neutral-600 transition-colors hover:border-neutral-950 hover:text-neutral-950 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-white dark:hover:text-white"
              aria-label="GitHub"
            >
              <SiGithub size={18} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/muhammad-falih-akbar-364a1a321/"
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-md border border-neutral-300 text-neutral-600 transition-colors hover:border-neutral-950 hover:text-neutral-950 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-white dark:hover:text-white"
              aria-label="LinkedIn"
            >
              <SiLinkedin size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
