'use client'

import Link from 'next/link'
import { motion, Variants } from 'framer-motion'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { HiArrowDown, HiArrowRight } from 'react-icons/hi'
import MagneticButton from './magneticbutton'

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.018, duration: 0.45, ease: 'easeOut' },
  }),
}

function AnimatedText({
  text,
  className,
  delay = 0,
}: {
  text: string
  className?: string
  delay?: number
}) {
  return (
    <span className={className}>
      {text.split('').map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          custom={i + delay}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          className="inline-block"
          style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  )
}

const snapshot = [
  {
    label: 'Core stack',
    value: 'React, Next.js, TypeScript',
  },
  {
    label: 'Focus',
    value: 'Professional UI, API integration, AI/data workflows',
  },
  {
    label: 'Location',
    value: 'Indonesia, remote-friendly',
  },
]

const strengths = [
  'Clean, responsive interfaces that feel ready for real users.',
  'Practical web apps backed by APIs, databases, and clear state flow.',
  'Curiosity in AI and data translated into useful product experiments.',
]

export default function HeroSection() {
  return (
    <section id="home" className="surface-grid relative min-h-screen overflow-hidden bg-white pt-28 dark:bg-[#0f0f0f]">
      <div className="absolute inset-0 bg-white/85 dark:bg-[#0f0f0f]/88" />

      <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-12">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="section-eyebrow mb-5 text-xs font-semibold text-blue-700 dark:text-teal-300 sm:text-sm"
            >
              Web Developer - AI and Data Enthusiast
            </motion.p>

            <h1 className="mb-6 text-4xl font-semibold leading-[1.02] tracking-tight text-neutral-950 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
              <AnimatedText text="Muhammad" className="block" />
              <AnimatedText text="Falih Akbar" className="block text-gradient-accent" delay={8} />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="max-w-2xl text-base leading-8 text-neutral-600 dark:text-neutral-300 sm:text-lg"
            >
              Junior web developer focused on React, Next.js, TypeScript, and practical AI/data workflows. I build responsive interfaces with maintainable code, clear user flow, and recruiter-ready presentation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.62 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <MagneticButton href="#projects">
                <span className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 sm:w-auto">
                  View projects
                  <HiArrowRight />
                </span>
              </MagneticButton>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-md border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-900 transition-colors hover:border-neutral-950 hover:bg-neutral-50 dark:border-neutral-700 dark:text-white dark:hover:border-white dark:hover:bg-neutral-900"
              >
                Contact me
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.78 }}
              className="mt-10 flex items-center gap-5 border-t border-neutral-200 pt-6 dark:border-neutral-800"
            >
              <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Find me on</span>
              <MagneticButton href="https://github.com/Sinholms">
                <span className="block text-neutral-500 transition-colors hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white">
                  <SiGithub size={22} />
                </span>
              </MagneticButton>
              <MagneticButton href="https://www.linkedin.com/in/muhammad-falih-akbar-364a1a321/">
                <span className="block text-neutral-500 transition-colors hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white">
                  <SiLinkedin size={22} />
                </span>
              </MagneticButton>
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-950"
          >
            <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4 dark:border-neutral-800">
              <p className="text-sm font-semibold text-neutral-950 dark:text-white">Candidate Snapshot</p>
              <span className="rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                Open to roles
              </span>
            </div>

            <div className="p-5 sm:p-6">
              <div className="mb-6 border-b border-neutral-200 pb-6 dark:border-neutral-800">
                <p className="section-eyebrow mb-3 text-xs font-semibold text-neutral-500 dark:text-neutral-400">
                  Positioning
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-neutral-950 dark:text-white">
                  Frontend-minded developer with AI and data curiosity.
                </h2>
              </div>

              <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
                {snapshot.map((item) => (
                  <div key={item.label} className="grid gap-2 py-4 sm:grid-cols-[120px_1fr]">
                    <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">{item.label}</span>
                    <span className="text-sm leading-6 text-neutral-800 dark:text-neutral-200">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-neutral-50 p-4 dark:bg-neutral-900">
                <p className="mb-3 text-sm font-semibold text-neutral-950 dark:text-white">What HRD can expect</p>
                <ul className="space-y-3">
                  {strengths.map((strength) => (
                    <li key={strength} className="flex gap-3 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600 dark:bg-teal-300" />
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.aside>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <HiArrowDown className="text-neutral-400" size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
