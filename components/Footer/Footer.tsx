'use client'

import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="relative z-10 bg-background border-t border-glass-border pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 border border-primary/40 rounded-lg flex items-center justify-center bg-primary/5">
                                <span className="text-primary font-heading font-bold text-sm">JS</span>
                            </div>
                            <h3 className="text-lg font-heading font-bold text-white">Jagan Swain</h3>
                        </div>
                        <p className="text-gray-600 text-sm max-w-xs leading-relaxed">
                            Electronics & Communication Engineer building end-to-end solutions across AI/ML, VLSI, and full-stack development.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-heading font-semibold text-primary uppercase tracking-wider">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="#about" className="text-gray-600 hover:text-primary transition-colors text-sm">About</Link></li>
                            <li><Link href="#projects" className="text-gray-600 hover:text-primary transition-colors text-sm">Projects</Link></li>
                            <li><Link href="#skills" className="text-gray-600 hover:text-primary transition-colors text-sm">Skills</Link></li>
                            <li><Link href="/cabinet" className="text-gray-600 hover:text-primary transition-colors text-sm">Cabinet</Link></li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-heading font-semibold text-primary uppercase tracking-wider">Connect</h4>
                        <div className="flex space-x-3">
                            <a href="https://github.com/JaganKSwain" target="_blank" rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg border border-glass-border bg-surface/50 flex items-center justify-center text-gray-600 hover:text-secondary hover:border-secondary/30 transition-all duration-300">
                                <Github size={16} />
                            </a>
                            <a href="https://linkedin.com/in/jagan-kumar-swain" target="_blank" rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg border border-glass-border bg-surface/50 flex items-center justify-center text-gray-600 hover:text-secondary hover:border-secondary/30 transition-all duration-300">
                                <Linkedin size={16} />
                            </a>
                            <a href="mailto:jagan.swain.ece.2024@nist.edu"
                                className="w-9 h-9 rounded-lg border border-glass-border bg-surface/50 flex items-center justify-center text-gray-600 hover:text-secondary hover:border-secondary/30 transition-all duration-300">
                                <Mail size={16} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-glass-border pt-6 text-center text-gray-700 text-xs font-mono">
                    <p>&copy; {currentYear} Jagan Kumar Swain. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
