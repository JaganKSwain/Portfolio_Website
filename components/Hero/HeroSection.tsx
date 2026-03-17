'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
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
        }, 80)
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
      {/* Circuit Board Background */}
      <div className="absolute inset-0 z-0 opacity-15">
        <CircuitBoard />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern z-0" />

      {/* Hero Glow */}
      <div className="absolute inset-0 bg-hero-glow z-0" />

      {/* Gradient Fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Status LED */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="status-led">
                AVAILABLE FOR WORK
              </span>
            </motion.div>

            {/* Name */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight">
              <span className="text-white">Hi, I&apos;m </span>
              <span className="text-gradient">Jagan Swain</span>
            </h1>

            {/* Typing Effect */}
            <div className="h-8 md:h-12">
              <p className="text-xl md:text-2xl text-gray-500 font-mono">
                <span className="text-gray-400">&gt; </span>
                {text}
                <span className="text-primary animate-blink">_</span>
              </p>
            </div>

            {/* Bio */}
            <motion.p
              className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Building end-to-end solutions spanning{' '}
              <span className="text-primary font-medium">AI/ML</span>,{' '}
              <span className="text-secondary font-medium">VLSI</span>,{' '}
              <span className="text-accent font-medium">IoT</span>, and{' '}
              <span className="text-primary font-medium">Full-Stack Development</span>.
            </motion.p>

            {/* CTA Buttons */}
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
                  className="px-8 py-3 bg-primary text-background font-heading font-semibold rounded-lg flex items-center gap-2 hover:shadow-emerald-lg transition-all duration-300"
                >
                  View Projects
                  <ArrowRight size={18} />
                </motion.button>
              </Link>
              <Link href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border border-secondary/40 text-secondary font-heading font-semibold rounded-lg hover:bg-secondary/5 hover:shadow-copper transition-all duration-300"
                >
                  Contact Me
                </motion.button>
              </Link>
            </motion.div>

            {/* Social Links — Pin Style */}
            <motion.div
              className="flex justify-center gap-4 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {[
                { icon: <Github size={20} />, href: "https://github.com/JaganKSwain", label: "GitHub" },
                { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/jagan-kumar-swain", label: "LinkedIn" },
                { icon: <Mail size={20} />, href: "mailto:jagan.swain.ece.2024@nist.edu", label: "Email" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 rounded-lg border border-glass-border bg-surface/50 flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary/30 hover:shadow-emerald transition-all duration-300"
                  aria-label={social.label}
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
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={(e: any) => scrollToSection(e, '#about')}
      >
        <div className="w-5 h-8 border border-gray-700 rounded-full flex justify-center pt-1.5">
          <motion.div
            className="w-1 h-2 bg-primary/60 rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
