'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiCode, HiDeviceMobile, HiDatabase } from 'react-icons/hi'

const services = [
  {
    icon: HiCode,
    title: 'Web Development',
    description: 'Building responsive and performant websites using modern frameworks like React and Next.js.',
  },
  {
    icon: HiDeviceMobile,
    title: 'Mobile Development',
    description: 'Creating cross-platform mobile applications with React Native for iOS and Android.',
  },
  {
    icon: HiDatabase,
    title: 'Backend Development',
    description: 'Developing robust APIs and server-side applications with Node.js and databases.',
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="py-32 bg-white dark:bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-neutral-500 dark:text-neutral-400 mb-6">
            Services
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 dark:text-white leading-tight">
            What I
            <span className="font-semibold"> offer</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-neutral-200 dark:bg-neutral-800">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-[#0f0f0f] p-10 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
            >
              <service.icon className="text-3xl text-neutral-400 mb-6" />
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
