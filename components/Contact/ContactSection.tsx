'use client'

import { motion } from 'framer-motion'
import ContactForm from './ContactForm'

export default function ContactSection() {
    return (
        <section id="contact" className="py-24 relative">
            <div className="absolute inset-0 bg-section-glow" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                        Get In <span className="text-gradient">Touch</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Have a project in mind or want to discuss AI, VLSI, or embedded systems? Let&apos;s connect.
                    </p>
                    <div className="w-16 h-[2px] bg-gradient-to-r from-primary to-secondary mx-auto mt-4" />
                </motion.div>

                <ContactForm />
            </div>
        </section>
    )
}
