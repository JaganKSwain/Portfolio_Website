'use client'

import { Github, Linkedin, Mail, Download, ArrowUp, MapPin } from 'lucide-react'
import Link from 'next/link'
import { personalInfo } from '@/data/personal'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-background border-t border-glass-border pt-16 pb-12 overflow-hidden">
      {/* Background Section Glow */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-hero-glow opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-glass-border">
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 via-surface-light to-secondary/10 border border-primary/40 flex items-center justify-center font-heading font-bold text-primary">
                JS
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-white">
                  Jagan Kumar Swain
                </h3>
                <p className="text-xs font-mono text-slate-400">
                  ECE (NIST &bull; 9.1) &bull; BS Data Science (IIT Madras &bull; 8.1)
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Undergraduate researcher bridging hardware-level embedded avionics and deep learning architectures.
              Grant-winning builder & SIH 2025 finalist.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <MapPin size={13} className="text-primary" />
              <span>Rourkela, Odisha, India</span>
            </div>
          </div>

          {/* Quick Navigation (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-400">
              <a href="#about" className="hover:text-primary transition-colors">
                &gt; About
              </a>
              <a href="#experience" className="hover:text-primary transition-colors">
                &gt; Experience
              </a>
              <a href="#projects" className="hover:text-primary transition-colors">
                &gt; Projects
              </a>
              <a href="#skills" className="hover:text-primary transition-colors">
                &gt; Skills
              </a>
              <a href="#education" className="hover:text-primary transition-colors">
                &gt; Education
              </a>
              <a href="#mentor" className="hover:text-primary transition-colors">
                &gt; Mentor
              </a>
              <a href="#achievements" className="hover:text-primary transition-colors">
                &gt; Achievements
              </a>
              <a href="#contact" className="hover:text-primary transition-colors">
                &gt; Contact
              </a>
            </div>
          </div>

          {/* Connect & Resume (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
              Connect & Verify
            </h4>
            <div className="flex gap-2.5">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-xl bg-surface-container border border-glass-border flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/40 hover:bg-surface-light transition-all"
              >
                <Github size={17} />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-xl bg-surface-container border border-glass-border flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/40 hover:bg-surface-light transition-all"
              >
                <Linkedin size={17} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send Email"
                className="w-10 h-10 rounded-xl bg-surface-container border border-glass-border flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/40 hover:bg-surface-light transition-all"
              >
                <Mail size={17} />
              </a>
            </div>

            <a
              href={personalInfo.resumeUrl}
              download={personalInfo.resumeFileName}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-all"
            >
              <Download size={13} />
              <span>Download Full Resume PDF</span>
            </a>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>
            &copy; {currentYear} Jagan Kumar Swain. Built with Next.js, TypeScript & Tailwind CSS.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-primary transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  )
}
