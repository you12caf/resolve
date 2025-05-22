import { getDictionary } from "../dictionaries"
import type { Metadata } from "next"
import { PortfolioClient } from "@/components/portfolio-client"
import { projects } from "@/lib/projects"

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const dict = await getDictionary(params.lang as "en" | "ar")

  return {
    title: dict.portfolio.title,
    description: dict.portfolio.subtitle,
  }
}

export default async function PortfolioPage({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang as "en" | "ar")
  const isRtl = params.lang === "ar"

  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-resolve-purple/10 to-transparent opacity-30"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl gradient-text">
              {dict.portfolio.title}
            </h1>
            <p className="text-muted-foreground md:text-xl max-w-[700px]">{dict.portfolio.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Portfolio Content */}
      <PortfolioClient
        categories={dict.portfolio.categories}
        viewProjectText={dict.portfolio.viewProject}
        projects={projects}
        isRtl={isRtl}
        lang={params.lang}
      />
    </div>
  )
}
