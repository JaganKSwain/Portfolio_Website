'use client'

import { motion } from 'framer-motion'
import JourneyTimeline from './JourneyTimeline'
import { getJourneyData } from '@/data/journey'

export default function JourneySection() {
    const journeyData = getJourneyData()

    return (
        <section id="journey" className="py-20 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        My <span className="text-gradient">Journey</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        From academic foundations to professional achievements, here&apos;s my path in technology.
                    </p>
                </motion.div>

                <JourneyTimeline items={journeyData} />
            </div>
        </section>
    )
}
