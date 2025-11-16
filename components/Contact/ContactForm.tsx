'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Linkedin, Github, Loader2 } from 'lucide-react'

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

      const data = await response.json()

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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="glass-effect rounded-lg p-8"
      >
        <h2 className="text-3xl font-bold mb-6 text-signal-cyan">Get In Touch</h2>
        <p className="text-gray-300 mb-8">
          Feel free to reach out if you&apos;d like to collaborate on a project, discuss 
          opportunities, or just have a chat about electronics and VLSI design!
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <Mail className="w-5 h-5 text-signal-neon" />
              Email Addresses
            </h3>
            <div className="space-y-2 ml-7">
              <a
                href="mailto:jagan.swain.2024@nist.edu"
                className="block text-signal-cyan hover:text-signal-neon transition-colors"
              >
                jagan.swain.ece.2024@nist.edu
              </a>
              <a
                href="mailto:25f2007282@study.ds.iitm.ac.in"
                className="block text-signal-cyan hover:text-signal-neon transition-colors"
              >
                25f2007282@study.ds.iitm.ac.in
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <Linkedin className="w-5 h-5 text-signal-neon" />
              Social Profiles
            </h3>
            <div className="space-y-3 ml-7">
              <a
                href="https://www.linkedin.com/in/jagan-kumar-swain/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-signal-cyan hover:text-signal-neon transition-colors"
              >
                <Linkedin size={20} />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href="https://github.com/JaganKSwain"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-signal-cyan hover:text-signal-neon transition-colors"
              >
                <Github size={20} />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        onSubmit={handleSubmit}
        className="glass-effect rounded-lg p-8"
      >
        <h2 className="text-3xl font-bold mb-6 text-signal-cyan">Send Message</h2>

        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-pcb-dark-green border border-signal-neon/30 rounded-lg text-white focus:outline-none focus:border-signal-neon transition-colors"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-pcb-dark-green border border-signal-neon/30 rounded-lg text-white focus:outline-none focus:border-signal-neon transition-colors"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-gray-300 mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-pcb-dark-green border border-signal-neon/30 rounded-lg text-white focus:outline-none focus:border-signal-neon transition-colors"
              placeholder="Message Subject"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-pcb-dark-green border border-signal-neon/30 rounded-lg text-white focus:outline-none focus:border-signal-neon transition-colors resize-none"
              placeholder="Your message here..."
            />
          </div>

          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-signal-neon/20 border border-signal-neon rounded-lg text-signal-neon"
            >
              Message sent successfully! I&apos;ll get back to you soon.
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400"
            >
              Failed to send message. Please try again or email me directly.
            </motion.div>
          )}

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full px-6 py-3 bg-signal-neon text-circuit-dark font-semibold rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-signal-neon/50 transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
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
        </div>
      </motion.form>
    </div>
  )
}

