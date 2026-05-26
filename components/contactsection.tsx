'use client'

import Link from 'next/link'
import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiArrowRight, HiLocationMarker, HiMail } from 'react-icons/hi'
import { SiGithub, SiLinkedin } from 'react-icons/si'

type FormStatus = {
  type: 'idle' | 'success' | 'error'
  message: string
}

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<FormStatus>({ type: 'idle', message: '' })
  const [isPending, setIsPending] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsPending(true)
    setStatus({ type: 'idle', message: '' })

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const result = await response.json().catch(() => null)

      if (response.ok && result?.success) {
        setStatus({ type: 'success', message: 'Message sent. I will reply through email as soon as possible.' })
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus({ type: 'error', message: result?.error || 'Failed to send message. Please email me directly.' })
      }
    } catch {
      setStatus({ type: 'error', message: 'Connection error. Please email me directly if this keeps happening.' })
    } finally {
      setIsPending(false)
    }
  }

  return (
    <section id="contact" className="bg-white py-20 dark:bg-[#0f0f0f] sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12" ref={ref}>
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="section-eyebrow mb-5 text-xs font-semibold text-blue-700 dark:text-teal-300 sm:text-sm">
              Contact
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 dark:text-white sm:text-4xl md:text-5xl">
              Available for junior roles, internships, and project work.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-neutral-600 dark:text-neutral-300">
              For recruiters and HRD teams, the fastest way to reach me is email or LinkedIn. I am open to discussing frontend, web app, AI/data, and junior developer opportunities.
            </p>

            <div className="mt-8 divide-y divide-neutral-200 border-y border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800">
              <Link
                href="mailto:falihakbar14@gmail.com"
                className="flex items-center justify-between gap-4 py-4 text-neutral-800 transition-colors hover:text-blue-700 dark:text-neutral-200 dark:hover:text-teal-300"
              >
                <span className="flex items-center gap-3">
                  <HiMail className="text-xl text-neutral-400" />
                  falihakbar14@gmail.com
                </span>
                <HiArrowRight />
              </Link>
              <div className="flex items-center gap-3 py-4 text-neutral-800 dark:text-neutral-200">
                <HiLocationMarker className="text-xl text-neutral-400" />
                Indonesia
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="https://www.linkedin.com/in/muhammad-falih-akbar-364a1a321/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-neutral-300 px-4 py-2.5 text-sm font-semibold text-neutral-800 transition-colors hover:border-neutral-950 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-200 dark:hover:border-white dark:hover:bg-neutral-900"
              >
                <SiLinkedin />
                LinkedIn
              </Link>
              <Link
                href="https://github.com/Sinholms"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-neutral-300 px-4 py-2.5 text-sm font-semibold text-neutral-800 transition-colors hover:border-neutral-950 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-200 dark:hover:border-white dark:hover:bg-neutral-900"
              >
                <SiGithub />
                GitHub
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-800 dark:bg-neutral-950 sm:p-6"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full rounded-md border border-neutral-300 bg-white px-4 py-3 text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-blue-700 dark:border-neutral-700 dark:bg-[#0f0f0f] dark:text-white dark:focus:border-teal-300"
                  required
                  disabled={isPending}
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full rounded-md border border-neutral-300 bg-white px-4 py-3 text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-blue-700 dark:border-neutral-700 dark:bg-[#0f0f0f] dark:text-white dark:focus:border-teal-300"
                  required
                  disabled={isPending}
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  placeholder="Tell me about the role, project, or opportunity."
                  className="w-full resize-none rounded-md border border-neutral-300 bg-white px-4 py-3 text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-blue-700 dark:border-neutral-700 dark:bg-[#0f0f0f] dark:text-white dark:focus:border-teal-300"
                  required
                  disabled={isPending}
                />
              </div>

              {status.message && (
                <p
                  className={`rounded-md border px-4 py-3 text-sm ${
                    status.type === 'success'
                      ? 'border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-300'
                      : 'border-red-200 bg-red-50 text-red-800 dark:border-red-900 dark:bg-red-950 dark:text-red-300'
                  }`}
                >
                  {status.message}
                </p>
              )}

              <button
                type="submit"
                disabled={isPending}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-neutral-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 sm:w-auto"
              >
                {isPending ? 'Sending...' : 'Send message'}
                <HiArrowRight />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
