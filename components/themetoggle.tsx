'use client'

import { useTheme } from 'next-themes'
import { useSyncExternalStore } from 'react'
import { HiSun, HiMoon } from 'react-icons/hi'

const subscribe = () => () => {}
const getClientSnapshot = () => true
const getServerSnapshot = () => false

export default function ThemeToggle() {
  const mounted = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot)
  const { resolvedTheme, setTheme } = useTheme()

  if (!mounted) return <div className="w-9 h-9" />

  const toggleTheme = () => {
    const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  return (
    <button
      onClick={toggleTheme}
      className="grid h-9 w-9 place-items-center rounded-md border border-neutral-200 bg-white text-neutral-700 transition-colors hover:border-neutral-300 hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-200 dark:hover:border-neutral-700 dark:hover:bg-neutral-900"
      aria-label="Toggle theme"
    >
      {resolvedTheme === 'dark' ? (
        <HiSun className="text-lg text-amber-400" />
      ) : (
        <HiMoon className="text-lg text-neutral-600" />
      )}
    </button>
  )
}
