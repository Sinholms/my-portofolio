'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import type { IconType } from 'react-icons'
import {
  SiArchlinux,
  SiCss3,
  SiDocker,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
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
}

interface SkillGroup {
  title: string
  description: string
  skills: Skill[]
}

const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    description: 'Building responsive, accessible, and polished product interfaces.',
    skills: [
      { name: 'React', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss3 },
    ],
  },
  {
    title: 'Backend and data',
    description: 'Connecting interfaces to APIs, databases, and practical data workflows.',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express', icon: SiExpress },
      { name: 'Python', icon: SiPython },
      { name: 'PHP', icon: SiPhp },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MySQL', icon: SiMysql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Prisma', icon: SiPrisma },
    ],
  },
  {
    title: 'Tools',
    description: 'Daily tooling for shipping, debugging, and maintaining projects.',
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'Docker', icon: SiDocker },
      { name: 'Arch Linux', icon: SiArchlinux },
    ],
  },
]

const workflow = ['Component architecture', 'Responsive layouts', 'API integration', 'Clean code handoff']

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="bg-white py-20 dark:bg-[#0f0f0f] sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 max-w-3xl sm:mb-16"
        >
          <p className="section-eyebrow mb-5 text-xs font-semibold text-blue-700 dark:text-teal-300 sm:text-sm">
            Skills
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 dark:text-white sm:text-4xl md:text-5xl">
            A focused stack for modern web products.
          </h2>
          <p className="mt-5 text-base leading-8 text-neutral-600 dark:text-neutral-300">
            The portfolio is intentionally organized around the tools I can explain, use, and keep improving in real project contexts.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-3">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
              className="border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-800 dark:bg-neutral-950"
            >
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-neutral-950 dark:text-white">{group.title}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400">{group.description}</p>
              </div>

              <div className="grid gap-2">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex min-h-11 items-center gap-3 border border-neutral-200 bg-white px-3 py-2 dark:border-neutral-800 dark:bg-[#0f0f0f]"
                  >
                    <skill.icon className="text-xl text-blue-700 dark:text-teal-300" />
                    <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-6 grid gap-3 border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-950 sm:grid-cols-4"
        >
          {workflow.map((item) => (
            <div key={item} className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
              <span className="mr-3 inline-block h-2 w-2 rounded-full bg-blue-700 dark:bg-teal-300" />
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
