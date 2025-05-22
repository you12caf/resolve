"use client"

import type { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface AnimatedButtonProps {
  children: ReactNode
  href: string
  isRtl?: boolean
}

export function AnimatedButton({ children, href, isRtl = false }: AnimatedButtonProps) {
  return (
    <>
      <Button asChild size="lg" className="bg-resolve-gradient hover:shadow-glow animated-button">
        <a href={href} className="flex items-center">
          {children}
          <ArrowRight className={`ml-2 h-5 w-5 arrow-icon ${isRtl ? "mr-2 ml-0 rotate-180" : ""}`} />
        </a>
      </Button>
      <style jsx global>{`
        .animated-button {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .animated-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 0 20px rgba(157, 78, 221, 0.6);
        }
        
        .animated-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: all 0.6s ease;
        }
        
        .animated-button:hover::before {
          left: 100%;
        }
        
        .arrow-icon {
          transition: transform 0.3s ease;
        }
        
        .animated-button:hover .arrow-icon {
          transform: translateX(5px);
        }
        
        [dir="rtl"] .animated-button:hover .arrow-icon {
          transform: translateX(-5px) rotate(180deg);
        }
      `}</style>
    </>
  )
}
