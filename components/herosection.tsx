'use client'

import Link from 'next/link'
import { motion, Variants } from 'framer-motion'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { HiArrowDown, HiArrowRight } from 'react-icons/hi'

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
    <section id="home" className="surface-grid relative min-h-screen overflow-hidden bg-nb-bg pt-28">
      {/* Decorative shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="animate-float absolute top-32 right-[12%] hidden h-20 w-20 border-3 border-nb-border bg-nb-accent shadow-nb lg:block"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="animate-float absolute bottom-40 left-[8%] hidden h-14 w-14 border-3 border-nb-border bg-nb-accent-3 shadow-nb-sm lg:block"
        style={{ animationDelay: '1.5s' }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="animate-spin-slow absolute top-[60%] right-[6%] hidden h-10 w-10 border-3 border-nb-border bg-nb-accent-4 shadow-nb-sm lg:block"
      />

      <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-12">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="section-eyebrow mb-5 inline-block border-3 border-nb-border bg-nb-accent-4 px-3 py-1 text-xs font-bold text-white shadow-nb-sm sm:text-sm"
            >
              Web Developer — AI and Data Enthusiast
            </motion.p>

            <h1 className="font-heading mb-6 text-4xl font-bold leading-[1.02] tracking-tight text-nb-text sm:text-5xl md:text-6xl lg:text-7xl">
              <AnimatedText text="Muhammad" className="block" />
              <AnimatedText text="Falih Akbar" className="block text-nb-accent-3" delay={8} />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="max-w-2xl text-base leading-8 text-nb-muted sm:text-lg"
            >
              Junior web developer focused on React, Next.js, TypeScript, and practical AI/data workflows. I build responsive interfaces with maintainable code, clear user flow, and recruiter-ready presentation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.62 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Link href="#projects" className="nb-btn nb-btn-primary">
                View projects
                <HiArrowRight />
              </Link>
              <Link href="#contact" className="nb-btn nb-btn-accent">
                Contact me
                <HiArrowRight />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.78 }}
              className="mt-10 flex items-center gap-5 border-t-3 border-nb-border pt-6"
            >
              <span className="text-sm font-bold text-nb-muted">Find me on</span>
              <Link
                href="https://github.com/Sinholms"
                target="_blank"
                rel="noreferrer"
                className="nb-btn nb-btn-secondary !p-2.5"
              >
                <SiGithub size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/muhammad-falih-akbar-364a1a321/"
                target="_blank"
                rel="noreferrer"
                className="nb-btn nb-btn-secondary !p-2.5"
              >
                <SiLinkedin size={20} />
              </Link>
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="nb-card !shadow-nb-xl !border-t-[8px] !border-t-nb-accent"
          >
            <div className="flex items-center justify-between border-b-3 border-nb-border bg-nb-accent px-5 py-4">
              <p className="font-heading text-sm font-bold text-nb-text">Candidate Snapshot</p>
              <span className="border-3 border-nb-border bg-nb-accent-2 px-2.5 py-1 text-xs font-bold text-nb-text shadow-nb-sm">
                Open to roles
              </span>
            </div>

            <div className="p-5 sm:p-6">
              <div className="mb-6 border-b-3 border-nb-border pb-6">
                <p className="section-eyebrow mb-3 text-xs font-bold text-nb-muted">
                  Positioning
                </p>
                <h2 className="font-heading text-2xl font-bold tracking-tight text-nb-text">
                  Frontend-minded developer with AI and data curiosity.
                </h2>
              </div>

              <div className="divide-y-2 divide-nb-border">
                {snapshot.map((item) => (
                  <div key={item.label} className="grid gap-2 py-4 sm:grid-cols-[120px_1fr]">
                    <span className="text-sm font-bold text-nb-muted">{item.label}</span>
                    <span className="text-sm leading-6 text-nb-text">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-3 border-nb-border bg-nb-cream p-4 shadow-nb-sm">
                <p className="mb-3 text-sm font-bold text-nb-text">What HRD can expect</p>
                <ul className="space-y-3">
                  {strengths.map((strength) => (
                    <li key={strength} className="flex gap-3 text-sm leading-6 text-nb-muted">
                      <span className="mt-2 h-3 w-3 shrink-0 border-2 border-nb-border bg-nb-accent-3" />
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
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="border-3 border-nb-border bg-nb-accent p-2 shadow-nb-sm"
          >
            <HiArrowDown className="text-nb-text" size={18} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
