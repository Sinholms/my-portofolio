'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiPython,
  SiGit, SiDocker, SiArchlinux, SiPhp, SiMysql,
} from 'react-icons/si'

const skills = [
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Express', icon: SiExpress },
  { name: 'Python', icon: SiPython },
  { name: 'PHP', icon: SiPhp },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'MySQL', icon: SiMysql },
  { name: 'Git', icon: SiGit },
  { name: 'Docker', icon: SiDocker },
  { name: 'Arch', icon: SiArchlinux },
]

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-20 sm:py-32 bg-white dark:bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-10 sm:mb-16"
        >
          <p className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase text-neutral-500 dark:text-neutral-400 mb-4 sm:mb-6">
            Skills
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-neutral-900 dark:text-white leading-tight">
            Technologies I work with
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-px sm:gap-1">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group p-4 sm:p-6 bg-white dark:bg-[#111] border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
              >
                <Icon className="text-xl sm:text-2xl text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors mb-2 sm:mb-3" />
                <span className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">{skill.name}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
