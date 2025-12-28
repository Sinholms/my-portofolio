'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { HiSun, HiMoon } from 'react-icons/hi'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, resolvedTheme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return <div className="w-9 h-9" />

  const toggleTheme = () => {
    const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark'
    console.log('Toggling theme from', resolvedTheme, 'to', newTheme)
    setTheme(newTheme)
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
      aria-label="Toggle theme"
    >
      {resolvedTheme === 'dark' ? (
        <HiSun className="text-lg text-yellow-500" />
      ) : (
        <HiMoon className="text-lg text-neutral-600" />
      )}
    </button>
  )
}