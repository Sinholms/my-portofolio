'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi'
import { SiReact, SiPython, SiGithub } from 'react-icons/si'

const outcomes = [
  {
    icon: SiReact,
    title: 'Shipped web products',
    description:
      'Responsive, recruiter-ready interfaces built with React and Next.js — this portfolio is one of them.',
    accent: 'border-t-nb-accent',
    iconBg: 'bg-nb-accent',
    href: '#project-personal-portfolio',
    linkLabel: 'See my work',
  },
  {
    icon: SiPython,
    title: 'Data & AI interfaces',
    description:
      'Practical AI and data workflows surfaced as clear UI — like the interactive regional risk map I built for LPSE-X.',
    accent: 'border-t-nb-accent-2',
    iconBg: 'bg-nb-accent-2',
    href: '#project-lpse-x-phase-3',
    linkLabel: 'View LPSE-X',
  },
  {
    icon: SiGithub,
    title: 'Team-ready delivery',
    description:
      'Shared GitHub workflow, code reviews, and clean handoff — proven across team projects like Nusa-Q.',
    accent: 'border-t-nb-accent-4',
    iconBg: 'bg-nb-accent-4',
    href: '#project-nusa-q',
    linkLabel: 'See Nusa-Q',
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="relative bg-nb-bg py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 max-w-3xl sm:mb-16"
        >
          <p className="section-eyebrow mb-5 inline-block border-3 border-nb-border bg-nb-accent-3 px-3 py-1 text-xs font-bold text-nb-text shadow-nb-sm sm:text-sm">
            What I build
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-nb-text sm:text-4xl md:text-5xl">
            What I can <span className="bg-nb-accent px-2">build</span> for you.
          </h2>
          <p className="mt-5 text-base leading-8 text-nb-muted">
            Three real deliverables recruiters care about: polished web interfaces, practical AI/data workflows, and team-ready collaboration.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {outcomes.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`nb-card !border-t-[8px] ${item.accent} p-6 transition-shadow hover:shadow-nb-lg`}
            >
              <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center border-3 border-nb-border ${item.iconBg} shadow-nb-sm`}>
                <item.icon className="text-2xl text-nb-text" />
              </div>
              <h3 className="font-heading mb-3 text-xl font-bold text-nb-text">
                {item.title}
              </h3>
              <p className="text-sm leading-6 text-nb-muted">
                {item.description}
              </p>
              <Link
                href={item.href}
                className="nb-btn nb-btn-secondary mt-5"
              >
                {item.linkLabel}
                <HiArrowRight />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="#projects"
            className="nb-btn nb-btn-primary"
          >
            See all projects
            <HiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}
