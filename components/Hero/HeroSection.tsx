'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import CircuitBoard from '../Circuit/CircuitBoard'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <CircuitBoard />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-signal-neon via-signal-cyan to-signal-purple bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Jagan Kumar Swain
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Electronics, VLSI and AI/ML Engineer
            </motion.p>
            <motion.p
              className="text-md md:text-lg text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Designing the future of data science and integrated circuits, one transistor at a time
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-signal-neon text-circuit-dark font-semibold rounded-lg flex items-center gap-2 hover:shadow-lg hover:shadow-signal-neon/50 transition-shadow"
              >
                View Projects
                <ArrowRight size={20} />
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-signal-neon text-signal-neon font-semibold rounded-lg hover:bg-signal-neon/10 transition-colors"
              >
                Get In Touch
              </motion.button>
            </Link>
          </motion.div>

          {/* Animated Icons */}
          <motion.div
            className="mt-16 flex justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {['Java', 'Python', 'C', 'VLSI', 'Circuits'].map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.1 }}
                whileHover={{ scale: 1.2, y: -5 }}
                className="px-4 py-2 bg-pcb-green/50 border border-signal-neon/30 rounded-lg text-sm text-signal-neon"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowRight
          size={24}
          className="text-signal-neon rotate-90"
        />
      </motion.div>
    </section>
  )
}

