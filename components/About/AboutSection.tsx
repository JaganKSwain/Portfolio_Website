'use client'

import { motion } from 'framer-motion'
import { Code2, Cpu, Zap, Target, Award, BookOpen, Briefcase } from 'lucide-react'

export default function AboutSection() {
    const timeline = [
        { year: '2024', title: 'Undergraduate Research Scholar', desc: 'IIT Madras (Data Science & Applications)' },
        { year: '2024', title: 'B.Tech in ECE', desc: 'NIST University, Berhampur' },
        { year: '2023', title: 'IoT Projects', desc: 'Developed Smart Bin & Home Automation' },
    ]

    const interests = [
        { icon: <Code2 size={24} />, title: 'Programming', desc: 'C, Python, JS' },
        { icon: <Cpu size={24} />, title: 'VLSI Design', desc: 'Circuit Analysis' },
        { icon: <Zap size={24} />, title: 'IoT & Embedded', desc: 'Arduino, ESP32' },
        { icon: <Target size={24} />, title: 'CAD Design', desc: 'AutoCAD 2D/3D' },
    ]

    return (
        <section id="about" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        About <span className="text-gradient">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Bio & Timeline */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="glass p-8 rounded-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
                            <p className="text-gray-300 leading-relaxed relative z-10">
                                Hello! I&apos;m <span className="text-primary font-semibold">Jagan Kumar Swain</span>,
                                a passionate Electronics and Communication Engineering student at NIST University.
                                I bridge the gap between hardware and software, exploring the intricate world of
                                <span className="text-secondary"> VLSI design</span>, <span className="text-accent">IoT</span>,
                                and <span className="text-secondary">Data Science</span>.
                            </p>
                            <p className="text-gray-300 leading-relaxed mt-4 relative z-10">
                                As a Research Scholar at IIT Madras, I&apos;m diving deep into data applications.
                                My goal is to design intelligent systems that solve real-world problems.
                            </p>
                        </div>

                        {/* Timeline */}
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                                <Briefcase className="text-primary" /> Journey
                            </h3>
                            <div className="space-y-6 border-l-2 border-white/10 pl-6 ml-2">
                                {timeline.map((item, index) => (
                                    <div key={index} className="relative">
                                        <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                                        <span className="text-sm text-primary font-mono">{item.year}</span>
                                        <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                                        <p className="text-gray-400 text-sm">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Interests & Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {interests.map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="glass-card p-6 flex flex-col items-center text-center space-y-4"
                            >
                                <div className="p-4 rounded-full bg-primary/10 text-primary">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                <p className="text-gray-400 text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
