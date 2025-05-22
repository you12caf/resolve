import { getDictionary } from "../dictionaries"
import type { Metadata } from "next"
import Image from "next/image"
import { Scissors, Paintbrush, Play, Share2, Mic, Camera } from "lucide-react"

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const dict = await getDictionary(params.lang as "en" | "ar")

  return {
    title: dict.services.title,
    description: dict.services.subtitle,
  }
}

export default async function ServicesPage({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang as "en" | "ar")
  const isRtl = params.lang === "ar"

  const serviceIcons = {
    editing: Scissors,
    design: Paintbrush,
    motion: Play,
    social: Share2,
    voice: Mic,
    shooting: Camera,
  }

  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-resolve-purple/10 to-transparent opacity-30"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl gradient-text">
              {dict.services.title}
            </h1>
            <p className="text-muted-foreground md:text-xl max-w-[700px]">{dict.services.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:gap-16">
            {Object.entries(dict.services.items).map(([key, service]: [string, any], index) => {
              const IconComponent = serviceIcons[key as keyof typeof serviceIcons]
              const isEven = index % 2 === 0

              return (
                <div
                  key={key}
                  id={key}
                  className={`grid gap-6 items-center ${isEven ? "md:grid-cols-2" : "md:grid-cols-2 md:grid-flow-dense"}`}
                >
                  <div
                    className={`space-y-4 ${!isEven && "md:col-start-2"} animate-fade-in`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="inline-flex items-center justify-center rounded-lg bg-primary/10 p-3 shadow-sm">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter gradient-text">{service.title}</h2>
                    <p className="text-muted-foreground">{service.description}</p>
                    <ul className="space-y-2">
                      {[1, 2, 3].map((item) => (
                        <li key={item} className="flex items-center">
                          <div className="mr-2 h-1 w-1 rounded-full bg-primary" />
                          <span>
                            {isRtl
                              ? `ميزة ${item} لخدمة ${service.title}`
                              : `Feature ${item} of ${service.title} service`}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={`relative aspect-video overflow-hidden rounded-lg glassmorphism p-1 animate-fade-in animate-delay-100 ${isEven ? "" : "md:col-start-1"}`}
                  >
                    <Image
                      src={`/placeholder.svg?height=600&width=800&text=${service.title}`}
                      alt={service.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
