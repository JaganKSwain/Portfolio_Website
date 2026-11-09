'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Cpu,
  Activity,
  Plane,
  Sparkles,
  Terminal,
  Layers,
  ArrowUpRight,
} from 'lucide-react'
import GuardXSimulator from './GuardXSimulator'
import DeepBeatSimulator from './DeepBeatSimulator'
import AluSimulator from './AluSimulator'

type LabTab = 'guardx' | 'deepbeat' | 'alu'

export default function InteractiveLab() {
  const [activeTab, setActiveTab] = useState<LabTab>('guardx')

  const tabs: {
    id: LabTab
    title: string
    subtitle: string
    badge: string
    icon: any
  }[] = [
    {
      id: 'guardx',
      title: 'GuardX Sentinel HUD',
      subtitle: 'Drone Edge AI & Thermal Vision',
      badge: '₹50K Defence Grant',
      icon: <Plane size={16} className="text-secondary" />,
    },
    {
      id: 'deepbeat',
      title: 'DeepBeat Oscilloscope',
      subtitle: 'ECG Arrhythmia CNN-LSTM',
      badge: '96% Clinical Accuracy',
      icon: <Activity size={16} className="text-primary" />,
    },
    {
      id: 'alu',
      title: '16-Op Verilog ALU',
      subtitle: 'RTL Architecture & Flags',
      badge: 'Vivado 2025.2 Verified',
      icon: <Cpu size={16} className="text-accent" />,
    },
  ]

  return (
    <section id="lab" className="py-24 relative overflow-hidden bg-background">
      {/* Background Section Glow */}
      <div className="absolute inset-0 bg-hero-glow opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-primary/10 text-primary border border-primary/20">
            <Sparkles size={13} />
            <span>INTERACTIVE SIMULATION LAB</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white">
            Live Architecture & <span className="text-gradient">Telemetry Lab</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Test and interact directly with simulated working pipelines of my defence drone vision,
            cardiac deep learning models, and synthesized digital hardware logic.
          </p>
        </motion.div>

        {/* Tab Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-4xl mx-auto mb-10">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`p-4 rounded-2xl text-left border transition-all duration-300 relative group ${
                  isActive
                    ? 'bg-surface-light border-primary/50 shadow-teal-glow'
                    : 'bg-surface-container/70 border-glass-border hover:border-slate-600 hover:bg-surface-container'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-xl bg-background border border-glass-border">
                    {tab.icon}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-lowest border border-glass-border text-slate-300">
                    {tab.badge}
                  </span>
                </div>
                <div className="text-sm sm:text-base font-heading font-bold text-white group-hover:text-primary transition-colors">
                  {tab.title}
                </div>
                <div className="text-xs font-mono text-slate-400 mt-0.5 truncate">
                  {tab.subtitle}
                </div>
              </button>
            )
          })}
        </div>

        {/* Active Simulation Viewport Container */}
        <div className="modern-card p-6 sm:p-8 max-w-5xl mx-auto relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'guardx' && <GuardXSimulator />}
              {activeTab === 'deepbeat' && <DeepBeatSimulator />}
              {activeTab === 'alu' && <AluSimulator />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

