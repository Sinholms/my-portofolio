'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import type { IconType } from 'react-icons'
import {
  SiArchlinux,
  SiDocker,
  SiExpress,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'

interface Skill {
  name: string
  icon: IconType
  level?: 'Advanced' | 'Intermediate' | 'Foundational'
}

const levelColor: Record<string, string> = {
  Advanced: 'bg-nb-accent',
  Intermediate: 'bg-nb-accent-3',
  Foundational: 'bg-nb-accent-5',
}

interface SkillGroup {
  title: string
  description: string
  skills: Skill[]
  accent: string
  headerBg: string
}

const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    description: 'Building responsive, accessible, and polished product interfaces.',
    accent: 'border-t-nb-accent',
    headerBg: 'bg-nb-accent',
    skills: [
      { name: 'React', icon: SiReact, level: 'Advanced' },
      { name: 'Next.js', icon: SiNextdotjs, level: 'Advanced' },
      { name: 'TypeScript', icon: SiTypescript, level: 'Advanced' },
      { name: 'JavaScript', icon: SiJavascript, level: 'Advanced' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 'Advanced' },
    ],
  },
  {
    title: 'Backend and data',
    description: 'Connecting interfaces to APIs, databases, and practical data workflows.',
    accent: 'border-t-nb-accent-2',
    headerBg: 'bg-nb-accent-2',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, level: 'Intermediate' },
      { name: 'Express', icon: SiExpress, level: 'Intermediate' },
      { name: 'Python', icon: SiPython, level: 'Intermediate' },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 'Intermediate' },
      { name: 'MongoDB', icon: SiMongodb, level: 'Foundational' },
      { name: 'Prisma', icon: SiPrisma, level: 'Intermediate' },
    ],
  },
  {
    title: 'Tools',
    description: 'Daily tooling for shipping, debugging, and maintaining projects.',
    accent: 'border-t-nb-accent-4',
    headerBg: 'bg-nb-accent-4',
    skills: [
      { name: 'Git', icon: SiGit, level: 'Intermediate' },
      { name: 'Docker', icon: SiDocker, level: 'Foundational' },
      { name: 'Arch Linux', icon: SiArchlinux, level: 'Intermediate' },
    ],
  },
]

const workflow = ['Component architecture', 'Responsive layouts', 'API integration', 'Clean code handoff']

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="surface-grid bg-nb-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 max-w-3xl sm:mb-16"
        >
          <p className="section-eyebrow mb-5 inline-block border-3 border-nb-border bg-nb-accent-5 px-3 py-1 text-xs font-bold text-nb-text shadow-nb-sm sm:text-sm">
            My stack
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-nb-text sm:text-4xl md:text-5xl">
            A focused stack for <span className="border-2 border-nb-border bg-nb-accent-2 px-2 text-nb-text">modern web</span> products.
          </h2>
          <p className="mt-5 text-base leading-8 text-nb-muted">
            The portfolio is intentionally organized around the tools I can explain, use, and keep improving in real project contexts.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
              className={`nb-card !border-t-[8px] ${group.accent} overflow-hidden`}
            >
              <div className={`${group.headerBg} border-b-3 border-nb-border px-5 py-3`}>
                <h3 className="font-heading text-lg font-bold text-nb-text">{group.title}</h3>
              </div>
              <div className="p-5">
                <p className="mb-5 text-sm leading-6 text-nb-muted">{group.description}</p>
                <div className="grid gap-2">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex min-h-11 items-center gap-3 border-2 border-nb-border bg-nb-bg px-3 py-2 shadow-nb-sm transition-all hover:shadow-nb hover:-translate-y-0.5"
                    >
                      <skill.icon className="text-xl text-nb-text" />
                      <span className="flex-1 text-sm font-bold text-nb-text">{skill.name}</span>
                      {skill.level && (
                        <span className={`h-2.5 w-2.5 rounded-full border border-nb-border ${levelColor[skill.level]}`} title={skill.level} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="nb-card mt-6 !bg-nb-dark !shadow-nb-accent p-5 sm:grid sm:grid-cols-4"
        >
          {workflow.map((item) => (
            <div key={item} className="py-1 text-sm font-bold text-white">
              <span className="mr-3 inline-block h-3 w-3 border-2 border-white bg-nb-accent" />
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
