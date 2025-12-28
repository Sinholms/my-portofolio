'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiArrowUpRight } from 'react-icons/hi2'

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
  github: string
}

const projects: Project[] = [
  {
    title: 'Monkey Detection',
    description: 'Built this during a hackathon weekend. Uses computer vision to detect hand gestures and face landmarks in real-time. Was way harder than I expected but learned a ton about OpenCV.',
    image: '/images/monkey.jpg',
    tags: ['Python', 'OpenCV', 'Mediapipe'],
    link: 'https://youtu.be/6g5cXQ8u1Hk',
    github: 'https://github.com/Sinholms/Monkey-Detection',
  },
  {
    title: 'This Website',
    description: "You're looking at it. Rebuilt from scratch because my old portfolio was boring. Spent way too much time on the animations but I regret nothing.",
    image: '/images/monkey.jpg',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    link: '#',
    github: 'https://github.com/Sinholms',
  },
]

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-20 sm:py-32 bg-neutral-50 dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 mb-12 sm:mb-16"
        >
          <div>
            <p className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase text-neutral-500 dark:text-neutral-400 mb-4 sm:mb-6">
              Work
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-neutral-900 dark:text-white">
              Selected projects
            </h2>
          </div>
          <Link
            href="https://github.com/Sinholms"
            target="_blank"
            className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            View all
            <HiArrowUpRight />
          </Link>
        </motion.div>

        <div className="space-y-16 sm:space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
              {/* Image */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <motion.div 
                  className="relative aspect-[4/3] overflow-hidden group"
                  style={{ rotate: index % 2 === 0 ? -1 : 1 }}
                  whileHover={{ rotate: 0, scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
                </motion.div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <span className="text-sm text-neutral-400 dark:text-neutral-500">0{index + 1}</span>
                <h3 className="text-2xl md:text-3xl font-semibold text-neutral-900 dark:text-white mt-2 mb-4">
                  {project.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-6">
                  <Link
                    href={project.link}
                    target="_blank"
                    className="text-sm font-medium text-neutral-900 dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors flex items-center gap-1"
                  >
                    View project <HiArrowUpRight />
                  </Link>
                  <Link
                    href={project.github}
                    target="_blank"
                    className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                  >
                    Source code
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}