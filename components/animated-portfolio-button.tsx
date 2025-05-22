"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface AnimatedPortfolioButtonProps {
  href: string
  isRtl: boolean
  children: React.ReactNode
}

export function AnimatedPortfolioButton({ href, isRtl, children }: AnimatedPortfolioButtonProps) {
  return (
    <>
      <Button asChild size="lg" className="bg-resolve-gradient hover:shadow-glow animated-portfolio-button group">
        <Link href={href} className="flex items-center">
          {children}
          <ArrowRight
            className={`ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 ${
              isRtl ? "mr-2 ml-0 rotate-180 group-hover:-translate-x-1" : ""
            }`}
          />
        </Link>
      </Button>
      <style jsx global>{`
        .animated-portfolio-button {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .animated-portfolio-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 0 20px rgba(157, 78, 221, 0.6);
        }
        
        .animated-portfolio-button::before {
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
        
        .animated-portfolio-button:hover::before {
          left: 100%;
        }
      `}</style>
    </>
  )
}
