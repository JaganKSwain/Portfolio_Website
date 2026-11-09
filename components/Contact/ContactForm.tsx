'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Send,
  Mail,
  Linkedin,
  Github,
  Loader2,
  MapPin,
  Phone,
  Copy,
  Check,
  ExternalLink,
} from 'lucide-react'
import { personalInfo } from '@/data/personal'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
      {/* Left: Direct Contact Details & Links (5 cols) */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="lg:col-span-5 space-y-6"
      >
        <div className="modern-card p-6 sm:p-7 space-y-6">
          <div>
            <h3 className="text-xl font-heading font-bold text-white mb-2">
              Let&apos;s Build Together
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Available for research collaborations, engineering internships, hardware prototyping,
              and full-stack AI development opportunities.
            </p>
          </div>

          <div className="space-y-4 pt-2">
            {/* Academic Email Card with Copy button */}
            <div className="p-4 rounded-xl bg-surface-light/60 border border-glass-border space-y-1.5">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-primary">
                  <Mail size={13} />
                  <span>Academic Email</span>
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-white transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check size={12} className="text-accent" />
                      <span className="text-accent">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-xs sm:text-sm font-mono text-slate-200 hover:text-primary transition-colors block break-all"
              >
                {personalInfo.email}
              </a>
            </div>

            {/* Phone & Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-surface-light/60 border border-glass-border space-y-1">
                <span className="flex items-center gap-1.5 text-xs font-mono text-secondary">
                  <Phone size={12} />
                  <span>Phone</span>
                </span>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-xs font-mono text-slate-200 hover:text-secondary transition-colors block"
                >
                  {personalInfo.phone}
                </a>
              </div>

              <div className="p-3.5 rounded-xl bg-surface-light/60 border border-glass-border space-y-1">
                <span className="flex items-center gap-1.5 text-xs font-mono text-accent">
                  <MapPin size={12} />
                  <span>Location</span>
                </span>
                <span className="text-xs font-mono text-slate-200 block truncate">
                  {personalInfo.location}
                </span>
              </div>
            </div>

            {/* Social channels */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-surface-light border border-glass-border hover:border-primary/40 text-xs font-mono text-slate-300 hover:text-primary transition-all"
              >
                <Linkedin size={15} />
                <span>LinkedIn</span>
              </a>
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-surface-light border border-glass-border hover:border-primary/40 text-xs font-mono text-slate-300 hover:text-primary transition-all"
              >
                <Github size={15} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right: Message Form (7 cols) */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="lg:col-span-7"
      >
        <form
          onSubmit={handleSubmit}
          className="modern-card p-6 sm:p-8 space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label
                htmlFor="name"
                className="text-xs font-mono text-slate-400 uppercase tracking-wider block"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Dr. Jane Doe"
                className="w-full px-4 py-3 rounded-xl bg-surface-light/80 border border-glass-border text-white text-xs sm:text-sm focus:outline-none focus:border-primary/60 transition-all font-mono placeholder-slate-600"
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="text-xs font-mono text-slate-400 uppercase tracking-wider block"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="jane@institution.edu"
                className="w-full px-4 py-3 rounded-xl bg-surface-light/80 border border-glass-border text-white text-xs sm:text-sm focus:outline-none focus:border-primary/60 transition-all font-mono placeholder-slate-600"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="subject"
              className="text-xs font-mono text-slate-400 uppercase tracking-wider block"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Research Internship / Project Inquiry"
              className="w-full px-4 py-3 rounded-xl bg-surface-light/80 border border-glass-border text-white text-xs sm:text-sm focus:outline-none focus:border-primary/60 transition-all font-mono placeholder-slate-600"
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="message"
              className="text-xs font-mono text-slate-400 uppercase tracking-wider block"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Describe your inquiry, project scope, or opportunity..."
              className="w-full px-4 py-3 rounded-xl bg-surface-light/80 border border-glass-border text-white text-xs sm:text-sm focus:outline-none focus:border-primary/60 transition-all resize-none font-mono placeholder-slate-600"
            />
          </div>

          {submitStatus === 'success' && (
            <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-2">
              <Check size={15} />
              <span>Message dispatched successfully! Jagan will reply shortly.</span>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono">
              Unable to send message directly. Please write to{' '}
              <a
                href={`mailto:${personalInfo.email}`}
                className="underline hover:text-white"
              >
                {personalInfo.email}
              </a>
              .
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 px-6 rounded-xl font-heading font-semibold text-sm bg-gradient-to-r from-primary to-cyan-400 text-slate-950 hover:shadow-teal-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>Sending Message...</span>
              </>
            ) : (
              <>
                <Send size={15} />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      </motion.div>
    </div>
  )
}
