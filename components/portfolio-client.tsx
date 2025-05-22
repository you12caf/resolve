"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { PortfolioFilter } from "@/components/portfolio-filter"
import type { Project } from "@/lib/projects"

interface PortfolioClientProps {
  categories: {
    all: string
    editing: string
    design: string
    motion: string
    social: string
    voice: string
    shooting: string
  }
  viewProjectText: string
  projects: Project[]
  isRtl: boolean
  lang: string
}

export function PortfolioClient({ categories, viewProjectText, projects, isRtl, lang }: PortfolioClientProps) {
  const [activeFilter, setActiveFilter] = useState("all")
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects)

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter((project) => project.category === activeFilter))
    }
  }, [activeFilter, projects])

  const handleFilterChange = (category: string) => {
    setActiveFilter(category)
  }

  return (
    <>
      {/* Portfolio Filter */}
      <section className="py-8">
        <div className="container px-4 md:px-6">
          <PortfolioFilter categories={categories} onFilterChange={handleFilterChange} isRtl={isRtl} />
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-lg animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={isRtl && project.titleAr ? project.titleAr : project.title}
                  width={800}
                  height={600}
                  className="object-cover aspect-video transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <div className="text-sm font-medium text-primary mb-1">
                      {categories[project.category as keyof typeof categories]}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {isRtl && project.titleAr ? project.titleAr : project.title}
                    </h3>
                    <p className="text-sm text-white/80 mb-4">
                      {isRtl && project.shortDescriptionAr ? project.shortDescriptionAr : project.shortDescription}
                    </p>
                    <Link
                      href={`/${lang}/portfolio/${project.slug}`}
                      className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary/80 rounded-full hover:bg-primary transition-colors duration-300"
                      aria-label="View full project details"
                    >
                      {viewProjectText}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
