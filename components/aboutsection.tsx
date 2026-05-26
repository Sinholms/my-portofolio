'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const principles = [
  {
    title: 'Product-aware UI',
    description: 'I care about hierarchy, spacing, responsive behavior, and whether the page helps users complete the task.',
  },
  {
    title: 'Maintainable delivery',
    description: 'I keep components readable, reuse patterns intentionally, and avoid adding complexity unless it earns its place.',
  },
  {
    title: 'Data and AI mindset',
    description: 'I enjoy building with APIs, exploring model workflows, and turning raw information into useful interfaces.',
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
    <section id="about" className="bg-neutral-50 py-20 dark:bg-[#0a0a0a] sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12" ref={ref}>
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="section-eyebrow mb-5 text-xs font-semibold text-blue-700 dark:text-teal-300 sm:text-sm">
              About
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 dark:text-white sm:text-4xl md:text-5xl">
              Building useful products with a careful frontend mindset.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="space-y-6"
          >
            <div className="space-y-5 text-base leading-8 text-neutral-600 dark:text-neutral-300">
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
                  className="border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-950"
                >
                  <h3 className="mb-3 text-base font-semibold text-neutral-950 dark:text-white">{item.title}</h3>
                  <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-400">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
              {facts.map(([label, value]) => (
                <div
                  key={label}
                  className="grid gap-2 border-b border-neutral-200 px-5 py-4 last:border-b-0 dark:border-neutral-800 sm:grid-cols-[140px_1fr]"
                >
                  <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">{label}</span>
                  <span className="text-sm leading-6 text-neutral-800 dark:text-neutral-200">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
