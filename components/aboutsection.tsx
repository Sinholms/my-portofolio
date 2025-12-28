'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-20 sm:py-32 bg-neutral-50 dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, rotate: -3 }}
            animate={isInView ? { opacity: 1, rotate: -2 } : {}}
            transition={{ duration: 0.8 }}
            whileHover={{ rotate: 0 }}
          >
            <div className="relative aspect-square max-w-sm sm:max-w-lg mx-auto lg:mx-0 -rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/images/monkey.jpg"
                alt="About"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
              {/* Decorative corner */}
              <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-neutral-300 dark:border-neutral-700 -z-10" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase text-neutral-500 dark:text-neutral-400 mb-4 sm:mb-6">
              About
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-neutral-900 dark:text-white leading-tight mb-6 sm:mb-8">
              Hi, I'm Falih<span className="inline-block animate-wave origin-bottom-right">👋</span>
            </h2>
            <div className="space-y-4 sm:space-y-6 text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm sm:text-base">
              <p>
                I'm a developer from Indonesia passionate about the intersection of <span className="text-neutral-900 dark:text-white font-medium">Web Development</span>, <span className="text-neutral-900 dark:text-white font-medium">Artificial Intelligence</span>, and <span className="text-neutral-900 dark:text-white font-medium">Data</span>.
                <span className="text-neutral-400 dark:text-neutral-500"> (Started with a broken WordPress blog at 15. It didn't survive, but my curiosity did.)</span>
              </p>
              <p>
                These days I build web apps with <span className="text-neutral-900 dark:text-white font-medium">React</span> & <span className="text-neutral-900 dark:text-white font-medium">Next.js</span>, explore machine learning models, and dive deep into data analysis. 
                I love turning raw data into insights and building intelligent solutions that actually work.
              </p>
              <p>
                When I'm not staring at VS Code or Jupyter notebooks, I'm probably tweaking my Arch Linux setup for the hundredth time 
                or exploring the latest AI tools and research.
              </p>
            </div>

            {/* Currently */}
            <div className="mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-neutral-200 dark:border-neutral-800">
              <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-neutral-500 dark:text-neutral-400 mb-4">
                Currently
              </p>
              <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <p>— Based in Indonesia</p>
                <p>— Learning TypeScript</p>
                <p>— Probably listening to lo-fi</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
