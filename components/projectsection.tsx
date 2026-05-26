'use client'

import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import type { IconType } from 'react-icons'
import { HiArrowUpRight } from 'react-icons/hi2'
import { SiGithub, SiNextdotjs, SiPython } from 'react-icons/si'

interface Project {
  title: string
  type: string
  description: string
  role: string
  highlights: string[]
  tags: string[]
  link: string
  linkLabel: string
  github: string
  icon: IconType
  accent: 'blue' | 'teal'
}

const projects: Project[] = [
  {
    title: 'Computer Vision Gesture Prototype',
    type: 'AI / Computer Vision',
    description:
      'Real-time OpenCV and MediaPipe prototype for detecting hand gestures and face landmarks, built to understand webcam processing pipelines and landmark-driven interactions.',
    role: 'Solo developer',
    highlights: [
      'Processes webcam frames for real-time detection.',
      'Uses landmark data to identify interaction cues.',
      'Documents practical learning around OpenCV workflows.',
    ],
    tags: ['Python', 'OpenCV', 'MediaPipe'],
    link: 'https://youtu.be/6g5cXQ8u1Hk',
    linkLabel: 'Demo video',
    github: 'https://github.com/Sinholms/Monkey-Detection',
    icon: SiPython,
    accent: 'teal',
  },
  {
    title: 'Personal Portfolio',
    type: 'Web / Personal Brand',
    description:
      'Recruiter-facing portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion, focused on a clear professional narrative and polished responsive UI.',
    role: 'Designer and developer',
    highlights: [
      'Structured around HRD scan patterns: summary, skills, work, contact.',
      'Responsive sections with dark mode and accessible focus states.',
      'Contact form connected to a server route for direct messages.',
    ],
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    link: '#home',
    linkLabel: 'View page',
    github: 'https://github.com/Sinholms',
    icon: SiNextdotjs,
    accent: 'blue',
  },
]

function ProjectVisual({ project }: { project: Project }) {
  const accentClasses =
    project.accent === 'teal'
      ? 'bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-300'
      : 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300'

  return (
    <div className="relative min-h-[280px] overflow-hidden bg-neutral-950 p-6 text-white">
      <div className="absolute inset-x-0 top-0 flex gap-1 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
      </div>

      <div className="mt-10 flex h-full min-h-[210px] flex-col justify-between">
        <div>
          <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-md ${accentClasses}`}>
            <project.icon className="text-3xl" />
          </div>
          <p className="section-eyebrow text-xs font-semibold text-neutral-400">{project.type}</p>
          <h3 className="mt-3 max-w-sm text-2xl font-semibold tracking-tight">{project.title}</h3>
        </div>

        <div className="mt-8 space-y-3">
          <div className="h-2 w-11/12 rounded-full bg-white/20" />
          <div className="h-2 w-7/12 rounded-full bg-white/10" />
          <div className="h-2 w-9/12 rounded-full bg-white/10" />
        </div>
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="bg-neutral-50 py-20 dark:bg-[#0a0a0a] sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col justify-between gap-6 sm:mb-16 lg:flex-row lg:items-end"
        >
          <div className="max-w-3xl">
            <p className="section-eyebrow mb-5 text-xs font-semibold text-blue-700 dark:text-teal-300 sm:text-sm">
              Projects
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 dark:text-white sm:text-4xl md:text-5xl">
              Selected work with clear role and stack.
            </h2>
            <p className="mt-5 text-base leading-8 text-neutral-600 dark:text-neutral-300">
              A concise set of projects that shows technical curiosity, implementation range, and the ability to present work cleanly.
            </p>
          </div>

          <Link
            href="https://github.com/Sinholms"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-700 transition-colors hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white"
          >
            <SiGithub />
            View GitHub
            <HiArrowUpRight />
          </Link>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, index) => {
            const isExternal = project.link.startsWith('http')

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: index * 0.12 }}
                className="grid overflow-hidden border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-950 lg:grid-cols-[0.9fr_1.1fr]"
              >
                <ProjectVisual project={project} />

                <div className="p-6 sm:p-8">
                  <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <span className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">0{index + 1}</span>
                    <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">{project.role}</span>
                  </div>

                  <h3 className="text-2xl font-semibold tracking-tight text-neutral-950 dark:text-white sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-neutral-600 dark:text-neutral-300">{project.description}</p>

                  <ul className="mt-6 space-y-3">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-700 dark:bg-teal-300" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-neutral-200 px-3 py-1.5 text-xs font-semibold text-neutral-600 dark:border-neutral-800 dark:text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                      href={project.link}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noreferrer' : undefined}
                      className="inline-flex items-center gap-2 rounded-md bg-neutral-950 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
                    >
                      {project.linkLabel}
                      <HiArrowUpRight />
                    </Link>
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-md border border-neutral-300 px-4 py-2.5 text-sm font-semibold text-neutral-800 transition-colors hover:border-neutral-950 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-200 dark:hover:border-white dark:hover:bg-neutral-900"
                    >
                      Source code
                      <HiArrowUpRight />
                    </Link>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
