'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Sparkles, Building2, Quote, Award } from 'lucide-react'
import Image from 'next/image'

export default function MentorSection() {
  return (
    <section id="mentor" className="py-24 relative overflow-hidden bg-background">
      {/* Background Glow */}
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
            <span>ACADEMIC GUIDANCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white">
            Academic <span className="text-gradient">Mentorship</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Distinguished faculty mentors who have guided my research trajectory in embedded electronics, VLSI, and deep learning.
          </p>
        </motion.div>

        {/* Mentor Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="modern-card p-6 sm:p-10 relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Photo */}
              <div className="flex-shrink-0 relative group">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/30 to-secondary/30 blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative w-44 h-56 sm:w-48 sm:h-60 rounded-xl overflow-hidden border-2 border-primary/40 shadow-xl">
                  <Image
                    src="/images/Sandipan_Sir.jpg"
                    alt="Dr. Sandipan Mallik"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 176px, 192px"
                  />
                  <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-background/90 to-transparent" />
                </div>
                <div className="absolute -bottom-2 -right-2 px-2.5 py-1 rounded-md bg-surface-container border border-primary/40 text-[10px] font-mono text-primary shadow-lg">
                  Department Head & Mentor
                </div>
              </div>

              {/* Information */}
              <div className="space-y-4 text-center md:text-left flex-1 min-w-0">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-xs font-mono text-primary">
                  <GraduationCap size={14} />
                  <span>Head of Department & Research Guide</span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                    Dr. Sandipan Mallik
                  </h3>
                  <p className="text-sm font-semibold text-slate-300">
                    Head of Department, Electronics and Communication Engineering
                  </p>
                  <p className="text-xs font-mono text-secondary">
                    NIST University, Berhampur
                  </p>
                </div>

                <div className="relative p-4 rounded-xl bg-surface-light/60 border border-glass-border text-slate-300 text-xs sm:text-sm leading-relaxed italic">
                  <Quote className="w-5 h-5 text-primary/40 mb-1" />
                  &ldquo;Under Dr. Mallik&apos;s mentorship, I developed the methodology to bridge
                  fundamental circuit analysis and VLSI principles with hardware-aware machine learning models,
                  translating abstract concepts into deployable, grant-winning defense hardware and research manuscripts.&rdquo;
                </div>

                {/* Additional Acknowledgment of Dr. Anabik Pal */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 font-mono border-t border-glass-border">
                  <span>
                    Also under research supervision of{' '}
                    <strong className="text-slate-200">Dr. Anabik Pal</strong> (IISER Berhampur, Dept. of Computer Science)
                  </span>
                  <span className="text-primary font-semibold">
                    Medical Deep Learning
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
