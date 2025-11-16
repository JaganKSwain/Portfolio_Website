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
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 800"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Circuit Board Background */}
        <rect width="1200" height="800" fill="#0a192f" />

        {/* Circuit Traces */}
        <motion.path
          d="M100,100 L300,100 L300,200 L500,200"
          stroke="#2d6a4f"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
        />
        <motion.path
          d="M100,300 L400,300 L400,500 L700,500"
          stroke="#2d6a4f"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: 'loop', delay: 0.5 }}
        />
        <motion.path
          d="M200,600 L600,600 L600,700 L1000,700"
          stroke="#2d6a4f"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'loop', delay: 1 }}
        />

        {/* IC Chips */}
        <motion.rect
          x="250"
          y="150"
          width="100"
          height="80"
          fill="#1a4d3a"
          stroke="#00ff88"
          strokeWidth="2"
          rx="4"
          animate={{
            boxShadow: [
              '0 0 0px rgba(0, 255, 136, 0.5)',
              '0 0 20px rgba(0, 255, 136, 0.8)',
              '0 0 0px rgba(0, 255, 136, 0.5)',
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.rect
          x="550"
          y="450"
          width="100"
          height="80"
          fill="#1a4d3a"
          stroke="#00ff88"
          strokeWidth="2"
          rx="4"
          animate={{
            boxShadow: [
              '0 0 0px rgba(0, 255, 136, 0.5)',
              '0 0 20px rgba(0, 255, 136, 0.8)',
              '0 0 0px rgba(0, 255, 136, 0.5)',
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />

        {/* Connection Points */}
        {[
          { x: 100, y: 100 },
          { x: 300, y: 100 },
          { x: 300, y: 200 },
          { x: 500, y: 200 },
          { x: 100, y: 300 },
          { x: 400, y: 300 },
          { x: 400, y: 500 },
          { x: 700, y: 500 },
        ].map((point, i) => (
          <motion.circle
            key={i}
            cx={point.x}
            cy={point.y}
            r="5"
            fill="#00ff88"
            initial={{ opacity: 0.3 }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}

        {/* Animated Signal Flow */}
        <motion.circle
          cx={mousePosition.x}
          cy={mousePosition.y}
          r="30"
          fill="rgba(0, 255, 136, 0.1)"
          className="pointer-events-none"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.3, 0, 0.3],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </svg>
    </div>
  )
}

