'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const principles = [
  {
    title: 'Product-aware UI',
    description: 'I care about hierarchy, spacing, responsive behavior, and whether the page helps users complete the task.',
    accent: 'bg-nb-accent',
    borderAccent: 'border-t-nb-accent',
  },
  {
    title: 'Maintainable delivery',
    description: 'I keep components readable, reuse patterns intentionally, and avoid adding complexity unless it earns its place.',
    accent: 'bg-nb-accent-2',
    borderAccent: 'border-t-nb-accent-2',
  },
  {
    title: 'Data and AI mindset',
    description: 'I enjoy building with APIs, exploring model workflows, and turning raw information into useful interfaces.',
    accent: 'bg-nb-accent-4',
    borderAccent: 'border-t-nb-accent-4',
  },
]

const facts = [
  ['Based in', 'Indonesia'],
  ['Looking for', 'Junior developer, internship, and freelance opportunities'],
  ['Working style', 'Clear communication, fast learning, careful implementation'],
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="surface-dots-dark nb-section-frame relative overflow-hidden py-20 sm:py-28">
      {/* Decorative shape */}
      <div className="absolute -top-6 left-12 hidden h-12 w-12 rotate-12 border-3 border-nb-border bg-nb-accent shadow-nb lg:block" />
      <div className="absolute right-10 top-12 hidden h-16 w-16 rotate-12 border-3 border-white bg-nb-accent-4 shadow-[6px_6px_0_#00C9A7] lg:block" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12" ref={ref}>
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="section-eyebrow mb-5 inline-block border-3 border-nb-accent bg-nb-accent px-3 py-1 text-xs font-bold text-nb-text shadow-nb-sm sm:text-sm">
              About
            </p>
            <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              <span className="nb-heading-block">
                Building useful products with a careful frontend mindset.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="space-y-6"
          >
            <div className="space-y-5 text-base leading-8 text-neutral-300">
              <p>
                I am Muhammad Falih Akbar, a developer from Indonesia focused on modern web development with React, Next.js, and TypeScript. My strongest interest is building interfaces that look polished, load clearly, and communicate the value of the product quickly.
              </p>
              <p>
                I also explore artificial intelligence and data workflows, especially where they can support smarter web products. I like projects that combine clean UI, practical backend integration, and a clear reason for every feature.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {principles.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.18 + index * 0.08 }}
                  className={`nb-card !border-t-[8px] !border-t-transparent ${item.borderAccent} p-5`}
                >
                  <div className={`mb-4 inline-block h-4 w-4 border-2 border-nb-border ${item.accent}`} />
                  <h3 className="font-heading mb-3 text-base font-bold text-nb-text">{item.title}</h3>
                  <p className="text-sm leading-6 text-nb-muted">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="nb-card !shadow-nb-accent">
              {facts.map(([label, value]) => (
                <div
                  key={label}
                  className="grid gap-2 border-b-3 border-nb-border px-5 py-4 last:border-b-0 sm:grid-cols-[140px_1fr]"
                >
                  <span className="text-sm font-bold text-nb-accent">{label}</span>
                  <span className="text-sm leading-6 text-nb-text">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
