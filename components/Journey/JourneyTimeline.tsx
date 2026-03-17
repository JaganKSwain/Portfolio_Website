'use client'

import { motion } from 'framer-motion'
import { JourneyItem } from '@/data/journey'

interface JourneyTimelineProps {
    items: JourneyItem[]
}

const JourneyTimeline = ({ items }: JourneyTimelineProps) => {
    return (
        <div className="relative container mx-auto px-4 py-8">
            {/* PCB Trace Center Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/40 via-accent/30 to-primary/10" />

            {items.map((item, index) => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className={`relative flex flex-col md:flex-row gap-8 mb-10 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                        }`}
                >
                    {/* Content */}
                    <div className="flex-1 md:w-1/2">
                        <div className={`module-card p-5 group ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                            }`}>
                            <div className="flex flex-col gap-1.5">
                                <span className={`inline-block px-2.5 py-0.5 rounded-md text-[10px] font-mono font-medium tracking-wider uppercase w-fit ${item.type === 'Education'
                                        ? 'bg-primary/10 text-primary border border-primary/20'
                                        : 'bg-secondary/10 text-secondary border border-secondary/20'
                                    } ${index % 2 === 0 ? 'md:self-end' : 'md:self-start'}`}>
                                    {item.type}
                                </span>
                                <h3 className="text-base font-heading font-bold text-white group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>
                                <h4 className="text-sm text-gray-400">{item.subtitle}</h4>
                                <p className="text-xs text-gray-600 font-mono">{item.date}</p>
                                <p className="text-gray-500 text-sm mt-1">{item.description}</p>

                                {item.tags && (
                                    <div className={`flex flex-wrap gap-1.5 mt-2 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                                        }`}>
                                        {item.tags.slice(0, 3).map((tag, i) => (
                                            <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-surface-light border border-glass-border text-gray-500 font-mono">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Via Point */}
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 -ml-[5px] rounded-full bg-secondary border-2 border-primary shadow-[0_0_8px_rgba(16,185,129,0.3)] z-10 mt-6 md:mt-0 md:top-1/2 md:-translate-y-1/2" />

                    {/* Empty Side */}
                    <div className="hidden md:block flex-1" />
                </motion.div>
            ))}
        </div>
    )
}

export default JourneyTimeline
