'use client'

import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="relative z-10 bg-background border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white">Jagan Swain</h3>
                        <p className="text-gray-400 max-w-xs">
                            Electronics & Communication Engineer passionate about VLSI, IoT, and creating innovative digital solutions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-primary">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="#about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                            <li><Link href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link></li>
                            <li><Link href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</Link></li>
                            <li><Link href="/cabinet" className="text-gray-400 hover:text-white transition-colors">Cabinet</Link></li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-primary">Connect</h4>
                        <div className="flex space-x-4">
                            <a href="https://github.com/jagankswain" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-surface border border-white/10 hover:bg-primary hover:text-white transition-all duration-300">
                                <Github size={20} />
                            </a>
                            <a href="https://linkedin.com/in/jagankswain" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-surface border border-white/10 hover:bg-primary hover:text-white transition-all duration-300">
                                <Linkedin size={20} />
                            </a>
                            <a href="mailto:swainjagan2005@gmail.com" className="p-2 rounded-full bg-surface border border-white/10 hover:bg-primary hover:text-white transition-all duration-300">
                                <Mail size={20} />
                            </a>
                            <a href="https://twitter.com/jagankswain" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-surface border border-white/10 hover:bg-primary hover:text-white transition-all duration-300">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {currentYear} Jagan Kumar Swain. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
