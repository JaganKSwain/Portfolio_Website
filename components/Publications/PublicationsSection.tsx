'use client'

import { motion } from 'framer-motion'
import {
  BookOpen,
  FileText,
  Users,
  CheckCircle2,
  Sparkles,
  Award,
  Layers,
  ArrowUpRight,
} from 'lucide-react'
import { publications } from '@/data/publications'

export default function PublicationsSection() {
  return (
    <section id="publications" className="py-24 relative overflow-hidden bg-background">
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
            <BookOpen size={13} />
            <span>ACADEMIC SCHOLARSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white">
            Research <span className="text-gradient">Manuscripts</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            First-author academic research spanning multi-label medical deep learning at IISER Berhampur
            and open-source 10T SRAM Compute-In-Memory silicon design in SkyWater 130nm.
          </p>
        </motion.div>

        {/* Publications Grid */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="modern-card p-6 sm:p-8 relative group"
            >
              {/* Header Meta */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="copper-badge">
                    {pub.status}
                  </span>
                  {pub.format && (
                    <span className="cyan-badge">
                      {pub.format}
                    </span>
                  )}
                </div>
                <span className="text-xs font-mono text-slate-500">
                  Target Year: {pub.year}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white group-hover:text-primary transition-colors mb-3 leading-snug">
                {pub.title}
              </h3>

              {/* Authors */}
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300 mb-4 pb-3 border-b border-glass-border">
                <Users size={14} className="text-primary flex-shrink-0" />
                <div className="flex flex-wrap gap-x-1.5 gap-y-1">
                  {pub.authors.map((author, aIdx) => (
                    <span
                      key={aIdx}
                      className={
                        author.includes('Swain')
                          ? 'text-white font-bold underline decoration-primary decoration-2 underline-offset-4'
                          : 'text-slate-400'
                      }
                    >
                      {author}
                      {aIdx < pub.authors.length - 1 ? ',' : ''}
                    </span>
                  ))}
                </div>
              </div>

              {/* Abstract */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                {pub.abstract}
              </p>

              {/* Key Contributions & Empirical Results */}
              <div className="space-y-2 mb-6 p-4 rounded-xl bg-surface-light/50 border border-glass-border">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2 flex items-center gap-1.5">
                  <Sparkles size={13} className="text-primary" />
                  <span>Key Quantitative Findings:</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-300">
                  {pub.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 leading-relaxed">
                      <CheckCircle2 size={13} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-glass-border">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider mr-1">
                  Keywords:
                </span>
                {pub.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-surface-light border border-glass-border text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

