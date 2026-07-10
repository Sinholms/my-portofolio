'use client'

import Link from 'next/link'
import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiArrowRight, HiLocationMarker, HiMail } from 'react-icons/hi'
import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa6'

type FormStatus = {
  type: 'idle' | 'success' | 'error'
  message: string
}

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', website: '' })
  const [status, setStatus] = useState<FormStatus>({ type: 'idle', message: '' })
  const [isPending, setIsPending] = useState(false)
  const [emailError, setEmailError] = useState('')

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsPending(true)
    setStatus({ type: 'idle', message: '' })

    if (!emailRegex.test(formData.email)) {
      setEmailError('Enter a valid email like name@company.com')
      setIsPending(false)
      return
    }
    setEmailError('')

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const result = await response.json().catch(() => null)

      if (response.ok && result?.success) {
        setStatus({ type: 'success', message: 'Message sent. I will reply through email as soon as possible.' })
        setFormData({ name: '', email: '', message: '', website: '' })
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
    <section id="contact" className="surface-dots relative bg-nb-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12" ref={ref}>
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="section-eyebrow mb-5 inline-block border-3 border-nb-border bg-nb-accent px-3 py-1 text-xs font-bold text-nb-text shadow-nb-sm sm:text-sm">
              Get in touch
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-nb-text sm:text-4xl md:text-5xl">
              Available for <span className="border-2 border-nb-border bg-nb-accent-2 px-2 text-nb-text">junior roles</span>, internships, and project work.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-nb-muted">
              For recruiters and HRD teams, the fastest way to reach me is email or LinkedIn. I am open to discussing frontend, web app, AI/data, and junior developer opportunities.
            </p>

            <div className="mt-8 border-y-3 border-nb-border">
              <Link
                href="mailto:falihakbar14@gmail.com"
                className="flex items-center justify-between gap-4 border-b-3 border-nb-border py-4 text-nb-text transition-colors hover:bg-nb-accent/20"
              >
                <span className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center border-3 border-nb-border bg-nb-accent-3 shadow-nb-sm">
                    <HiMail className="text-lg text-nb-text" />
                  </span>
                  <span className="font-bold">falihakbar14@gmail.com</span>
                </span>
                <HiArrowRight />
              </Link>
              <div className="flex items-center gap-3 py-4 text-nb-text">
                <span className="inline-flex h-10 w-10 items-center justify-center border-3 border-nb-border bg-nb-accent-4 shadow-nb-sm">
                  <HiLocationMarker className="text-lg text-white" />
                </span>
                <span className="font-bold">Indonesia</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="https://www.linkedin.com/in/muhammad-falih-akbar-364a1a321/"
                target="_blank"
                rel="noreferrer"
                className="nb-btn nb-btn-accent"
              >
                <FaLinkedin />
                LinkedIn
              </Link>
              <Link
                href="https://github.com/Sinholms"
                target="_blank"
                rel="noreferrer"
                className="nb-btn nb-btn-secondary"
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
            className="nb-card !shadow-nb-xl p-5 sm:p-6"
          >
            <div className="mb-5 border-b-3 border-nb-border bg-nb-accent-4 px-4 py-3">
              <p className="font-heading text-sm font-bold text-white">Send a message</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  type="text"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-bold text-nb-text">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  className="nb-input"
                  required
                  maxLength={100}
                  disabled={isPending}
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-bold text-nb-text">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value })
                    if (emailError) setEmailError('')
                  }}
                  onBlur={() => {
                    if (formData.email && !emailRegex.test(formData.email)) {
                      setEmailError('Enter a valid email like name@company.com')
                    }
                  }}
                  placeholder="name@company.com"
                  className="nb-input"
                  required
                  maxLength={254}
                  disabled={isPending}
                />
                {emailError && (
                  <p className="mt-2 border-2 border-nb-border bg-nb-accent-3 px-3 py-2 text-xs font-bold text-nb-text">
                    {emailError}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-bold text-nb-text">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  placeholder="Tell me about the role, project, or opportunity."
                  className="nb-input resize-none"
                  required
                  maxLength={5000}
                  disabled={isPending}
                />
              </div>

              {status.message && (
                <p
                  className={`border-3 px-4 py-3 text-sm font-bold ${
                    status.type === 'success'
                      ? 'border-nb-border bg-nb-accent-2 text-nb-text'
                      : 'border-nb-border bg-nb-accent-3 text-nb-text'
                  }`}
                >
                  {status.message}
                </p>
              )}

              <button
                type="submit"
                disabled={isPending}
                className="nb-btn nb-btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50"
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
