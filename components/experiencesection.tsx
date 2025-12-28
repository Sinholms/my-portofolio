'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface TimelineItem {
  year: string
  title: string
  organization: string
  description: string
}

const experience: TimelineItem[] = [
  {
    year: '2024',
    title: 'Freelance Developer',
    organization: 'Self-Employed',
    description: 'Building web applications and mobile apps for various clients using React, Next.js, and Node.js.',
  },
  {
    year: '2023',
    title: 'Junior Developer',
    organization: 'Tech Company',
    description: 'Developed and maintained web applications. Collaborated with senior developers on various projects.',
  },
]

const education: TimelineItem[] = [
  {
    year: '2022',
    title: 'Bachelor of Computer Science',
    organization: 'University',
    description: 'Studying computer science with focus on software engineering and web development.',
  },
]

export default function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-32 bg-neutral-50 dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-neutral-500 dark:text-neutral-400 mb-6">
              Experience
            </p>
            <div className="space-y-12">
              {experience.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border-l-2 border-neutral-200 dark:border-neutral-800 pl-6"
                >
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">{item.year}</span>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mt-1">
                    {item.title}
                  </h3>
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm mt-1">
                    {item.organization}
                  </p>
                  <p className="text-neutral-600 dark:text-neutral-400 mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-neutral-500 dark:text-neutral-400 mb-6">
              Education
            </p>
            <div className="space-y-12">
              {education.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border-l-2 border-neutral-200 dark:border-neutral-800 pl-6"
                >
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">{item.year}</span>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mt-1">
                    {item.title}
                  </h3>
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm mt-1">
                    {item.organization}
                  </p>
                  <p className="text-neutral-600 dark:text-neutral-400 mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
