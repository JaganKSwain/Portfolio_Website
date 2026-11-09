'use client'

import { motion } from 'framer-motion'
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  CheckCircle2,
} from 'lucide-react'
import { educationData } from '@/data/education'

export default function EducationSection() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-background">
      {/* Background Section Glow */}
      <div className="absolute inset-0 bg-section-glow pointer-events-none" />

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
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white">
            Dual Degree & <span className="text-gradient">Education</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Concurrent rigorous academic training in hardware-level Electronics & Communication
            and cutting-edge Data Science from premier institutions.
          </p>
        </motion.div>

        {/* Education Dual Spotlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-10">
          {educationData.slice(0, 2).map((item, index) => {
            const isFirst = index === 0

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="modern-card p-6 sm:p-8 flex flex-col justify-between group h-full relative"
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={
                        isFirst ? 'cyan-badge' : 'copper-badge'
                      }
                    >
                      {item.badge}
                    </span>

                    {item.score && (
                      <span className="emerald-badge">
                        {item.score}
                      </span>
                    )}
                  </div>

                  {/* Degree & Institution */}
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-white group-hover:text-primary transition-colors mb-2">
                    {item.degree}
                  </h3>

                  <div className="space-y-1 mb-5">
                    <div className="text-sm font-semibold text-slate-200">
                      {item.institution}
                    </div>
                    <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} className="text-primary" />
                        {item.period}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} className="text-slate-400" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  {item.highlights && (
                    <div className="space-y-2 pt-4 border-t border-glass-border">
                      <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                        Key Curricular Pillars:
                      </div>
                      {item.highlights.map((hl, hIdx) => (
                        <div
                          key={hIdx}
                          className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed"
                        >
                          <CheckCircle2
                            size={14}
                            className={`mt-0.5 flex-shrink-0 ${
                              isFirst ? 'text-primary' : 'text-secondary'
                            }`}
                          />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Secondary Schooling strip */}
        <div className="max-w-5xl mx-auto">
          <div className="modern-card p-5 sm:p-6">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
              <BookOpen size={14} className="text-primary" />
              <span>Prior Foundational Schooling</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {educationData.slice(2).map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-lg bg-surface-light/50 border border-glass-border"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
                    <span>{item.period}</span>
                    <span>CBSE</span>
                  </div>
                  <h4 className="text-sm font-heading font-semibold text-white">
                    {item.institution}
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    {item.degree}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-1 font-mono">
                    {item.location}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

