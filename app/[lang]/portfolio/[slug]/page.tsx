import { getDictionary } from "../../dictionaries"
import { getProjectBySlug, projects } from "@/lib/projects"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

interface ProjectPageProps {
  params: {
    lang: string
    slug: string
  }
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)
  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  const isArabic = params.lang === "ar"
  const title = isArabic && project.titleAr ? project.titleAr : project.title

  return {
    title,
    description: isArabic && project.shortDescriptionAr ? project.shortDescriptionAr : project.shortDescription,
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const dict = await getDictionary(params.lang as "en" | "ar")
  const isRtl = params.lang === "ar"

  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  const title = isRtl && project.titleAr ? project.titleAr : project.title
  const description = isRtl && project.longDescriptionAr ? project.longDescriptionAr : project.longDescription
  const role = isRtl && project.roleAr ? project.roleAr : project.role

  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-resolve-purple/10 to-transparent opacity-30"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl gradient-text">{title}</h1>
            <p className="text-muted-foreground md:text-xl max-w-[700px]">
              {isRtl && project.shortDescriptionAr ? project.shortDescriptionAr : project.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-start">
            <div className="relative aspect-video overflow-hidden rounded-lg glassmorphism p-1 animate-fade-in">
              <Image src={project.image || "/placeholder.svg"} alt={title} fill className="object-cover rounded-lg" />
            </div>

            <div className="space-y-8 animate-fade-in animate-delay-100">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold gradient-text">{isRtl ? "وصف المشروع" : "Project Description"}</h2>
                <p className="text-muted-foreground">{description}</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold gradient-text">
                  {isRtl ? "التقنيات المستخدمة" : "Technologies Used"}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold gradient-text">{isRtl ? "الدور" : "Role"}</h2>
                <p className="text-muted-foreground">{role}</p>
              </div>

              {project.externalLink && (
                <div className="pt-4">
                  <a
                    href={project.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    {isRtl ? "عرض المشروع الخارجي" : "View External Project"}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              )}

              <div className="pt-8">
                <Button asChild variant="outline" className="group">
                  <Link href={`/${params.lang}/portfolio`} className="inline-flex items-center">
                    <ArrowLeft className={`mr-2 h-4 w-4 ${isRtl ? "rotate-180" : ""}`} />
                    {isRtl ? "العودة إلى المعرض" : "Back to Portfolio"}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
