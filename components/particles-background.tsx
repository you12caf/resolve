"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  animationDuration: number
}

interface ParticlesBackgroundProps {
  count?: number
}

export function ParticlesBackground({ count = 15 }: ParticlesBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<Particle[]>([])

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const { width, height } = container.getBoundingClientRect()

    // Create particles
    particlesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 60 + 20, // 20-80px
      speedX: Math.random() * 0.5 - 0.25, // -0.25 to 0.25
      speedY: Math.random() * 0.5 - 0.25, // -0.25 to 0.25
      opacity: Math.random() * 0.3 + 0.1, // 0.1-0.4
      animationDuration: Math.random() * 20 + 10, // 10-30s
    }))

    // Create particle elements
    particlesRef.current.forEach((particle) => {
      const element = document.createElement("div")
      element.classList.add("particle")
      element.style.width = `${particle.size}px`
      element.style.height = `${particle.size}px`
      element.style.left = `${particle.x}px`
      element.style.top = `${particle.y}px`
      element.style.opacity = particle.opacity.toString()
      element.style.animationDuration = `${particle.animationDuration}s`
      element.style.animationDelay = `${Math.random() * 5}s`
      container.appendChild(element)
    })

    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild)
      }
    }
  }, [count])

  return <div ref={containerRef} className="particles" />
}
