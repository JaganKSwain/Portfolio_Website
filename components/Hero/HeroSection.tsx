'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import CircuitBoard from '../Circuit/CircuitBoard'

export default function HeroSection() {
  const [text, setText] = useState('')
  const fullText = 'Electronics & Communication Engineer'
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (isTyping) {
      if (text.length < fullText.length) {
        const timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1))
        }, 100)
        return () => clearTimeout(timeout)
      } else {
        setIsTyping(false)
      }
    }
  }, [text, isTyping])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault()
    const element = document.querySelector(path)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 opacity-20">
        <CircuitBoard />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary mb-4"
            >
              <span className="animate-pulse">●</span> Available for Work
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="text-white">Hi, I&apos;m </span>
              <span className="text-gradient">Jagan Swain</span>
            </h1>

            <div className="h-8 md:h-12">
              <p className="text-xl md:text-3xl text-gray-400 font-mono">
                {text}
                <span className="animate-blink">|</span>
              </p>
            </div>

            <motion.p
              className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              I&apos;m an Electronics & Communication Engineering student passionate about
              <span className="text-secondary"> VLSI</span>, <span className="text-accent"> IoT</span>, and
              <span className="text-secondary"> Data Science</span>. I build intelligent systems that bridge
              the gap between hardware and software.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Link href="#projects" onClick={(e) => scrollToSection(e, '#projects')}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-primary text-white font-semibold rounded-full flex items-center gap-2 hover:bg-blue-600 transition-colors shadow-lg shadow-primary/25"
                >
                  View Projects
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
              <Link href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm"
                >
                  Contact Me
                </motion.button>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center gap-6 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {[
                { icon: <Github size={24} />, href: "https://github.com/jagankswain" },
                { icon: <Linkedin size={24} />, href: "https://linkedin.com/in/jagankswain" },
                { icon: <Mail size={24} />, href: "mailto:swainjagan2005@gmail.com" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, color: '#3b82f6' }}
                  className="text-gray-400 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={(e: any) => scrollToSection(e, '#about')}
      >
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
          <motion.div
            className="w-1 h-2 bg-primary rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

