'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Linkedin, Github, Loader2, MapPin } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <div>
          <h3 className="text-2xl font-heading font-bold text-white mb-3">Let&apos;s Connect</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>

        <div className="space-y-4">
          <div className="module-card p-5 flex items-start gap-4">
            <div className="p-2.5 rounded-lg bg-primary/5 border border-primary/20 text-primary">
              <Mail size={20} />
            </div>
            <div>
              <h4 className="text-sm font-heading font-semibold text-white mb-1">Email</h4>
              <a href="mailto:swainjagan2005@gmail.com" className="text-gray-500 hover:text-primary transition-colors text-sm block font-mono">
                swainjagan2005@gmail.com
              </a>
              <a href="mailto:jagan.swain.ece.2024@nist.edu" className="text-gray-500 hover:text-primary transition-colors text-sm block font-mono">
                jagan.swain.ece.2024@nist.edu
              </a>
            </div>
          </div>

          <div className="module-card p-5 flex items-start gap-4">
            <div className="p-2.5 rounded-lg bg-secondary/5 border border-secondary/20 text-secondary">
              <MapPin size={20} />
            </div>
            <div>
              <h4 className="text-sm font-heading font-semibold text-white mb-1">Location</h4>
              <p className="text-gray-500 text-sm font-mono">Rourkela, Odisha, India</p>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <a
              href="https://www.linkedin.com/in/jagan-kumar-swain/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-lg border border-glass-border bg-surface/50 flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary/30 hover:shadow-emerald transition-all duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/JaganKSwain"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-lg border border-glass-border bg-surface/50 flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary/30 hover:shadow-emerald transition-all duration-300"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        onSubmit={handleSubmit}
        className="module-card p-8 space-y-5"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label htmlFor="name" className="text-xs font-mono text-gray-500 uppercase tracking-wider">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-background/50 border border-glass-border rounded-lg text-white text-sm focus:outline-none focus:border-primary/50 focus:shadow-emerald transition-all font-mono placeholder-gray-700"
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="email" className="text-xs font-mono text-gray-500 uppercase tracking-wider">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-background/50 border border-glass-border rounded-lg text-white text-sm focus:outline-none focus:border-primary/50 focus:shadow-emerald transition-all font-mono placeholder-gray-700"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="subject" className="text-xs font-mono text-gray-500 uppercase tracking-wider">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-background/50 border border-glass-border rounded-lg text-white text-sm focus:outline-none focus:border-primary/50 focus:shadow-emerald transition-all font-mono placeholder-gray-700"
            placeholder="Project Collaboration"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="message" className="text-xs font-mono text-gray-500 uppercase tracking-wider">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 bg-background/50 border border-glass-border rounded-lg text-white text-sm focus:outline-none focus:border-primary/50 focus:shadow-emerald transition-all resize-none font-mono placeholder-gray-700"
            placeholder="Tell me about your project..."
          />
        </div>

        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3 bg-primary/10 border border-primary/30 rounded-lg text-primary text-xs font-mono"
          >
            Message sent successfully! I&apos;ll get back to you soon.
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-xs font-mono"
          >
            Failed to send message. Please try again later.
          </motion.div>
        )}

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="w-full px-6 py-3.5 bg-gradient-to-r from-primary to-accent text-background font-heading font-bold rounded-lg flex items-center justify-center gap-2 hover:shadow-emerald-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send size={16} />
              <span>Send Message</span>
            </>
          )}
        </motion.button>
      </motion.form>
    </div>
  )
}
