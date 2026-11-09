'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Camera,
  Flame,
  Activity,
  Zap,
  Radio,
  Crosshair,
  ShieldAlert,
  Battery,
  Compass,
} from 'lucide-react'

export default function GuardXSimulator() {
  const [visionMode, setVisionMode] = useState<'optical' | 'thermal'>('thermal')
  const [droneArmed, setDroneArmed] = useState(true)
  const [altitude, setAltitude] = useState(38)
  const [latency, setLatency] = useState(16.4)
  const [targetLocked, setTargetLocked] = useState(true)

  // Minor telemetry jitter for realistic live feeling
  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(Number((15.5 + Math.random() * 2.2).toFixed(1)))
      setAltitude((prev) => Number((37.5 + Math.random() * 1.5).toFixed(1)))
    }, 1800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-6">
      {/* Telemetry Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
        <div className="p-3 rounded-xl bg-surface-light border border-glass-border flex items-center justify-between">
          <span className="text-slate-400 flex items-center gap-1.5">
            <Radio size={14} className="text-primary animate-pulse" />
            <span>Telemetry</span>
          </span>
          <span className="text-accent font-semibold">LINK ACTIVE</span>
        </div>

        <div className="p-3 rounded-xl bg-surface-light border border-glass-border flex items-center justify-between">
          <span className="text-slate-400 flex items-center gap-1.5">
            <Zap size={14} className="text-secondary" />
            <span>Edge Latency</span>
          </span>
          <span className="text-white font-semibold">{latency} ms</span>
        </div>

        <div className="p-3 rounded-xl bg-surface-light border border-glass-border flex items-center justify-between">
          <span className="text-slate-400 flex items-center gap-1.5">
            <Compass size={14} className="text-primary" />
            <span>Altitude</span>
          </span>
          <span className="text-white font-semibold">{altitude} m AGL</span>
        </div>

        <div className="p-3 rounded-xl bg-surface-light border border-glass-border flex items-center justify-between">
          <span className="text-slate-400 flex items-center gap-1.5">
            <Battery size={14} className="text-accent" />
            <span>Nicla Core</span>
          </span>
          <span className="text-white font-semibold">58 FPS / 1.1W</span>
        </div>
      </div>

      {/* Main HUD Viewport */}
      <div
        className={`relative h-[340px] sm:h-[400px] rounded-2xl overflow-hidden border-2 transition-colors duration-500 ${
          visionMode === 'thermal'
            ? 'bg-gradient-to-br from-slate-950 via-purple-950/40 to-amber-950/30 border-amber-500/40'
            : 'bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/30 border-primary/40'
        }`}
      >
        {/* Synthetic Horizon & Grid Lines */}
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute inset-x-0 top-1/2 h-[1px] bg-primary/20 pointer-events-none" />
        <div className="absolute inset-y-0 left-1/2 w-[1px] bg-primary/20 pointer-events-none" />

        {/* Reticle in Center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full border border-primary/30 flex items-center justify-center pointer-events-none">
          <Crosshair size={32} className="text-primary/60" />
        </div>

        {/* Simulated Human Target with Bounding Box */}
        <motion.div
          animate={{
            x: [0, 8, -6, 0],
            y: [0, -4, 6, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 cursor-pointer group"
          onClick={() => setTargetLocked(!targetLocked)}
        >
          {/* Bounding Box */}
          <div
            className={`w-36 h-48 border-2 rounded-lg p-2 flex flex-col justify-between transition-all duration-300 ${
              targetLocked
                ? 'border-red-500/80 bg-red-500/10 shadow-[0_0_20px_rgba(239,68,68,0.3)]'
                : 'border-yellow-500/70 bg-yellow-500/10'
            }`}
          >
            {/* Top Label */}
            <div className="flex items-center justify-between text-[10px] font-mono font-bold">
              <span className="px-1.5 py-0.5 rounded bg-red-500 text-white">
                TARGET LOCKED
              </span>
              <span className="text-red-400">98.4% CONF</span>
            </div>

            {/* Target Silhouette Representation */}
            <div className="flex-1 flex items-center justify-center">
              <div
                className={`w-14 h-28 rounded-full blur-[2px] transition-all duration-500 ${
                  visionMode === 'thermal'
                    ? 'bg-gradient-to-t from-red-600 via-amber-500 to-yellow-300 opacity-90'
                    : 'bg-slate-400/50'
                }`}
              />
            </div>

            {/* Bottom Meta */}
            <div className="text-[10px] font-mono text-slate-200 bg-background/80 px-1.5 py-0.5 rounded">
              Human Activity &bull; Dist: 24m
            </div>
          </div>
        </motion.div>

        {/* HUD Corner Indicators */}
        <div className="absolute top-4 left-4 font-mono text-[11px] text-slate-300 space-y-1 bg-background/60 backdrop-blur-sm p-2 rounded-lg border border-glass-border">
          <div className="text-primary font-bold">GUARDX SENTINEL v2.4</div>
          <div>SENSOR: ARDUINO NICLA VISION</div>
          <div>MODE: {visionMode.toUpperCase()} STREAM</div>
        </div>

        <div className="absolute top-4 right-4 font-mono text-[11px] text-slate-300 space-y-1 bg-background/60 backdrop-blur-sm p-2 rounded-lg border border-glass-border text-right">
          <div className="text-amber-400 font-bold">DEFENCE R&D PROTOCOL</div>
          <div>PAYLOAD: OPTICAL + THERMAL</div>
          <div className="text-accent">ENCRYPTION: AES-256</div>
        </div>

        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-auto">
          {/* Sensor Mode Toggle Button */}
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-background/80 backdrop-blur-md border border-glass-border">
            <button
              onClick={() => setVisionMode('thermal')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                visionMode === 'thermal'
                  ? 'bg-amber-500 text-slate-950 shadow-amber-glow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Flame size={14} />
              <span>Thermal IR</span>
            </button>
            <button
              onClick={() => setVisionMode('optical')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                visionMode === 'optical'
                  ? 'bg-primary text-slate-950 shadow-teal-glow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Camera size={14} />
              <span>Optical RGB</span>
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400 bg-background/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-glass-border">
            <ShieldAlert size={14} className="text-amber-400" />
            <span>Awarded ₹50,000 Grant by Army AD College</span>
          </div>
        </div>
      </div>
    </div>
  )
}

