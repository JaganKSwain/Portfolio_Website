'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navigation/Navbar'
import CircuitBoard from '@/components/Circuit/CircuitBoard'
import { Code2, Cpu, Zap, Target } from 'lucide-react'

export default function AboutPage() {
  const interests = [
    { icon: Code2, title: 'Programming', description: 'Gaming projects in C, JavaScript, and Python' },
    { icon: Cpu, title: 'VLSI Design', description: 'Integrated circuit design and analysis' },
    { icon: Zap, title: 'Circuit Design', description: 'PCB design using EasyEDA and MATLAB' },
    { icon: Target, title: 'CAD Design', description: '2D and 3D structural drawings with AutoCAD' },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="relative pt-24 pb-16">
        <CircuitBoard />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-signal-neon to-signal-cyan bg-clip-text text-transparent">
              About Me
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-effect rounded-lg p-8 mb-8"
            >
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Hello! I&apos;m <span className="text-signal-neon font-semibold">Jagan Kumar Swain</span>, 
                a passionate Electronics and Communication Engineering student at the National Institute 
                of Science and Technology (NIST University), Berhampur, Odisha, India. 
                Also a Undergraduate Research Scholar (BS) in the field of Data Science and Applications 
                at the Indian Institute of Technology Madras (IITM), Chennai, Tamil Nadu, India. 
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Currently pursuing my Bachelor&apos;s of Technology and Bachelor&apos;s of Science, 
                I&apos;m deeply fascinated by the world of integrated circuits, VLSI design, data science, AI/ML,
                and electronic circuit development. My journey involves exploring the intricate 
                world of transistors, circuits, data preprocessing, data analysis, machine learning, model deployment
                and the design principles that power modern electronics and data science.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I&apos;m not designing circuits, I&apos;m working on gaming-related C programming projects, 
                learning new languages, and preparing myself for hackathons and internships. I believe 
                that if success demands you to walk through hell, you should walk like you own the place!
                I also believe in the power of hard work and dedication. I am a quick learner and I am always
                looking for new challenges and opportunities to grow. I am a team player and I am always
                looking for new opportunities to collaborate with others. I am a problem solver and I am always
                looking for new solutions to problems. I am a critical thinker and I am always
                looking for new ways to improve myself and my work.
              </p>
            </motion.div>

            <h2 className="text-3xl font-bold mb-6 text-center text-signal-cyan">Areas of Interest</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-effect rounded-lg p-6 border border-signal-neon/30"
                >
                  <interest.icon className="w-12 h-12 text-signal-neon mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{interest.title}</h3>
                  <p className="text-gray-400">{interest.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 glass-effect rounded-lg p-6"
            >
              <h3 className="text-2xl font-semibold mb-4 text-signal-cyan">Languages I Know</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['JavaScript','Python', 'C', 'SQL'].map((lang, index) => (
                  <motion.div
                    key={lang}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    className="text-center p-4 bg-pcb-green/50 rounded-lg border border-signal-neon/30"
                  >
                    <span className="text-signal-neon font-semibold">{lang}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}

