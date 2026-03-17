'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function CircuitBoard() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 800"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Substrate */}
        <rect width="1200" height="800" fill="transparent" />

        {/* PCB Traces — Emerald */}
        <motion.path
          d="M50,120 L200,120 L200,80 L380,80 L380,200 L520,200"
          stroke="#10b981"
          strokeWidth="2"
          fill="none"
          strokeOpacity="0.4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'loop' }}
        />
        <motion.path
          d="M80,350 L250,350 L250,280 L450,280 L450,400 L650,400"
          stroke="#14b8a6"
          strokeWidth="2"
          fill="none"
          strokeOpacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3.5, repeat: Infinity, repeatType: 'loop', delay: 0.5 }}
        />
        <motion.path
          d="M150,550 L350,550 L350,620 L600,620 L600,500 L800,500"
          stroke="#10b981"
          strokeWidth="2"
          fill="none"
          strokeOpacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: 'loop', delay: 1 }}
        />
        <motion.path
          d="M700,100 L900,100 L900,250 L1100,250"
          stroke="#14b8a6"
          strokeWidth="1.5"
          fill="none"
          strokeOpacity="0.25"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'loop', delay: 1.5 }}
        />
        <motion.path
          d="M800,400 L950,400 L950,550 L1150,550"
          stroke="#10b981"
          strokeWidth="1.5"
          fill="none"
          strokeOpacity="0.2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3.5, repeat: Infinity, repeatType: 'loop', delay: 2 }}
        />

        {/* IC Chip Components */}
        <motion.g
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <rect x="330" y="150" width="100" height="60" rx="4"
            fill="#12121a" stroke="#10b981" strokeWidth="1" strokeOpacity="0.4" />
          {/* Chip pins */}
          {[0, 1, 2, 3].map(i => (
            <rect key={`pin-t-${i}`} x={345 + i * 20} y="145" width="8" height="5" rx="1"
              fill="#10b981" fillOpacity="0.3" />
          ))}
          {[0, 1, 2, 3].map(i => (
            <rect key={`pin-b-${i}`} x={345 + i * 20} y="210" width="8" height="5" rx="1"
              fill="#10b981" fillOpacity="0.3" />
          ))}
          <text x="380" y="185" textAnchor="middle" fill="#10b981" fillOpacity="0.5"
            fontSize="8" fontFamily="monospace">MCU</text>
        </motion.g>

        <motion.g
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
        >
          <rect x="600" y="350" width="80" height="50" rx="4"
            fill="#12121a" stroke="#d97706" strokeWidth="1" strokeOpacity="0.3" />
          {[0, 1, 2].map(i => (
            <rect key={`pin-t2-${i}`} x={612 + i * 20} y="345" width="8" height="5" rx="1"
              fill="#d97706" fillOpacity="0.3" />
          ))}
          {[0, 1, 2].map(i => (
            <rect key={`pin-b2-${i}`} x={612 + i * 20} y="400" width="8" height="5" rx="1"
              fill="#d97706" fillOpacity="0.3" />
          ))}
          <text x="640" y="380" textAnchor="middle" fill="#d97706" fillOpacity="0.4"
            fontSize="7" fontFamily="monospace">FPGA</text>
        </motion.g>

        {/* Via Points — emerald filled circles */}
        {[
          { x: 200, y: 120 }, { x: 380, y: 80 }, { x: 520, y: 200 },
          { x: 250, y: 350 }, { x: 450, y: 280 }, { x: 650, y: 400 },
          { x: 350, y: 550 }, { x: 600, y: 620 }, { x: 800, y: 500 },
          { x: 900, y: 100 }, { x: 1100, y: 250 },
        ].map((point, i) => (
          <motion.circle
            key={i}
            cx={point.x}
            cy={point.y}
            r="3"
            fill="#10b981"
            fillOpacity="0.5"
            initial={{ opacity: 0.2 }}
            animate={{
              opacity: [0.2, 0.7, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: i * 0.15,
            }}
          />
        ))}

        {/* SMD Resistor Components */}
        {[
          { x: 140, y: 116, r: 0 },
          { x: 500, y: 196, r: 0 },
          { x: 300, y: 276, r: 90 },
          { x: 750, y: 496, r: 0 },
        ].map((comp, i) => (
          <g key={`smd-${i}`} transform={`translate(${comp.x}, ${comp.y}) rotate(${comp.r})`} opacity="0.25">
            <rect x="-10" y="-4" width="20" height="8" rx="1"
              fill="#1a1a25" stroke="#10b981" strokeWidth="0.5" />
            <rect x="-10" y="-4" width="4" height="8" rx="0.5" fill="#d97706" fillOpacity="0.4" />
            <rect x="6" y="-4" width="4" height="8" rx="0.5" fill="#d97706" fillOpacity="0.4" />
          </g>
        ))}

        {/* Mouse follower glow */}
        <motion.circle
          cx={mousePosition.x}
          cy={mousePosition.y}
          r="60"
          fill="url(#mouseGlow)"
          className="pointer-events-none"
        />
        <defs>
          <radialGradient id="mouseGlow">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
}
