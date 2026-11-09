'use client'

import { motion } from 'framer-motion'
import {
  Brain,
  Cpu,
  Plane,
  Code2,
  Terminal,
  Layers,
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react'
import Image from 'next/image'

export default function AboutSection() {
  const pillars = [
    {
      icon: <Brain className="w-5 h-5 text-primary" />,
      title: 'Deep Learning & Medical CV',
      desc: 'Developing CNN-LSTM networks and segmentation pipelines for ophthalmic fundus diagnostics and time-series physiological data.',
      tags: ['PyTorch', 'Computer Vision', 'Medical Imaging', 'Time-Series'],
      borderColor: 'group-hover:border-primary/40',
    },
    {
      icon: <Plane className="w-5 h-5 text-secondary" />,
      title: 'Micro Drones & Edge AI',
      desc: 'Prototyping drone avionics, telemetry, and on-device machine vision using Arduino Nicla Vision and constrained microcontrollers.',
      tags: ['Drone Avionics', 'Nicla Vision', 'IoT Telemetry', 'Embedded C'],
      borderColor: 'group-hover:border-secondary/40',
    },
    {
      icon: <Cpu className="w-5 h-5 text-accent" />,
      title: 'VLSI & Digital Logic',
      desc: 'Designing RTL architectures in Verilog HDL, verifying 16-operation ALUs, and simulating timing waveforms in Vivado 2025.2.',
      tags: ['Verilog HDL', 'Vivado 2025.2', 'FPGA', 'RTL Simulation'],
      borderColor: 'group-hover:border-accent/40',
    },
    {
      icon: <Code2 className="w-5 h-5 text-cyan-400" />,
      title: 'Full-Stack & Microservices',
      desc: 'Constructing robust web platforms with Next.js, Flask backends, Node.js, and cryptographically secure JWT authentication.',
      tags: ['Next.js', 'Node.js', 'Flask', 'REST APIs', 'MongoDB'],
      borderColor: 'group-hover:border-cyan-400/40',
    },
  ]

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background">
      {/* Background Section Glow */}
      <div className="absolute inset-0 bg-section-glow pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-primary/10 text-primary border border-primary/20">
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white">
            Engineering from <span className="text-gradient">Silicon to Cloud</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            I specialize at the intersection of electrical hardware and modern artificial intelligence —
            delivering deployable systems that run efficiently in resource-constrained environments.
          </p>
        </motion.div>

        {/* Narrative & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Narrative Column (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="modern-card p-6 sm:p-8 space-y-5">
              <h3 className="text-xl font-heading font-bold text-white flex items-center gap-2.5">
                <Layers className="text-primary w-5 h-5" />
                <span>The Engineering Philosophy</span>
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Most modern systems treat software and hardware as disconnected silos.
                My background in <span className="text-white font-semibold">Electronics & Communication</span> coupled with intensive study in{' '}
                <span className="text-white font-semibold">Data Science at IIT Madras</span> allows me to optimize
                algorithms specifically for the physical silicon executing them.
              </p>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Whether it is reducing inference latency for human activity detection on a flying micro-drone,
                synthesizing a 16-operation ALU in Verilog HDL, or training a hybrid CNN-LSTM to detect cardiac arrhythmias from 87,000+ ECG samples,
                I focus on verifiable accuracy and measurable performance.
              </p>

              {/* Bullet highlights */}
              <div className="pt-2 space-y-3 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>
                    <strong>Dual Academic Focus:</strong> Core Electronics & Communication (9.1 CGPA) + IIT Madras Data Science (8.1 CGPA).
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                  <span>
                    <strong>Defence Grant Recipient:</strong> ₹50,000 research grant from Army AD College & NIST for GuardX Sentinel.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span>
                    <strong>National Recognition:</strong> Smart India Hackathon Grand Finalist (Top 5 for Govt. of Odisha problem).
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Pillars Cards (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className={`modern-card p-5 group flex flex-col justify-between space-y-4 ${pillar.borderColor} transition-all duration-300`}
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-surface-light border border-glass-border flex items-center justify-center">
                    {pillar.icon}
                  </div>
                  <h4 className="text-base font-heading font-bold text-white group-hover:text-primary transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-glass-border">
                  {pillar.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-surface-light text-slate-300 border border-glass-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
