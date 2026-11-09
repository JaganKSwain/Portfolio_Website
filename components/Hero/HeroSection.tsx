'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  ExternalLink,
  Award,
  GraduationCap,
  Sparkles,
  BookOpen,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { personalInfo } from '@/data/personal'

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-background"
    >
      {/* Ambient Radial Lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-hero-glow pointer-events-none" />
      <div className="absolute -top-24 right-10 w-96 h-96 bg-accent-glow pointer-events-none opacity-40" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Introduction & Pitch (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="status-led">
                OPEN TO OPPORTUNITIES
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-surface-light border border-glass-border text-slate-300">
                <MapPin size={12} className="text-primary" />
                <span>Rourkela, India</span>
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white leading-tight">
                Hi, I&apos;m{' '}
                <span className="text-gradient">Jagan Kumar Swain</span>
              </h1>
              <p className="text-lg sm:text-xl font-heading font-medium text-slate-300">
                VLSI/Mixed-Signal &bull; Embedded Systems &bull; Deep Learning Researcher
              </p>
            </div>

            {/* Dual Degree Credential Pill */}
            <div className="inline-flex flex-col sm:flex-row items-center gap-2 p-2 rounded-xl bg-surface-container/90 border border-glass-border text-xs font-mono text-slate-300 shadow-sm">
              <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-primary/10 text-primary border border-primary/20">
                <GraduationCap size={14} />
                <span>B.Tech ECE (NIST) • 9.1 CGPA</span>
              </div>
              <span className="hidden sm:inline text-slate-600">•</span>
              <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-secondary/10 text-secondary border border-secondary/20">
                <GraduationCap size={14} />
                <span>BS Data Science (IIT Madras) • 8.1 CGPA</span>
              </div>
            </div>

            {/* Concise Bio highlighting both papers */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Undergraduate engineer & researcher spanning <strong className="text-slate-200">VLSI/mixed-signal design</strong>,{' '}
              <strong className="text-slate-200">drone systems</strong>, and{' '}
              <strong className="text-slate-200">deep learning</strong>. First author of two research manuscripts:{' '}
              <span className="text-primary">15-architecture retinal disease benchmark</span> (IISER Berhampur) and an{' '}
              <span className="text-secondary">open-source 10T SRAM Compute-In-Memory macro</span> in SkyWater 130nm CMOS.
              Awarded ₹50,000 Defence R&D Grant for GuardX Sentinel.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={personalInfo.resumeUrl}
                download={personalInfo.resumeFileName}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-heading font-semibold text-sm bg-gradient-to-r from-primary to-cyan-400 text-slate-950 hover:shadow-teal-glow transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </a>

              <button
                onClick={() => scrollTo('publications')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-heading font-semibold text-sm bg-surface-container hover:bg-surface-light border border-glass-border hover:border-primary/40 text-slate-200 transition-all duration-300"
              >
                <BookOpen size={15} className="text-secondary" />
                <span>Research Manuscripts</span>
              </button>

              <button
                onClick={() => scrollTo('lab')}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-heading font-medium text-sm text-slate-400 hover:text-white border border-transparent hover:border-glass-border transition-all duration-300"
              >
                <span>Interactive Lab</span>
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Social Channels */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-3">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider mr-2">
                Profiles:
              </span>
              {[
                {
                  icon: <Github size={17} />,
                  href: personalInfo.social.github,
                  label: 'GitHub',
                },
                {
                  icon: <Linkedin size={17} />,
                  href: personalInfo.social.linkedin,
                  label: 'LinkedIn',
                },
                {
                  icon: <Mail size={17} />,
                  href: `mailto:${personalInfo.email}`,
                  label: 'Email',
                },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="w-10 h-10 rounded-lg bg-surface-container border border-glass-border flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/40 hover:bg-surface-light transition-all duration-200"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Profile Card & High-Density Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-primary/30 via-secondary/20 to-accent/20 blur-xl opacity-60 -z-10" />

              <div className="modern-card p-6 sm:p-7 space-y-6">
                {/* Photo & Quick Meta */}
                <div className="flex items-center gap-5">
                  <div className="relative w-24 h-28 sm:w-28 sm:h-32 rounded-2xl overflow-hidden border-2 border-primary/40 shadow-xl flex-shrink-0">
                    <Image
                      src="/images/Jagan.jpg"
                      alt="Jagan Kumar Swain"
                      fill
                      priority
                      className="object-cover object-top"
                      sizes="128px"
                    />
                    <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-background to-transparent" />
                  </div>

                  <div className="space-y-1.5 min-w-0">
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono bg-primary/10 text-primary border border-primary/20">
                      <Sparkles size={11} />
                      <span>VLSI & DL Researcher</span>
                    </div>
                    <h2 className="text-xl font-heading font-bold text-white truncate">
                      Jagan Swain
                    </h2>
                    <p className="text-xs text-slate-400 font-mono">
                      NIST University &bull; IIT Madras
                    </p>
                    <div className="pt-1 flex items-center gap-1.5 text-xs text-accent font-mono">
                      <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                      <span>2 First-Author Manuscripts</span>
                    </div>
                  </div>
                </div>

                {/* Focus Areas Mini List */}
                <div className="space-y-2 pt-2 border-t border-glass-border">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    Core Technical Pillars
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-surface-light/60 border border-glass-border">
                      <span className="text-secondary font-mono font-semibold block">
                        SkyWater 130nm
                      </span>
                      <span className="text-slate-400 text-[11px]">
                        10T SRAM CiM Macro
                      </span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-surface-light/60 border border-glass-border">
                      <span className="text-primary font-mono font-semibold block">
                        Retinal DL
                      </span>
                      <span className="text-slate-400 text-[11px]">
                        15-Model RFMiD Bench
                      </span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-surface-light/60 border border-glass-border">
                      <span className="text-accent font-mono font-semibold block">
                        Micro Drones
                      </span>
                      <span className="text-slate-400 text-[11px]">
                        PE Geometry & Nicla
                      </span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-surface-light/60 border border-glass-border">
                      <span className="text-cyan-400 font-mono font-semibold block">
                        Edge Systems
                      </span>
                      <span className="text-slate-400 text-[11px]">
                        ₹50K Defence Grant
                      </span>
                    </div>
                  </div>
                </div>

                {/* Major Honor Badge */}
                <div className="p-3.5 rounded-xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/30 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
                    <Award size={18} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-heading font-bold text-amber-300">
                      ₹50,000 Defence R&D Grant
                    </div>
                    <div className="text-[11px] text-slate-400 truncate">
                      Air Defence & Security Conf &bull; GuardX Sentinel
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Global Key Metrics Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-10 border-t border-glass-border"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {personalInfo.keyMetrics.map((metric, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-surface-container/60 border border-glass-border hover:border-primary/30 transition-all text-center group"
              >
                <div className="text-2xl sm:text-3xl font-heading font-extrabold text-white group-hover:text-primary transition-colors">
                  {metric.value}
                </div>
                <div className="text-xs font-mono font-semibold text-slate-300 mt-1">
                  {metric.label}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5 font-mono truncate">
                  {metric.subtext}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
