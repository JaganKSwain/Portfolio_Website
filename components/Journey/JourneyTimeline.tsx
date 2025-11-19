'use client'

import { motion } from 'framer-motion'
import { JourneyItem } from '@/data/journey'

interface JourneyTimelineProps {
    items: JourneyItem[]
}

const JourneyTimeline = ({ items }: JourneyTimelineProps) => {
    return (
        <div className="relative container mx-auto px-4 py-12">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-secondary opacity-30" />

            {items.map((item, index) => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                        }`}
                >
                    {/* Content Side */}
                    <div className="flex-1 md:w-1/2">
                        <div className={`p-6 rounded-xl bg-surface/50 backdrop-blur-sm border border-white/10 hover:border-accent/50 transition-colors duration-300 shadow-lg group ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                            }`}>
                            <div className="flex flex-col gap-2">
                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold w-fit mb-2 ${item.type === 'Education' ? 'bg-primary/20 text-primary' : 'bg-accent/20 text-accent'
                                    } ${index % 2 === 0 ? 'md:self-end' : 'md:self-start'}`}>
                                    {item.type}
                                </span>
                                <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                                    {item.title}
                                </h3>
                                <h4 className="text-lg text-gray-300">{item.subtitle}</h4>
                                <p className="text-sm text-gray-400 font-mono">{item.date}</p>
                                <p className="text-gray-400 mt-2">{item.description}</p>

                                {item.tags && (
                                    <div className={`flex flex-wrap gap-2 mt-3 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                                        }`}>
                                        {item.tags.slice(0, 3).map((tag, i) => (
                                            <span key={i} className="text-xs px-2 py-1 rounded bg-white/5 text-gray-300">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Center Dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-accent shadow-[0_0_10px_theme('colors.accent')] z-10 mt-6 md:mt-0 md:top-1/2 md:-translate-y-1/2" />

                    {/* Empty Side for Layout Balance */}
                    <div className="hidden md:block flex-1" />
                </motion.div>
            ))}
        </div>
    )
}

export default JourneyTimeline
