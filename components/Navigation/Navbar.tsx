'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Cpu, Code, Zap, Mail, BookOpen, HardDrive } from 'lucide-react'

const navItems = [
  { name: 'Home', path: '/', icon: <Cpu size={16} /> },
  { name: 'About', path: '#about', icon: <Code size={16} /> },
  { name: 'Skills', path: '#skills', icon: <HardDrive size={16} /> },
  { name: 'Projects', path: '#projects', icon: <Zap size={16} /> },
  { name: 'Contact', path: '#contact', icon: <Mail size={16} /> },
  { name: 'Cabinet', path: '/cabinet', icon: <BookOpen size={16} /> },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(path)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        setIsMobileMenuOpen(false)
      }
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
            ? 'bg-background/80 backdrop-blur-xl border-b border-primary/10 py-2'
            : 'bg-transparent py-4'
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.3 }}
                className="w-10 h-10 border border-primary/40 rounded-lg flex items-center justify-center bg-primary/5 group-hover:border-primary group-hover:shadow-emerald transition-all duration-300"
              >
                <span className="text-primary font-heading font-bold text-lg">JS</span>
              </motion.div>
              <div className="hidden sm:flex flex-col">
                <span className="text-white font-heading font-bold text-sm tracking-wide group-hover:text-primary transition-colors">JAGAN SWAIN</span>
                <span className="text-[10px] text-gray-500 font-mono tracking-[0.2em]">ECE • AI/ML • FULL-STACK</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = pathname === item.path
                return (
                  <Link
                    key={item.name}
                    href={item.path}
                    onClick={(e) => scrollToSection(e, item.path)}
                  >
                    <motion.div
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative px-4 py-2 rounded-md flex items-center space-x-2 transition-all duration-300 ${isActive
                          ? 'text-primary'
                          : 'text-gray-500 hover:text-gray-200'
                        }`}
                    >
                      <span className="opacity-60">{item.icon}</span>
                      <span className="font-medium text-sm">{item.name}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-primary to-accent rounded-full"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </motion.div>
                  </Link>
                )
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-400 p-2 hover:text-primary rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden pt-24 px-6"
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={(e) => scrollToSection(e, item.path)}
                >
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className="p-4 rounded-lg bg-surface/50 border border-glass-border flex items-center space-x-4 active:scale-95 transition-transform hover:border-primary/30"
                  >
                    <div className="text-primary">{item.icon}</div>
                    <span className="text-sm font-medium text-gray-300">{item.name}</span>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
