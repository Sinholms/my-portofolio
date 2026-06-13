'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiCode, HiDeviceMobile, HiDatabase } from 'react-icons/hi'

const services = [
  {
    icon: HiCode,
    title: 'Web Development',
    description: 'Building responsive and performant websites using modern frameworks like React and Next.js.',
    accent: 'bg-nb-accent',
    shadow: 'shadow-nb-accent',
  },
  {
    icon: HiDeviceMobile,
    title: 'Mobile Development',
    description: 'Creating cross-platform mobile applications with React Native for iOS and Android.',
    accent: 'bg-nb-accent-2',
    shadow: 'shadow-nb-accent-2',
  },
  {
    icon: HiDatabase,
    title: 'Backend Development',
    description: 'Developing robust APIs and server-side applications with Node.js and databases.',
    accent: 'bg-nb-accent-4',
    shadow: 'hover:shadow-nb',
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="relative bg-nb-bg py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 max-w-3xl sm:mb-16"
        >
          <p className="section-eyebrow mb-5 inline-block border-3 border-nb-border bg-nb-accent-3 px-3 py-1 text-xs font-bold text-nb-text shadow-nb-sm sm:text-sm">
            Services
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-nb-text sm:text-4xl md:text-5xl">
            What I can <span className="bg-nb-accent px-2">build</span> for you.
          </h2>
          <p className="mt-5 text-base leading-8 text-nb-muted">
            From frontend interfaces to backend APIs and mobile apps, I offer practical development skills across the modern web stack.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`nb-card group ${service.shadow} p-6 transition-shadow hover:shadow-nb-lg`}
            >
              <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center border-3 border-nb-border ${service.accent} shadow-nb-sm`}>
                <service.icon className="text-2xl text-nb-text" />
              </div>
              <h3 className="font-heading mb-3 text-xl font-bold text-nb-text">
                {service.title}
              </h3>
              <p className="text-sm leading-6 text-nb-muted">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
