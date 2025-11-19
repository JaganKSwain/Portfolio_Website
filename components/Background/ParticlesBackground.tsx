'use client'

import { useCallback } from 'react'
import type { Container, Engine } from 'tsparticles-engine'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'

const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine)
    }, [])

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        // await console.log(container);
    }, [])

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            className="absolute inset-0 -z-10"
            options={{
                background: {
                    color: {
                        value: 'transparent', // Let the CSS background show through
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: 'push',
                        },
                        onHover: {
                            enable: true,
                            mode: 'repulse',
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: '#06b6d4', // Cyan accent
                    },
                    links: {
                        color: '#3b82f6', // Blue primary
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: 'none',
                        enable: true,
                        outModes: {
                            default: 'bounce',
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: 'circle',
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
    )
}

export default ParticlesBackground
