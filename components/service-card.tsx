"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight, Scissors, Paintbrush, Clapperboard, Share2, Mic, Camera } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  icon: string
  title: string
  description: string
  delay: number
  href: string
  isRtl: boolean
}

const iconMap = {
  Scissors,
  Paintbrush,
  Clapperboard,
  Share2,
  Mic,
  Camera,
}

export function ServiceCard({ icon, title, description, delay, href, isRtl }: ServiceCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const Icon = iconMap[icon] || Scissors

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className={`group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"
      } hover-line-animation`}
      style={{
        backgroundColor: "rgba(18, 18, 20, 0.6)",
        backdropFilter: "blur(10px)",
        transition: "all 0.3s ease-in-out, opacity 0.6s ease-out, transform 0.6s ease-out",
        transitionDelay: `${delay * 0.2}s`,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
        willChange: "transform, opacity",
        transitionTimingFunction: "ease-out",
      }}
    >
      <div className="p-6">
        <div className="mb-4 flex items-start">
          <div
            className={`p-2 rounded-lg transition-transform duration-300 group-hover:scale-105 ${
              isVisible ? "icon-pulse" : ""
            }`}
            style={{
              backgroundColor: "rgba(107, 59, 255, 0.15)",
            }}
          >
            <Icon className="h-10 w-10 transition-colors duration-300" style={{ color: "#6B3BFF" }} />
          </div>
        </div>
        <h3 className="mb-2 text-xl font-bold text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
          {title}
        </h3>
        <p className="text-white/70 line-clamp-2 mb-4" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
          {description}
        </p>
        <div className={`mt-4 flex ${isRtl ? "justify-start" : "justify-end"}`}>
          <Link
            href={href}
            className="text-sm font-medium inline-flex items-center text-[#6B3BFF] hover:underline"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
          >
            {isRtl ? "اكتشف المزيد" : "Learn more"}
            <ArrowRight
              className={`ml-1 h-4 w-4 transition-transform group-hover:translate-x-1 ${
                isRtl ? "mr-1 ml-0 rotate-180" : ""
              }`}
            />
          </Link>
        </div>
      </div>
      <style jsx>{`
        @keyframes pulse {
          0% { box-shadow: 0 0 0px #6B3BFF; }
          50% { box-shadow: 0 0 10px #6B3BFF; }
          100% { box-shadow: 0 0 0px #6B3BFF; }
        }
        
        .icon-pulse {
          animation: pulse 2s infinite;
          animation-delay: 0.6s;
        }
        
        .hover-line-animation {
          position: relative;
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        }
        
        .hover-line-animation:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(107, 59, 255, 0.2);
        }
        
        .hover-line-animation::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #6B3BFF;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease-in-out;
          border-bottom-left-radius: 0.75rem;
          border-bottom-right-radius: 0.75rem;
          will-change: transform;
        }
        
        .hover-line-animation:hover::after {
          transform: scaleX(1);
        }
      `}</style>
    </div>
  )
}
