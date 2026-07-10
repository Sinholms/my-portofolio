'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface TimelineItem {
  year: string
  title: string
  organization: string
  description: string
  highlights?: string[]
}

const experience: TimelineItem[] = [
  {
    year: '2024 — Now',
    title: 'Freelance Web Developer',
    organization: 'Independent Contractor',
    description: 'Ship client-facing web applications using React, Next.js, and Node.js with focus on responsive design, accessibility, and clean project delivery.',
      highlights: [
        'Built an interactive SVG regional risk map with pan, zoom, and severity colors for explainable tender review (LPSE-X).',
        'Delivered client-facing web interfaces with custom neobrutalist design systems and accessible forms.',
        'Managed end-to-end delivery from requirements to deployment on Vercel.',
      ],
  },
  {
    year: '2023',
    title: 'Junior Developer',
    organization: 'Freelance & Team Projects · vaskoyudha',
    description: 'Contributed to full-stack web development projects in collaborative workflows, building UI components and integrating with backend services.',
      highlights: [
        'Contributed to team-built web products in a shared GitHub workflow with code reviews and feature branches (Nusa-Q).',
        'Developed interactive UI components and integrated them with backend APIs.',
        'Shipped across the stack from frontend interfaces to API integration.',
      ],
  },
]

const education: TimelineItem[] = [
  {
    year: '2022 — Now',
    title: 'Bachelor of Computer Science',
    organization: 'University in Indonesia',
    description: 'Pursuing a Computer Science degree with coursework in software engineering, web development, and introductory AI/data science.',
    highlights: [
      'Studying software engineering principles, data structures, and system design',
      'Exploring machine learning and data science through academic projects and self-study',
      'Building and shipping web applications as part of coursework and independent practice',
    ],
  },
]

const yearColors = ['bg-nb-accent', 'bg-nb-accent-2', 'bg-nb-accent-4', 'bg-nb-accent-3']

function TimelineCard({ item, index, side }: { item: TimelineItem; index: number; side: 'work' | 'edu' }) {
  const yearBg = side === 'work' ? yearColors[index % 2] : yearColors[(index + 2) % 4]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="relative pl-10"
    >
      <span className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center">
        <span className={`h-6 w-6 border-3 border-nb-border ${yearBg}`} />
      </span>

      <div className="nb-card p-5">
        <span className={`nb-card mb-3 inline-block !border-3 !shadow-nb-sm border-nb-border ${yearBg} px-3 py-1 text-xs font-bold text-nb-text`}>
          {item.year}
        </span>
        <h3 className="font-heading text-lg font-bold text-nb-text">
          {item.title}
        </h3>
        <p className="mt-1 text-sm font-bold text-nb-muted">
          {item.organization}
        </p>
        <p className="mt-3 text-sm leading-6 text-nb-muted">
          {item.description}
        </p>
        {item.highlights && item.highlights.length > 0 && (
          <ul className="mt-4 space-y-2">
            {item.highlights.map((h) => (
              <li key={h} className="flex gap-2 text-sm leading-5 text-nb-muted">
                <span className="mt-1.5 h-2 w-2 shrink-0 border-2 border-nb-border bg-nb-accent-2" />
                {h}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  )
}

export default function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="surface-dots-dark nb-section-frame relative overflow-hidden py-20 sm:py-28">
      <div className="absolute -top-5 right-16 hidden h-10 w-10 -rotate-12 border-3 border-nb-border bg-nb-accent-2 shadow-nb lg:block" />
      <div className="absolute bottom-12 left-10 hidden h-14 w-14 rotate-6 border-3 border-white bg-nb-accent-3 shadow-nb-accent-5 lg:block" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 max-w-3xl sm:mb-16"
        >
          <p className="section-eyebrow mb-5 inline-block border-3 border-nb-border bg-nb-accent px-3 py-1 text-xs font-bold text-nb-text shadow-nb-sm sm:text-sm">
            My path
          </p>
          <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            <span className="nb-heading-block">
              Work history and education.
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="section-eyebrow mb-8 inline-block border-3 border-white bg-nb-accent px-4 py-2 text-sm font-bold text-nb-text shadow-nb-accent-2"
            >
              Work
            </motion.h3>
            <div className="space-y-6 border-l-3 border-nb-border">
              {experience.map((item, index) => (
                <TimelineCard key={item.title} item={item} index={index} side="work" />
              ))}
            </div>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="section-eyebrow mb-8 inline-block border-3 border-white bg-nb-accent-4 px-4 py-2 text-sm font-bold text-white shadow-nb-accent-3"
            >
              Education
            </motion.h3>
            <div className="space-y-6 border-l-3 border-nb-border">
              {education.map((item, index) => (
                <TimelineCard key={item.title} item={item} index={index} side="edu" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
