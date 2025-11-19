'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Cpu, Code, Zap, Mail, BookOpen, HardDrive } from 'lucide-react'

const navItems = [
  { name: 'Home', path: '/', icon: <Cpu size={18} /> },
  { name: 'About', path: '#about', icon: <Code size={18} /> },
  { name: 'Projects', path: '#projects', icon: <Zap size={18} /> },
  { name: 'Skills', path: '#skills', icon: <HardDrive size={18} /> },
  { name: 'Contact', path: '#contact', icon: <Mail size={18} /> },
  // Keeping these as separate pages if they exist
  { name: 'Cabinet', path: '/cabinet', icon: <BookOpen size={18} /> },
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-2 shadow-lg' : 'bg-transparent py-4'
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 group">
              <motion.div
                whileHover={{ rotate: 180 }}
                className="w-10 h-10 border-2 border-primary rounded-lg flex items-center justify-center bg-surface/50 backdrop-blur-sm"
              >
                <span className="text-primary font-bold text-xl group-hover:text-secondary transition-colors">JS</span>
              </motion.div>
              <div className="hidden sm:flex flex-col">
                <span className="text-white font-bold tracking-wider group-hover:text-primary transition-colors">JAGAN SWAIN</span>
                <span className="text-xs text-gray-400 tracking-widest">ENGINEER</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = pathname === item.path || (typeof window !== 'undefined' && window.location.hash === item.path)
                return (
                  <Link
                    key={item.name}
                    href={item.path}
                    onClick={(e) => scrollToSection(e, item.path)}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative px-4 py-2 rounded-full flex items-center space-x-2 transition-all duration-300 ${isActive ? 'bg-primary/10 text-primary border border-primary/20' : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }`}
                    >
                      {item.icon}
                      <span className="font-medium text-sm">{item.name}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute inset-0 rounded-full border border-primary/30"
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
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
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
            className="fixed inset-0 z-40 glass md:hidden pt-24 px-6"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={(e) => scrollToSection(e, item.path)}
                >
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-xl bg-surface/50 border border-white/5 flex items-center space-x-4 active:scale-95 transition-transform"
                  >
                    <div className="text-primary">{item.icon}</div>
                    <span className="text-lg font-medium text-white">{item.name}</span>
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

