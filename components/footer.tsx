'use client'

import Link from 'next/link'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import MagneticButton from './magneticbutton'

export default function Footer() {
  return (
    <footer className="py-16 sm:py-24 bg-neutral-50 dark:bg-[#0a0a0a] border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Big CTA */}
        <div className="text-center mb-16">
          <p className="text-neutral-500 dark:text-neutral-400 mb-4">Have an idea?</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-neutral-900 dark:text-white mb-8">
            Let's make something <span className="font-semibold italic">cool</span> together
          </h2>
          <MagneticButton href="#contact">
            <span className="inline-block px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium tracking-wide hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors">
              Start a conversation
            </span>
          </MagneticButton>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-neutral-200 dark:border-neutral-800">
          <div>
            <Link href="/" className="text-lg font-semibold text-neutral-900 dark:text-white">
              falih.dev
            </Link>
          </div>

          <p className="text-sm text-neutral-500 dark:text-neutral-400 text-center">
            Designed & built by me, with too much coffee ☕
          </p>

          <div className="flex items-center gap-4">
            <MagneticButton href="https://github.com/Sinholms">
              <span className="block p-2 text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                <SiGithub size={18} />
              </span>
            </MagneticButton>
            <MagneticButton href="https://linkedin.com/in/falihakbar">
              <span className="block p-2 text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                <SiLinkedin size={18} />
              </span>
            </MagneticButton>
          </div>
        </div>

        {/* Easter egg */}
        <p className="text-center text-xs text-neutral-400 dark:text-neutral-600 mt-8">
          © 2025 — Still figuring things out, one commit at a time
        </p>
      </div>
    </footer>
  )
}