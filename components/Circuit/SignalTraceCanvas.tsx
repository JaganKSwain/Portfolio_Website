'use client'

import { useEffect, useRef } from 'react'

interface TracePoint {
  x: number
  y: number
}

interface BusTrace {
  points: TracePoint[]
  color: string
  speed: number
  progress: number
  length: number
}

interface ChipNode {
  x: number
  y: number
  width: number
  height: number
  label: string
  sublabel: string
  color: string
}

export default function SignalTraceCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const mouseRef = useRef<{ x: number; y: number }>({ x: -1000, y: -1000 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    // Define subtle architectural nodes
    const chipNodes: ChipNode[] = [
      {
        x: width * 0.12,
        y: height * 0.22,
        width: 100,
        height: 50,
        label: 'NICLA VISION',
        sublabel: 'EDGE AI CORE',
        color: '#06b6d4',
      },
      {
        x: width * 0.82,
        y: height * 0.28,
        width: 90,
        height: 50,
        label: 'PYTORCH',
        sublabel: 'CNN-LSTM ENGINE',
        color: '#10b981',
      },
      {
        x: width * 0.18,
        y: height * 0.72,
        width: 90,
        height: 50,
        label: 'VIVADO RTL',
        sublabel: '16-BIT ALU',
        color: '#f59e0b',
      },
      {
        x: width * 0.78,
        y: height * 0.78,
        width: 95,
        height: 50,
        label: 'DRONE AVIONICS',
        sublabel: 'TELEMETRY BUS',
        color: '#38bdf8',
      },
    ]

    // Create traces connecting nodes with orthogonal PCB paths
    const traces: BusTrace[] = [
      {
        points: [
          { x: width * 0.12 + 50, y: height * 0.22 + 50 },
          { x: width * 0.12 + 50, y: height * 0.45 },
          { x: width * 0.35, y: height * 0.45 },
          { x: width * 0.35, y: height * 0.65 },
          { x: width * 0.18 + 45, y: height * 0.72 },
        ],
        color: '#06b6d4',
        speed: 0.003,
        progress: 0.1,
        length: 600,
      },
      {
        points: [
          { x: width * 0.82 + 45, y: height * 0.28 + 50 },
          { x: width * 0.82 + 45, y: height * 0.52 },
          { x: width * 0.65, y: height * 0.52 },
          { x: width * 0.65, y: height * 0.7 },
          { x: width * 0.78 + 45, y: height * 0.78 },
        ],
        color: '#10b981',
        speed: 0.0025,
        progress: 0.5,
        length: 550,
      },
      {
        points: [
          { x: width * 0.25, y: height * 0.15 },
          { x: width * 0.5, y: height * 0.15 },
          { x: width * 0.5, y: height * 0.32 },
          { x: width * 0.75, y: height * 0.32 },
        ],
        color: '#f59e0b',
        speed: 0.0035,
        progress: 0.8,
        length: 500,
      },
    ]

    let animFrame: number

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // Draw subtle background orthogonal bus lines
      traces.forEach((trace) => {
        ctx.beginPath()
        ctx.moveTo(trace.points[0].x, trace.points[0].y)
        for (let i = 1; i < trace.points.length; i++) {
          ctx.lineTo(trace.points[i].x, trace.points[i].y)
        }
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)'
        ctx.lineWidth = 1.5
        ctx.stroke()

        // Draw traveling electron pulse
        trace.progress = (trace.progress + trace.speed) % 1
        const totalSegments = trace.points.length - 1
        const currentSegmentIndex = Math.floor(trace.progress * totalSegments)
        const segmentProgress = (trace.progress * totalSegments) % 1

        const p1 = trace.points[currentSegmentIndex]
        const p2 = trace.points[Math.min(currentSegmentIndex + 1, totalSegments)]

        if (p1 && p2) {
          const px = p1.x + (p2.x - p1.x) * segmentProgress
          const py = p1.y + (p2.y - p1.y) * segmentProgress

          ctx.beginPath()
          ctx.arc(px, py, 2.5, 0, Math.PI * 2)
          ctx.fillStyle = trace.color
          ctx.shadowColor = trace.color
          ctx.shadowBlur = 8
          ctx.fill()
          ctx.shadowBlur = 0
        }
      })

      // Draw subtle chip nodes on large viewports
      if (width > 1024) {
        chipNodes.forEach((node) => {
          const dx = mouseRef.current.x - (node.x + node.width / 2)
          const dy = mouseRef.current.y - (node.y + node.height / 2)
          const dist = Math.sqrt(dx * dx + dy * dy)
          const isNear = dist < 140

          ctx.save()
          ctx.fillStyle = isNear ? 'rgba(15, 23, 42, 0.7)' : 'rgba(15, 23, 42, 0.4)'
          ctx.strokeStyle = isNear ? node.color : 'rgba(255, 255, 255, 0.08)'
          ctx.lineWidth = isNear ? 1.5 : 1

          // Rounded rect
          const r = 8
          ctx.beginPath()
          ctx.roundRect(node.x, node.y, node.width, node.height, r)
          ctx.fill()
          ctx.stroke()

          // Chip Labels
          ctx.font = 'bold 9px monospace'
          ctx.fillStyle = isNear ? node.color : 'rgba(226, 232, 240, 0.5)'
          ctx.fillText(node.label, node.x + 8, node.y + 20)

          ctx.font = '7px monospace'
          ctx.fillStyle = 'rgba(148, 163, 184, 0.4)'
          ctx.fillText(node.sublabel, node.x + 8, node.y + 34)

          // Pin notches
          ctx.fillStyle = isNear ? node.color : 'rgba(255, 255, 255, 0.15)'
          for (let p = 0; p < 4; p++) {
            ctx.fillRect(node.x + 12 + p * 20, node.y - 3, 6, 3)
            ctx.fillRect(node.x + 12 + p * 20, node.y + node.height, 6, 3)
          }

          ctx.restore()
        })
      }

      animFrame = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animFrame)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
    />
  )
}

