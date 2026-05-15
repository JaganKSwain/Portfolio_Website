'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Sparkles } from 'lucide-react'
import Image from 'next/image'

export default function MentorSection() {
    return (
        <section id="mentor" className="py-24 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-section-glow" />
            <div className="absolute inset-0 grid-pattern opacity-30" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                        My <span className="text-gradient">Mentor</span>
                    </h2>
                    <p className="text-on-surface-variant/70 max-w-2xl mx-auto">
                        The guiding force behind my journey in Electronics and AI.
                    </p>
                    <div className="w-16 h-[2px] bg-gradient-to-r from-primary to-secondary mx-auto mt-4" />
                </motion.div>

                {/* Mentor Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="max-w-2xl mx-auto"
                >
                    <div className="glow-card overflow-hidden">
                        {/* Terminal Header */}
                        <div className="terminal-header">
                            <div className="terminal-dot bg-red-500/80" />
                            <div className="terminal-dot bg-yellow-500/80" />
                            <div className="terminal-dot bg-green-500/80" />
                            <span className="ml-3 text-xs font-mono text-on-surface-variant/50 tracking-wider">
                                MENTOR_PROFILE.SYS
                            </span>
                        </div>

                        {/* Card Body */}
                        <div className="p-8 md:p-10">
                            <div className="flex flex-col sm:flex-row items-center gap-8">
                                {/* Photo */}
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="flex-shrink-0"
                                >
                                    <div className="relative group">
                                        {/* Ambient Glow */}
                                        <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/30 opacity-40 blur-md group-hover:opacity-70 transition-opacity duration-700" />

                                        {/* Photo Container */}
                                        <div className="relative w-40 h-52 md:w-48 md:h-64 rounded-xl overflow-hidden border-2 border-primary/30 group-hover:border-primary/60 transition-all duration-500">
                                            <Image
                                                src="/images/Sandipan_Sir.jpg"
                                                alt="Dr. Sandipan Mallik"
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 160px, 192px"
                                            />
                                        </div>

                                        {/* Corner accent dots */}
                                        <div className="absolute -bottom-1.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-primary shadow-emerald" />
                                        <div className="absolute -top-1.5 -left-1.5 w-2.5 h-2.5 rounded-full bg-secondary shadow-copper" />
                                        <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-accent" />
                                    </div>
                                </motion.div>

                                {/* Info */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="text-center sm:text-left space-y-4"
                                >
                                    {/* Badge */}
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-primary/5 border border-primary/20">
                                        <GraduationCap size={14} className="text-primary" />
                                        <span className="text-xs font-mono text-primary tracking-wider uppercase">Academic Mentor</span>
                                    </div>

                                    {/* Name */}
                                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-white">
                                        Dr. Sandipan <span className="text-gradient-teal">Mallik</span>
                                    </h3>

                                    {/* Title */}
                                    <div className="space-y-1">
                                        <p className="text-on-surface-variant text-base font-medium">
                                            Professor
                                        </p>
                                        <p className="text-on-surface-variant/70 text-sm">
                                            Department of Electronics & Communication Engineering
                                        </p>
                                        <p className="text-secondary text-sm font-mono tracking-wide">
                                            NIST University, Berhampur
                                        </p>
                                    </div>

                                    {/* Decorative circuit line */}
                                    <div className="flex items-center gap-2 pt-2">
                                        <div className="w-8 h-[1px] bg-gradient-to-r from-primary to-transparent" />
                                        <div className="w-2 h-2 rounded-full border border-primary/40 bg-primary/10" />
                                        <div className="flex-1 h-[1px] bg-gradient-to-r from-primary/20 to-transparent" />
                                    </div>
                                </motion.div>
                            </div>

                            {/* Quote / Acknowledgment */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                                className="mt-8 pt-6 border-t border-glass-border"
                            >
                                <div className="flex items-start gap-3">
                                    <Sparkles size={16} className="text-secondary mt-1 flex-shrink-0" />
                                    <p className="text-on-surface-variant/60 text-sm italic leading-relaxed">
                                        Under his mentorship and guidance, I have been able to explore the intersection of
                                        electronics and artificial intelligence, building projects that bridge hardware-aware
                                        ML models with real-world embedded systems.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
