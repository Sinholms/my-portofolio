'use client'

import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import type { IconType } from 'react-icons'
import { HiArrowUpRight } from 'react-icons/hi2'
import { SiGithub, SiNextdotjs, SiReact } from 'react-icons/si'

interface Project {
  title: string
  type: string
  description: string
  role: string
  highlights: string[]
  tags: string[]
  link?: string
  linkLabel?: string
  github?: string
  sourceLabel?: string
  statusLabel?: string
  icon: IconType
  accent: string
  iconBg: string
  featured?: boolean
}

const projects: Project[] = [
  {
    title: 'LPSE-X — Phase 3',
    type: 'AI / Procurement Risk Intelligence',
    description:
      'Offline procurement risk-triage platform that combines a local ML inference pipeline, FastAPI services, and a React command center for explainable tender review.',
    role: 'Team contributor · 3 linked commits',
    highlights: [
      'Reworked data, feature, label, model, and inference modules for the offline pipeline.',
      'Improved environment configuration and test compatibility for Windows development.',
      'Built an interactive SVG regional risk map with accurate bubbles, severity colors, pan, and zoom.',
    ],
    tags: ['React', 'TypeScript', 'Python', 'FastAPI', 'XGBoost'],
    link: 'https://github.com/vaskoyudha/Phase3_LPSE-x/commits?author=Sinholms',
    linkLabel: 'View my contributions',
    github: 'https://github.com/vaskoyudha/Phase3_LPSE-x',
    sourceLabel: 'Team repository',
    icon: SiReact,
    accent: 'bg-nb-accent-4',
    iconBg: 'bg-nb-accent-2',
    featured: true,
  },
  {
    title: 'Nusa-Q',
    type: 'Collaborative Web Product',
    description:
      'Team-based web project developed in a shared GitHub workflow with the vaskoyudha team, focused on turning a product concept into a clear and usable digital experience.',
    role: 'Team contributor',
    highlights: [
      'Collaborated within a team-owned codebase and delivery workflow.',
      'Contributed to product-facing web implementation and integration.',
      'Worked across shared requirements, iteration, and project handoff.',
    ],
    tags: ['Web Development', 'Team Project', 'Product UI', 'GitHub'],
    link: 'https://nusa-q.vercel.app',
    linkLabel: 'Live demo',
    icon: SiGithub,
    accent: 'bg-nb-accent-2',
    iconBg: 'bg-nb-accent',
  },
  {
    title: 'Personal Portfolio',
    type: 'Web / Personal Brand',
    description:
      'Recruiter-facing portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion, focused on a clear professional narrative and polished responsive UI.',
    role: 'Designer and developer',
    highlights: [
      'Structured around HRD scan patterns: summary, skills, work, contact.',
      'Responsive sections with neobrutalist design and accessible focus states.',
      'Contact form connected to a server route for direct messages.',
    ],
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    link: 'https://falih-portfolio.vercel.app/',
    linkLabel: 'Live demo',
    github: 'https://github.com/Sinholms/my-portofolio',
    sourceLabel: 'Source code',
    icon: SiNextdotjs,
    accent: 'bg-nb-accent',
    iconBg: 'bg-nb-accent-3',
  },
]

function ProjectVisual({ project }: { project: Project }) {
  return (
    <div className={`relative min-h-[280px] overflow-hidden border-r-0 border-nb-border ${project.accent} p-6 lg:border-r-3`}>
      <div className="absolute inset-x-0 top-0 flex gap-2 border-b-3 border-nb-border bg-white/10 px-4 py-3">
        <span className="h-3.5 w-3.5 border-2 border-nb-border bg-nb-accent-3" />
        <span className="h-3.5 w-3.5 border-2 border-nb-border bg-nb-accent" />
        <span className="h-3.5 w-3.5 border-2 border-nb-border bg-nb-accent-2" />
      </div>

      <div className="mt-10 flex h-full min-h-[210px] flex-col justify-between">
        <div>
          <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center border-3 border-nb-border ${project.iconBg} shadow-nb-sm`}>
            <project.icon className="text-3xl text-nb-text" />
          </div>
          <span className="inline-block border-2 border-nb-border bg-white/90 px-2 py-1 text-xs font-bold text-nb-text shadow-nb-sm">{project.type}</span>
          <h3 className="font-heading mt-3 max-w-sm text-2xl font-bold tracking-tight text-nb-text">{project.title}</h3>
        </div>

        <div className="mt-8 space-y-3">
          <div className="h-3 w-11/12 border-2 border-nb-border bg-white/30" />
          <div className="h-3 w-7/12 border-2 border-nb-border bg-white/20" />
          <div className="h-3 w-9/12 border-2 border-nb-border bg-white/20" />
        </div>
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="bg-nb-bg py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col justify-between gap-6 sm:mb-16 lg:flex-row lg:items-end"
        >
          <div className="max-w-3xl">
            <p className="section-eyebrow mb-5 inline-block border-3 border-nb-border bg-nb-accent-2 px-3 py-1 text-xs font-bold text-nb-text shadow-nb-sm sm:text-sm">
              Selected work
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-nb-text sm:text-4xl md:text-5xl">
              Selected work with <span className="bg-nb-accent px-2">clear role</span> and stack.
            </h2>
            <p className="mt-5 text-base leading-8 text-nb-muted">
              A focused mix of team contributions and independent work, with
              clear ownership, implementation details, and technical context.
            </p>
          </div>

          <Link
            href="https://github.com/Sinholms"
            target="_blank"
            rel="noreferrer"
            className="nb-btn nb-btn-secondary"
          >
            <SiGithub />
            View GitHub
            <HiArrowUpRight />
          </Link>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => {
            const isExternal = project.link?.startsWith('http') ?? false
            const projectId = `project-${project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')}`

            return (
              <motion.article
                key={project.title}
                id={projectId}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: index * 0.12 }}
                className="nb-card !shadow-nb-xl grid overflow-hidden lg:grid-cols-[0.9fr_1.1fr]"
              >
                <ProjectVisual project={project} />

                <div className="p-6 sm:p-8">
                  <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                      {project.featured && (
                        <span className="border-2 border-nb-border bg-nb-accent-3 px-3 py-1 text-xs font-bold uppercase tracking-wide text-nb-text shadow-nb-sm">
                          Featured collaboration
                        </span>
                      )}
                    </div>
                    <span className="border-2 border-nb-border bg-nb-cream px-3 py-1 text-sm font-bold text-nb-muted">{project.role}</span>
                  </div>

                  <h3 className="font-heading text-2xl font-bold tracking-tight text-nb-text sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-nb-muted">{project.description}</p>

                  <ul className="mt-6 space-y-3">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-sm leading-6 text-nb-muted">
                        <span className="mt-2 h-3 w-3 shrink-0 border-2 border-nb-border bg-nb-accent-2" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border-3 border-nb-border bg-nb-bg px-3 py-1.5 text-xs font-bold text-nb-text shadow-nb-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    {project.link && project.linkLabel && (
                      <Link
                        href={project.link}
                        target={isExternal ? '_blank' : undefined}
                        rel={isExternal ? 'noreferrer' : undefined}
                        className="nb-btn nb-btn-primary"
                      >
                        {project.linkLabel}
                        <HiArrowUpRight />
                      </Link>
                    )}
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="nb-btn nb-btn-secondary"
                      >
                        {project.sourceLabel ?? 'Source code'}
                        <HiArrowUpRight />
                      </Link>
                    )}
                    {project.statusLabel && (
                      <span className="inline-flex items-center border-3 border-nb-border bg-nb-cream px-4 py-3 text-sm font-bold text-nb-muted shadow-nb-sm">
                        {project.statusLabel}
                      </span>
                    )}
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
