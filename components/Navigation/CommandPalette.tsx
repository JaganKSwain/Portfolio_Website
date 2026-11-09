'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  Download,
  Mail,
  Copy,
  Check,
  Terminal,
  ExternalLink,
  Sparkles,
  ArrowRight,
  Code2,
  GraduationCap,
  Briefcase,
  Award,
} from 'lucide-react'
import { personalInfo } from '@/data/personal'

interface CommandItem {
  id: string
  title: string
  category: 'Navigation' | 'Action' | 'External'
  icon: any
  action: () => void
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [copied, setCopied] = useState(false)

  // Listen for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen((prev) => !prev)
      } else if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const scrollTo = (id: string) => {
    setIsOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
      setIsOpen(false)
    }, 1500)
  }

  const commands: CommandItem[] = [
    {
      id: 'resume',
      title: 'Download Resume PDF (Jagan Kumar Swain)',
      category: 'Action',
      icon: <Download size={16} className="text-primary" />,
      action: () => {
        setIsOpen(false)
        window.open(personalInfo.resumeUrl, '_blank')
      },
    },
    {
      id: 'copy-email',
      title: copied ? 'Email Copied!' : `Copy Academic Email (${personalInfo.email})`,
      category: 'Action',
      icon: copied ? <Check size={16} className="text-accent" /> : <Mail size={16} className="text-secondary" />,
      action: handleCopyEmail,
    },
    {
      id: 'nav-lab',
      title: 'Jump to Interactive Simulation Lab (GuardX & DeepBeat)',
      category: 'Navigation',
      icon: <Sparkles size={16} className="text-primary" />,
      action: () => scrollTo('lab'),
    },
    {
      id: 'nav-exp',
      title: 'Jump to Research & Industry Experience',
      category: 'Navigation',
      icon: <Briefcase size={16} className="text-cyan-400" />,
      action: () => scrollTo('experience'),
    },
    {
      id: 'nav-projects',
      title: 'Jump to Engineered Projects',
      category: 'Navigation',
      icon: <Code2 size={16} className="text-accent" />,
      action: () => scrollTo('projects'),
    },
    {
      id: 'nav-skills',
      title: 'Jump to Technical Proficiencies',
      category: 'Navigation',
      icon: <Terminal size={16} className="text-secondary" />,
      action: () => scrollTo('skills'),
    },
    {
      id: 'nav-edu',
      title: 'Jump to Dual Degree & Education',
      category: 'Navigation',
      icon: <GraduationCap size={16} className="text-primary" />,
      action: () => scrollTo('education'),
    },
    {
      id: 'nav-grants',
      title: 'Jump to Grants, Honors & Certifications',
      category: 'Navigation',
      icon: <Award size={16} className="text-amber-400" />,
      action: () => scrollTo('achievements'),
    },
    {
      id: 'ext-github',
      title: 'Open GitHub Profile (@JaganKSwain)',
      category: 'External',
      icon: <ExternalLink size={16} className="text-slate-400" />,
      action: () => {
        setIsOpen(false)
        window.open(personalInfo.social.github, '_blank')
      },
    },
    {
      id: 'ext-linkedin',
      title: 'Open LinkedIn Profile',
      category: 'External',
      icon: <ExternalLink size={16} className="text-slate-400" />,
      action: () => {
        setIsOpen(false)
        window.open(personalInfo.social.linkedin, '_blank')
      },
    },
  ]

  const filtered = query.trim()
    ? commands.filter((cmd) =>
        cmd.title.toLowerCase().includes(query.toLowerCase())
      )
    : commands

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-md"
            />

            {/* Palette Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-xl modern-card bg-surface-container/95 border-primary/30 shadow-2xl overflow-hidden z-10"
            >
              {/* Input header */}
              <div className="flex items-center gap-3 p-4 border-b border-glass-border">
                <Search size={18} className="text-primary flex-shrink-0" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Type a command or jump to section..."
                  autoFocus
                  className="w-full bg-transparent text-white text-sm font-mono focus:outline-none placeholder-slate-500"
                />
                <kbd className="px-2 py-0.5 rounded bg-surface-light border border-glass-border text-[10px] font-mono text-slate-400">
                  ESC
                </kbd>
              </div>

              {/* Commands list */}
              <div className="max-h-[340px] overflow-y-auto p-2 space-y-1">
                {filtered.map((cmd) => (
                  <button
                    key={cmd.id}
                    onClick={cmd.action}
                    className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-surface-light text-left transition-colors group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="p-1.5 rounded-lg bg-surface-container border border-glass-border">
                        {cmd.icon}
                      </div>
                      <span className="text-xs sm:text-sm font-mono text-slate-200 group-hover:text-primary transition-colors truncate">
                        {cmd.title}
                      </span>
                    </div>

                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-light/80 border border-glass-border text-slate-400 flex-shrink-0 ml-2">
                      {cmd.category}
                    </span>
                  </button>
                ))}

                {filtered.length === 0 && (
                  <div className="py-8 text-center text-xs font-mono text-slate-500">
                    No matching commands found.
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-3 border-t border-glass-border flex items-center justify-between text-[11px] font-mono text-slate-500 bg-surface-lowest/50">
                <span>Navigation & Actions</span>
                <span className="flex items-center gap-1">
                  <span>Press</span>
                  <kbd className="px-1.5 py-0.5 rounded bg-surface-light border border-glass-border text-[10px] text-slate-400">
                    &uarr; &darr;
                  </kbd>
                  <span>to navigate</span>
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

