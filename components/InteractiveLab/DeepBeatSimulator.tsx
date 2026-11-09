'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import {
  Heart,
  Activity,
  Play,
  Pause,
  AlertTriangle,
  CheckCircle2,
  Cpu,
  BarChart3,
} from 'lucide-react'

type RhythmType = 'nsr' | 'pvc' | 'svt'

const rhythms: Record<
  RhythmType,
  {
    name: string
    code: string
    bpm: number
    confidence: number
    description: string
    status: 'Normal' | 'Anomalous' | 'Critical'
    color: string
  }
> = {
  nsr: {
    name: 'Normal Sinus Rhythm (NSR)',
    code: 'CLASS_0_NSR',
    bpm: 72,
    confidence: 99.4,
    description: 'Uniform P-Q-R-S-T morphology, regular R-R intervals across lead II.',
    status: 'Normal',
    color: '#10b981',
  },
  pvc: {
    name: 'Premature Ventricular Contraction (PVC)',
    code: 'CLASS_1_VEB',
    bpm: 88,
    confidence: 96.8,
    description: 'Premature, bizarre QRS complex exceeding 120ms with inverted T wave. High clinical urgency.',
    status: 'Anomalous',
    color: '#f59e0b',
  },
  svt: {
    name: 'Supraventricular Tachycardia (SVT)',
    code: 'CLASS_2_SVEB',
    bpm: 148,
    confidence: 97.2,
    description: 'Rapid, narrow-complex regular tachycardia originating above the bundle of His.',
    status: 'Critical',
    color: '#ef4444',
  },
}

export default function DeepBeatSimulator() {
  const [selectedRhythm, setSelectedRhythm] = useState<RhythmType>('pvc')
  const [isPlaying, setIsPlaying] = useState(true)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const animFrameRef = useRef<number | null>(null)
  const offsetRef = useRef(0)

  const current = rhythms[selectedRhythm]

  // Oscilloscope Animation Loop
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = (canvas.width = canvas.parentElement?.clientWidth || 700)
    let height = (canvas.height = 240)

    const handleResize = () => {
      if (canvas && canvas.parentElement) {
        width = canvas.width = canvas.parentElement.clientWidth
        height = canvas.height = 240
      }
    }
    window.addEventListener('resize', handleResize)

    const render = () => {
      ctx.fillStyle = '#05080f'
      ctx.fillRect(0, 0, width, height)

      // Draw Grid Lines (Medical Oscilloscope Style)
      ctx.lineWidth = 0.5
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.08)'

      for (let x = 0; x < width; x += 20) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }
      for (let y = 0; y < height; y += 20) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }

      // Draw ECG Path
      ctx.lineWidth = 2.2
      ctx.strokeStyle = current.color
      ctx.shadowColor = current.color
      ctx.shadowBlur = 8

      ctx.beginPath()

      const midY = height / 2
      const step = 2
      const period = selectedRhythm === 'svt' ? 120 : selectedRhythm === 'pvc' ? 220 : 180

      for (let x = 0; x < width; x += step) {
        const t = (x + offsetRef.current) % period
        let yOffset = 0

        // P wave
        if (t > 20 && t < 40) {
          yOffset = -Math.sin(((t - 20) / 20) * Math.PI) * 12
        }
        // Q drop
        else if (t >= 50 && t < 55) {
          yOffset = 8
        }
        // R peak
        else if (t >= 55 && t < 65) {
          const rHeight = selectedRhythm === 'pvc' ? -78 : -65
          yOffset = rHeight * Math.sin(((t - 55) / 10) * Math.PI)
        }
        // S drop
        else if (t >= 65 && t < 72) {
          const sDepth = selectedRhythm === 'pvc' ? 36 : 18
          yOffset = sDepth
        }
        // T wave (anomalous inversion in PVC)
        else if (t >= 95 && t < 135) {
          const tFactor = selectedRhythm === 'pvc' ? 20 : -18
          yOffset = Math.sin(((t - 95) / 40) * Math.PI) * tFactor
        }

        const y = midY + yOffset

        if (x === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }

      ctx.stroke()

      // Reset shadow
      ctx.shadowBlur = 0

      // Sweep Line
      const sweepX = (offsetRef.current * 2) % width
      const sweepGrad = ctx.createLinearGradient(sweepX - 40, 0, sweepX, 0)
      sweepGrad.addColorStop(0, 'transparent')
      sweepGrad.addColorStop(1, 'rgba(6, 182, 212, 0.25)')
      ctx.fillStyle = sweepGrad
      ctx.fillRect(sweepX - 40, 0, 40, height)

      if (isPlaying) {
        offsetRef.current += selectedRhythm === 'svt' ? 4.2 : 2.6
      }

      animFrameRef.current = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current)
    }
  }, [selectedRhythm, isPlaying, current.color])

  return (
    <div className="space-y-6">
      {/* Top Controls & Rhythm Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {(Object.keys(rhythms) as RhythmType[]).map((key) => {
            const item = rhythms[key]
            const isActive = selectedRhythm === key
            return (
              <button
                key={key}
                onClick={() => setSelectedRhythm(key)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                  isActive
                    ? 'bg-primary/20 border border-primary/50 text-white shadow-teal-glow'
                    : 'bg-surface-light border border-glass-border text-slate-400 hover:text-white'
                }`}
              >
                {item.name.split(' (')[0]}
              </button>
            )
          })}
        </div>

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-light border border-glass-border text-xs font-mono text-slate-300 hover:text-white"
        >
          {isPlaying ? <Pause size={13} /> : <Play size={13} />}
          <span>{isPlaying ? 'Pause Sweep' : 'Resume Sweep'}</span>
        </button>
      </div>

      {/* Oscilloscope Canvas */}
      <div className="relative rounded-2xl overflow-hidden border border-glass-border shadow-xl">
        <canvas ref={canvasRef} className="w-full block" />

        {/* Live HUD Overlay */}
        <div className="absolute top-3 left-3 text-[11px] font-mono text-slate-400 bg-background/70 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-glass-border">
          <div className="text-white font-bold flex items-center gap-1.5">
            <Heart size={13} className="text-red-400 animate-pulse" />
            <span>HEART RATE: {current.bpm} BPM</span>
          </div>
          <div>DATASET: MIT-BIH ARRHYTHMIA (87,000+ SAMPLES)</div>
        </div>

        <div className="absolute top-3 right-3 text-[11px] font-mono bg-background/70 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-glass-border text-right">
          <div className="text-slate-200 font-bold">MODEL: CNN-LSTM IN PYTORCH</div>
          <div className="text-accent font-semibold">OVERALL ACCURACY: 96.0%</div>
        </div>

        {/* Classification Prediction Strip */}
        <div className="absolute bottom-3 inset-x-3 flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-xl bg-background/85 backdrop-blur-md border border-glass-border text-xs font-mono">
          <div className="flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: current.color }}
            />
            <span className="text-white font-bold">{current.name}</span>
            <span className="text-slate-400 text-[11px]">[{current.code}]</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-slate-300">
              Model Confidence:{' '}
              <strong className="text-accent">{current.confidence}%</strong>
            </span>
            <span
              className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                current.status === 'Normal'
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                  : 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
              }`}
            >
              {current.status.toUpperCase()}
            </span>
          </div>
        </div>
      </div>

      {/* Model Diagnostic Description */}
      <div className="p-4 rounded-xl bg-surface-light/60 border border-glass-border text-xs sm:text-sm text-slate-300 leading-relaxed font-mono flex items-start gap-3">
        <Activity size={18} className="text-primary mt-0.5 flex-shrink-0" />
        <div>
          <strong className="text-white block font-heading mb-0.5">
            Neural Feature Representation:
          </strong>
          {current.description} Trained on over 87,000 multi-patient ECG recordings with high sensitivity
          for ventricular tachycardia risk scoring.
        </div>
      </div>
    </div>
  )
}

