'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiMail, HiLocationMarker } from 'react-icons/hi'

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isPending, setIsPending] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsPending(true)
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        alert('Message sent successfully!')
        setFormData({ name: '', email: '', message: '' })
      } else {
        alert('Failed to send message.')
      }
    } catch {
      alert('Connection error. Please try again.')
    } finally {
      setIsPending(false)
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-32 bg-white dark:bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase text-neutral-500 dark:text-neutral-400 mb-4 sm:mb-6">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-neutral-900 dark:text-white leading-tight mb-6 sm:mb-8">
              Let's work
              <span className="font-semibold"> together</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8 sm:mb-12 max-w-md">
              Have a project in mind or just want to chat? Feel free to reach out.
              I'm always open to discussing new opportunities.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <HiMail className="text-xl text-neutral-400" />
                <span className="text-neutral-900 dark:text-white">falihakbar14@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <HiLocationMarker className="text-xl text-neutral-400" />
                <span className="text-neutral-900 dark:text-white">Indonesia</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm text-neutral-500 dark:text-neutral-400 mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-0 py-3 bg-transparent border-b border-neutral-300 dark:border-neutral-700 focus:border-neutral-900 dark:focus:border-white outline-none transition-colors text-neutral-900 dark:text-white"
                  required
                  disabled={isPending}
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-500 dark:text-neutral-400 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-0 py-3 bg-transparent border-b border-neutral-300 dark:border-neutral-700 focus:border-neutral-900 dark:focus:border-white outline-none transition-colors text-neutral-900 dark:text-white"
                  required
                  disabled={isPending}
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-500 dark:text-neutral-400 mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-0 py-3 bg-transparent border-b border-neutral-300 dark:border-neutral-700 focus:border-neutral-900 dark:focus:border-white outline-none transition-colors text-neutral-900 dark:text-white resize-none"
                  required
                  disabled={isPending}
                />
              </div>
              <button
                type="submit"
                disabled={isPending}
                className="mt-8 px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium tracking-wide hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors disabled:opacity-50"
              >
                {isPending ? 'Sending...' : 'Send message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}