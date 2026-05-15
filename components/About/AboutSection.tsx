'use client'

import { motion } from 'framer-motion'
import { Code2, Cpu, Zap, Target, Briefcase, Brain } from 'lucide-react'
import Image from 'next/image'

export default function AboutSection() {
    const timeline = [
        { year: '2025', title: 'BS in Data Science & Applications', desc: 'IIT Madras' },
        { year: '2024', title: 'B.Tech in ECE', desc: 'NIST University, Berhampur' },
        { year: '2025', title: 'SIH 2025 Grand Finalist', desc: 'Smart India Hackathon (Hardware Edition)' },
        { year: '2026', title: 'Defence R&D Grant', desc: 'Rs.50,000 for GuardX Sentinel' },
    ]

    const interests = [
        { icon: <Brain size={24} />, title: 'AI & ML', desc: 'Deep Learning, NLP, CV', color: 'primary' },
        { icon: <Cpu size={24} />, title: 'VLSI Design', desc: 'Verilog, Vivado, FPGA', color: 'secondary' },
        { icon: <Zap size={24} />, title: 'IoT & Embedded', desc: 'Arduino, Raspberry Pi', color: 'accent' },
        { icon: <Code2 size={24} />, title: 'Full-Stack Dev', desc: 'Node.js, React, Flask', color: 'primary' },
    ]

    return (
        <section id="about" className="py-24 relative overflow-hidden">
            {/* Section Glow */}
            <div className="absolute inset-0 bg-section-glow" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                        About <span className="text-gradient">Me</span>
                    </h2>
                    <div className="w-16 h-[2px] bg-gradient-to-r from-primary to-secondary mx-auto" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column: Photo + Bio & Timeline */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="module-card p-8">
                            {/* Photo + Bio Row */}
                            <div className="flex flex-col sm:flex-row gap-6 items-start">
                                {/* Profile Photo */}
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className="flex-shrink-0 mx-auto sm:mx-0"
                                >
                                    <div className="relative group">
                                        {/* Glow ring */}
                                        <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-primary via-accent to-secondary opacity-30 blur-sm group-hover:opacity-60 transition-opacity duration-500" />
                                        <div className="relative w-32 h-44 sm:w-36 sm:h-48 rounded-xl overflow-hidden border-2 border-primary/30 group-hover:border-primary/60 transition-all duration-500">
                                            <Image
                                                src="/images/Jagan.jpg"
                                                alt="Jagan Kumar Swain"
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 640px) 128px, 144px"
                                                priority
                                            />
                                        </div>
                                        {/* Corner accent dots */}
                                        <div className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-primary shadow-emerald" />
                                        <div className="absolute -top-1 -left-1 w-2 h-2 rounded-full bg-secondary shadow-copper" />
                                    </div>
                                </motion.div>

                                {/* Bio text */}
                                <div>
                                    <p className="text-on-surface-variant leading-relaxed">
                                        Hello! I&apos;m <span className="text-primary font-semibold">Jagan Kumar Swain</span>,
                                        an Electronics and Communication Engineering undergraduate with a strong focus on
                                        <span className="text-primary"> AI/ML systems</span>, <span className="text-secondary">VLSI fundamentals</span>,
                                        and <span className="text-accent">full-stack development</span>.
                                    </p>
                                    <p className="text-on-surface-variant/70 leading-relaxed mt-4">
                                        Experienced in building end-to-end solutions spanning embedded hardware, data-driven
                                        machine learning models, and scalable web applications. Adept at translating complex
                                        problem statements into deployable technical systems.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Timeline */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-heading font-bold text-white flex items-center gap-2">
                                <Briefcase className="text-secondary" size={20} />
                                <span>Journey</span>
                            </h3>
                            <div className="space-y-4 border-l border-primary/20 pl-6 ml-2">
                                {timeline.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="relative"
                                    >
                                        <span className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full bg-background border-2 border-secondary" />
                                        <span className="text-xs text-secondary font-mono">{item.year}</span>
                                        <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                                        <p className="text-on-surface-variant/50 text-xs">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Interests */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                        {interests.map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="module-card p-6 flex flex-col items-center text-center space-y-3 group"
                            >
                                <div className={`p-3 rounded-lg bg-${item.color}/5 text-${item.color} border border-${item.color}/20 group-hover:border-${item.color}/40 group-hover:shadow-emerald transition-all duration-300`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-base font-heading font-bold text-white">{item.title}</h3>
                                <p className="text-on-surface-variant/50 text-xs font-mono">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
