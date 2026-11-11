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
      icon: <Cpu className="w-5 h-5 text-accent" />,
      title: 'VLSI & 10T SRAM CiM',
      desc: 'Designing 32×32 differential 10T SRAM compute-in-memory macros in SkyWater 130nm, closed timing at 200 MHz, verified via Cocotb and SPICE.',
      tags: ['SkyWater 130nm', '10T SRAM CiM', 'Yosys', 'Vivado', 'Cocotb'],
      borderColor: 'group-hover:border-accent/40',
    },
    {
      icon: <Brain className="w-5 h-5 text-primary" />,
      title: 'Deep Learning & Medical CV',
      desc: 'Benchmarked 15 DL architectures on RFMiD (3,200 fundus scans); 7-model ensemble achieving RIADD 0.756 and mean AUC 0.933 under stratified 5-fold CV.',
      tags: ['PyTorch', 'MaxViT', 'Vision Transformers', 'RFMiD', 'Medical Imaging'],
      borderColor: 'group-hover:border-primary/40',
    },
    {
      icon: <Plane className="w-5 h-5 text-secondary" />,
      title: '8-Layer PCB Avionics & Drones',
      desc: 'Engineered a 34.29 mm² 8-layer micro drone flight controller and 4-in-1 ESC in EasyEDA with STM32F411, ICM-42688-P IMU, and 24-MOSFET power stages.',
      tags: ['8-Layer PCB', 'EasyEDA', 'STM32F411', '4-in-1 ESC', 'Avionics'],
      borderColor: 'group-hover:border-secondary/40',
    },
    {
      icon: <Code2 className="w-5 h-5 text-cyan-400" />,
      title: 'Full-Stack & Edge Compute',
      desc: 'Deploying edge computer vision pipelines on Arduino Nicla Vision (GuardX Sentinel ₹50K grant) and building secure JWT web backends.',
      tags: ['Edge AI', 'Nicla Vision', 'Next.js', 'Node.js', 'Flask'],
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
            Spanning custom mixed-signal VLSI, high-density 8-layer PCB avionics, and medical deep learning architectures —
            delivering mathematically rigorous and experimentally verified physical systems.
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
                My background in <span className="text-white font-semibold">Electronics & Communication (9.1 CGPA)</span> coupled with intensive study in{' '}
                <span className="text-white font-semibold">Data Science at IIT Madras (8.1 CGPA)</span> enables me to co-design
                algorithms directly alongside the physical silicon executing them.
              </p>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                From routing an <span className="text-secondary font-medium">8-layer double-sided 34.29 mm² flight controller</span> with 243 components at PE Geometry,
                to designing an open-source <span className="text-accent font-medium">10T SRAM Compute-In-Memory macro</span> in SkyWater 130nm,
                and benchmarking 15 deep learning networks for retinal diagnosis at <span className="text-primary font-medium">IISER Berhampur</span>,
                my work focuses on verifiable accuracy and measurable hardware efficiency.
              </p>

              {/* Bullet highlights */}
              <div className="pt-2 space-y-3 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>
                    <strong>First-Author Research:</strong> 2 manuscripts in preparation (RFMiD retinal benchmark & SkyWater 130nm CiM macro).
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                  <span>
                    <strong>Micro Drone Avionics:</strong> Designed 8-layer 34.29 mm² all-in-one flight controller and 4-in-1 ESC board in EasyEDA.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  <span>
                    <strong>Defence Grant Recipient:</strong> ₹50,000 research grant from Army AD College & NIST for GuardX Sentinel.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
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
