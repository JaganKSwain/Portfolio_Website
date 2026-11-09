'use client'

import { motion } from 'framer-motion'
import ContactForm from './ContactForm'

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background">
      {/* Background Section Glow */}
      <div className="absolute inset-0 bg-hero-glow opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-primary/10 text-primary border border-primary/20">
            <span>START A CONVERSATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Discussing deep learning research, drone avionics, embedded system prototypes, or internship opportunities.
          </p>
        </motion.div>

        <ContactForm />
      </div>
    </section>
  )
}
