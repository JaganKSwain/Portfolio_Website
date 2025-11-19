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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div>
          <h3 className="text-3xl font-bold text-white mb-4">Let&apos;s Connect</h3>
          <p className="text-gray-400 leading-relaxed">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>

        <div className="space-y-6">
          <div className="glass p-6 rounded-xl flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-lg text-primary">
              <Mail size={24} />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-1">Email Me</h4>
              <a href="mailto:swainjagan2005@gmail.com" className="text-gray-400 hover:text-primary transition-colors block">
                swainjagan2005@gmail.com
              </a>
              <a href="mailto:jagan.swain.2024@nist.edu" className="text-gray-400 hover:text-primary transition-colors block">
                jagan.swain.ece.2024@nist.edu
              </a>
            </div>
          </div>

          <div className="glass p-6 rounded-xl flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-lg text-primary">
              <MapPin size={24} />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-1">Location</h4>
              <p className="text-gray-400">Berhampur, Odisha, India</p>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href="https://www.linkedin.com/in/jagan-kumar-swain/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass rounded-full text-gray-400 hover:text-white hover:bg-primary transition-all duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/JaganKSwain"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass rounded-full text-gray-400 hover:text-white hover:bg-primary transition-all duration-300"
            >
              <Github size={24} />
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
        className="glass p-8 rounded-2xl space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-surface/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-surface/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-surface/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            placeholder="Project Collaboration"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 bg-surface/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
            placeholder="Tell me about your project..."
          />
        </div>

        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-sm"
          >
            Message sent successfully! I&apos;ll get back to you soon.
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm"
          >
            Failed to send message. Please try again later.
          </motion.div>
        )}

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full px-6 py-4 bg-primary text-white font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-blue-600 transition-all shadow-lg shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send size={20} />
              <span>Send Message</span>
            </>
          )}
        </motion.button>
      </motion.form>
    </div>
  )
}

