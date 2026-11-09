'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download, Search } from 'lucide-react'
import { personalInfo } from '@/data/personal'
import CommandPalette from './CommandPalette'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Research', href: '#publications' },
  { name: 'Lab', href: '#lab' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = navLinks.map((link) => link.href.substring(1))
      const scrollPosition = window.scrollY + 120

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const triggerCommandPalette = () => {
    window.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'k', ctrlKey: true, metaKey: true })
    )
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/85 backdrop-blur-xl border-b border-glass-border py-3 shadow-lg shadow-black/20'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
            >
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 via-surface-light to-secondary/10 border border-primary/40 flex items-center justify-center font-heading font-bold text-primary group-hover:border-primary group-hover:shadow-teal-glow transition-all duration-300">
                <span>JS</span>
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-accent border-2 border-background" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-heading font-bold text-sm tracking-wide group-hover:text-primary transition-colors">
                  Jagan Kumar Swain
                </span>
                <span className="text-[11px] text-slate-400 font-mono tracking-wider">
                  ECE • AI/ML • Hardware
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 bg-surface-container/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-glass-border">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1)
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className={`relative px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-white'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activePill"
                        className="absolute inset-0 bg-primary/15 border border-primary/30 rounded-full"
                        transition={{
                          type: 'spring',
                          bounce: 0.2,
                          duration: 0.5,
                        }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </a>
                )
              })}
            </nav>

            {/* Right Actions: Command Palette trigger & Resume button */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={triggerCommandPalette}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono bg-surface-container/80 border border-glass-border text-slate-400 hover:text-white hover:border-primary/40 transition-all"
                title="Open Command Menu (Ctrl+K)"
              >
                <Search size={13} className="text-primary" />
                <span className="hidden xl:inline">Search</span>
                <kbd className="px-1.5 py-0.5 rounded bg-surface-light border border-glass-border text-[10px] text-slate-400">
                  ⌘K
                </kbd>
              </button>

              <a
                href={personalInfo.resumeUrl}
                download={personalInfo.resumeFileName}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 hover:border-primary/50 hover:shadow-teal-glow transition-all duration-300"
              >
                <Download size={14} />
                <span>Resume</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={triggerCommandPalette}
                className="p-2 rounded-lg border border-glass-border bg-surface-container/70 text-slate-300 hover:text-white hover:border-primary/40 transition-colors"
                aria-label="Open Command Search"
              >
                <Search size={18} />
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg border border-glass-border bg-surface-container/70 text-slate-300 hover:text-white hover:border-primary/40 transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Global Command Palette Component */}
      <CommandPalette />

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-40 bg-background/95 backdrop-blur-2xl border-b border-glass-border px-6 py-6 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="px-4 py-3 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-surface-light border border-transparent hover:border-glass-border transition-all"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-glass-border flex flex-col gap-2">
                <a
                  href={personalInfo.resumeUrl}
                  download={personalInfo.resumeFileName}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-mono font-semibold bg-primary text-background hover:bg-primary-glow transition-colors"
                >
                  <Download size={16} />
                  <span>Download Resume PDF</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
