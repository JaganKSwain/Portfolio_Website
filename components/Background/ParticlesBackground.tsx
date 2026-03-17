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
        // console.log(container);
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
                        value: 'transparent',
                    },
                },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: 'push',
                        },
                        onHover: {
                            enable: true,
                            mode: 'grab',
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 2,
                        },
                        grab: {
                            distance: 150,
                            links: {
                                opacity: 0.3,
                                color: '#10b981',
                            },
                        },
                    },
                },
                particles: {
                    color: {
                        value: ['#10b981', '#14b8a6'],
                    },
                    links: {
                        color: '#10b981',
                        distance: 180,
                        enable: true,
                        opacity: 0.12,
                        width: 0.8,
                    },
                    move: {
                        direction: 'none',
                        enable: true,
                        outModes: {
                            default: 'bounce',
                        },
                        random: false,
                        speed: 0.8,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1200,
                        },
                        value: 50,
                    },
                    opacity: {
                        value: 0.3,
                    },
                    shape: {
                        type: 'circle',
                    },
                    size: {
                        value: { min: 1, max: 2.5 },
                    },
                },
                detectRetina: true,
            }}
        />
    )
}

export default ParticlesBackground
