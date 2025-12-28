'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, Variants } from 'framer-motion'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { HiArrowDown } from 'react-icons/hi'
import MagneticButton from './magneticbutton'

// Text reveal animation variants
const letterVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.03, duration: 0.5 }
  })
}

function AnimatedText({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  return (
    <span className={className}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          custom={i + delay}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          className="inline-block"
          style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  )
}

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center bg-white dark:bg-[#0f0f0f] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-24 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Text */}
          <div className="order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase text-neutral-500 dark:text-neutral-400 mb-4 sm:mb-6"
            >
              Web, AI, and Data Enthusiast
            </motion.p>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-neutral-900 dark:text-white leading-[0.95] sm:leading-[0.9] mb-6 sm:mb-8">
              <AnimatedText text="Muhammad" className="block" />
              <AnimatedText text="Falih Akbar" className="block font-semibold" delay={8} />
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-md mb-8 sm:mb-10 leading-relaxed"
            >
              I build things for the web. Currently obsessed with Next.js, clean UI, and making stuff that actually works.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
            >
              <MagneticButton href="#contact">
                <span className="block w-full sm:w-auto text-center px-6 sm:px-8 py-3 sm:py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium tracking-wide hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors">
                  Get in touch
                </span>
              </MagneticButton>
              <Link
                href="#projects"
                className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors link-underline"
              >
                View work
              </Link>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex gap-4 mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-neutral-200 dark:border-neutral-800"
            >
              <MagneticButton href="https://github.com/Sinholms">
                <span className="block p-2 text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                  <SiGithub size={20} />
                </span>
              </MagneticButton>
              <MagneticButton href="https://linkedin.com/in/falihakbar">
                <span className="block p-2 text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                  <SiLinkedin size={20} />
                </span>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
            animate={{ opacity: 1, scale: 1, rotate: 2 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="order-1 lg:order-2"
          >
            <div className="relative aspect-[4/5] max-w-xs sm:max-w-md mx-auto lg:ml-auto rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/images/monkey.jpg"
                alt="Muhammad Falih Akbar"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
              {/* Decorative corner */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-neutral-200 dark:border-neutral-800 -z-10" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <HiArrowDown className="text-neutral-400" size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
