'use client'

import { motion } from 'framer-motion'
import ContactForm from './ContactForm'

export default function ContactSection() {
    return (
        <section id="contact" className="py-20 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Get In <span className="text-gradient">Touch</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Have a project in mind or want to discuss the latest in VLSI? I&apos;d love to hear from you.
                    </p>
                </motion.div>

                <ContactForm />
            </div>
        </section>
    )
}
