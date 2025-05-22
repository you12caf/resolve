"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface PortfolioFilterProps {
  categories: {
    all: string
    editing: string
    design: string
    motion: string
    social: string
    voice: string
    shooting: string
  }
  onFilterChange: (category: string) => void
  isRtl: boolean
}

export function PortfolioFilter({ categories, onFilterChange, isRtl }: PortfolioFilterProps) {
  const [activeCategory, setActiveCategory] = useState("all")

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    onFilterChange(category)
  }

  const categoryItems = [
    { id: "all", label: categories.all },
    { id: "editing", label: categories.editing },
    { id: "design", label: categories.design },
    { id: "motion", label: categories.motion },
    { id: "social", label: categories.social },
    { id: "voice", label: categories.voice },
    { id: "shooting", label: categories.shooting },
  ]

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categoryItems.map((category) => (
        <Button
          key={category.id}
          variant={activeCategory === category.id ? "gradient" : "outline"}
          size="sm"
          onClick={() => handleCategoryChange(category.id)}
          className={`${
            activeCategory === category.id ? "bg-resolve-gradient" : "glassmorphism"
          } transition-all duration-300`}
        >
          {category.label}
        </Button>
      ))}
    </div>
  )
}
