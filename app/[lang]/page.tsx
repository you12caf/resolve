import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Play, Scissors, Paintbrush, Clapperboard, Share2, Mic, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TypingAnimation } from "@/components/typing-animation"
import { ParticlesBackground } from "@/components/particles-background"
import { ServiceCard } from "@/components/service-card"
import { AnimatedButton } from "@/components/animated-button"
import { AnimatedPortfolioButton } from "@/components/animated-portfolio-button"
import { projects } from "@/lib/projects"
import { locales } from "@/middleware"

// Define fallback dictionary for static generation
const fallbackDictionary = {
  hero: {
    title: "Elevate Your Brand Through Visual Brilliance",
    subtitle: "Premium creative solutions for brands that demand excellence",
    cta: "Let's Work Together",
    typingTexts: [
      "Crafting visual stories",
      "Designing brand experiences",
      "Creating digital masterpieces",
      "Transforming ideas into reality",
    ],
  },
  services: {
    title: "Our Services",
    subtitle: "Comprehensive creative solutions for your brand",
    items: {
      editing: {
        title: "Editing",
        description:
          "Professional video editing with cinematic techniques and color grading to elevate your visual content.",
      },
      design: {
        title: "Design",
        description: "Stunning visual designs that communicate your brand's message with clarity and impact.",
      },
      motion: {
        title: "Motion Graphics",
        description: "Dynamic animations and visual effects that bring your ideas to life and engage your audience.",
      },
      social: {
        title: "Social Media",
        description: "Strategic content creation and management to build your brand presence across platforms.",
      },
      voice: {
        title: "Voice Over",
        description: "Professional voice talent and audio production to give your content the perfect sound.",
      },
      shooting: {
        title: "Shooting",
        description: "High-quality video production with state-of-the-art equipment and creative direction.",
      },
    },
  },
  portfolio: {
    title: "Our Portfolio",
    subtitle: "Selected works from our creative journey",
    viewProject: "View Project",
  },
  about: {
    title: "About Resolve",
    subtitle: "Our story and mission",
    description:
      "Resolve is a premium creative media agency founded on the principle that exceptional media can transform businesses.",
  },
  contact: {
    title: "Get in Touch",
    subtitle: "Let's discuss your next project",
  },
}

// Arabic fallback dictionary
const fallbackDictionaryAr = {
  hero: {
    title: "ارتقِ بعلامتك التجارية من خلال الإبداع البصري",
    subtitle: "حلول إبداعية متميزة للعلامات التجارية التي تتطلب التميز",
    cta: "لنعمل معًا",
    typingTexts: ["نصنع قصصًا بصرية", "نصمم تجارب العلامات التجارية", "ننشئ روائع رقمية", "نحول الأفكار إلى واقع"],
  },
  services: {
    title: "خدماتنا",
    subtitle: "حلول إبداعية شاملة لعلامتك التجارية",
    items: {
      editing: {
        title: "المونتاج",
        description: "مونتاج فيديو احترافي بتقنيات سينمائية وتصحيح ألوان لرفع مستوى المحتوى البصري الخاص بك.",
      },
      design: {
        title: "التصميم",
        description: "تصاميم بصرية مذهلة تنقل رسالة علامتك التجارية بوضوح وتأثير.",
      },
      motion: {
        title: "الرسوم المتحركة",
        description: "رسوم متحركة ديناميكية ومؤثرات بصرية تبث الحياة في أفكارك وتجذب جمهورك.",
      },
      social: {
        title: "وسائل التواصل",
        description: "إنشاء وإدارة محتوى استراتيجي لبناء تواجد علامتك التجارية عبر المنصات المختلفة.",
      },
      voice: {
        title: "التعليق الصوتي",
        description: "مواهب صوتية احترافية وإنتاج صوتي لمنح المحتوى الخاص بك الصوت المثالي.",
      },
      shooting: {
        title: "التصوير",
        description: "إنتاج فيديو عالي الجودة باستخدام معدات متطورة وتوجيه إبداعي.",
      },
    },
  },
  portfolio: {
    title: "أعمالنا",
    subtitle: "أعمال مختارة من رحلتنا الإبداعية",
    viewProject: "عرض المشروع",
  },
  about: {
    title: "عن Resolve",
    subtitle: "قصتنا ومهمتنا",
    description: "ريسولف هي وكالة إبداعية متميزة تأسست على مبدأ أن الوسائط الإعلامية الاستثنائية يمكن أن تحول الأعمال.",
  },
  contact: {
    title: "تواصل معنا",
    subtitle: "دعنا نناقش مشروعك القادم",
  },
}

// This is a server component, but we'll avoid async/await to prevent the error
export default async function HomePage({ params }: { params: { lang: string } }) {
  // Safe default values
  const lang = locales.includes(params.lang) ? params.lang : "en"
  const isRtl = lang === "ar"

  // Use static content instead of async dictionary
  const dict = isRtl ? fallbackDictionaryAr : fallbackDictionary

  // Get first 3 projects for homepage
  const featuredProjects = projects.slice(0, 3)

  // Services data with icons
  const services = [
    {
      id: "editing",
      icon: "Scissors",
      title: dict.services.items.editing.title,
      description: dict.services.items.editing.description,
    },
    {
      id: "design",
      icon: "Paintbrush",
      title: dict.services.items.design.title,
      description: dict.services.items.design.description,
    },
    {
      id: "motion",
      icon: "Clapperboard",
      title: dict.services.items.motion.title,
      description: dict.services.items.motion.description,
    },
    {
      id: "social",
      icon: "Share2",
      title: dict.services.items.social.title,
      description: dict.services.items.social.description,
    },
    {
      id: "voice",
      icon: "Mic",
      title: dict.services.items.voice.title,
      description: dict.services.items.voice.description,
    },
    {
      id: "shooting",
      icon: "Camera",
      title: dict.services.items.shooting.title,
      description: dict.services.items.shooting.description,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <ParticlesBackground count={10} />
        <div className="container relative z-20 px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4 animate-fade-in">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl gradient-text pb-[17px]">
                {dict.hero.title}
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                <TypingAnimation texts={dict.hero.typingTexts} />
              </p>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl animate-fade-in animate-delay-100">
                {dict.hero.subtitle}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animate-delay-200">
              <Link
                href={`/${lang}/contact`}
                className="cta-button group inline-flex items-center justify-center px-6 py-3 border-2 border-white/20 rounded-full bg-transparent text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300 hover:shadow-glow-white"
              >
                <span className="font-medium">{dict.hero.cta}</span>
                <ArrowRight
                  className={`ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 ${
                    isRtl ? "mr-2 ml-0 rotate-180" : ""
                  }`}
                />
              </Link>
              <Button variant="outline" size="lg" className="group glassmorphism hover:shadow-glow">
                <Link href={`/${lang}/portfolio`} className="flex items-center">
                  <Play className="mr-2 h-4 w-4" />
                  {isRtl ? "شاهد أعمالنا" : "Watch Showreel"}
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Floating gradient elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-resolve-purple/20 filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-resolve-pink/20 filter blur-3xl animate-float-delay-1"></div>
        <div className="absolute top-2/3 left-1/3 w-40 h-40 rounded-full bg-resolve-purple/30 filter blur-3xl animate-float-delay-2"></div>
      </section>

      {/* Services Preview */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ backgroundColor: "#0A0A0B" }}
        data-animate="services"
      >
        <div className="absolute inset-0 bg-gradient-radial from-[#6B3BFF]/10 to-transparent opacity-30"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-6 mb-16">
            <h2
              className="font-bold text-white animate-fade-in"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                lineHeight: "1.1",
                background: "linear-gradient(135deg, #FFFFFF, #6B3BFF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {dict.services.title}
            </h2>
            <p
              className="text-white/80 max-w-[700px] animate-fade-in animate-delay-100"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                fontWeight: 400,
                maxWidth: "700px",
              }}
            >
              {dict.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={0}
                href={`/${lang}/services#${service.id}`}
                isRtl={isRtl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-resolve-pink/10 to-transparent opacity-30"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
              {dict.portfolio.title}
            </h2>
            <p className="text-muted-foreground md:text-xl max-w-[700px]">{dict.portfolio.subtitle}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
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
                      {dict.portfolio.viewProject}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <AnimatedPortfolioButton href={`/${lang}/portfolio`} isRtl={isRtl}>
              {isRtl ? "عرض جميع المشاريع" : "View All Projects"}
            </AnimatedPortfolioButton>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-resolve-dark/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-resolve-purple/10 to-transparent opacity-30"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-4 animate-fade-in">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text pb-[15px]">
                {dict.about.title}
              </h2>
              <p className="text-muted-foreground">{dict.about.subtitle}</p>
              <p className="text-muted-foreground">{dict.about.description}</p>
              <div className="pt-4">
                <Button asChild className="gradient-border">
                  <Link href={`/${lang}/about`}>{isRtl ? "تعرف علينا أكثر" : "Learn More About Us"}</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg glassmorphism p-1 animate-fade-in animate-delay-100">
              <Image
                src="/placeholder.svg?height=600&width=800&text=About+Resolve"
                alt="About Resolve"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-resolve-pink/10 to-transparent opacity-30"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text pb-[16px]">
              {dict.contact.title}
            </h2>
            <p className="text-muted-foreground md:text-xl max-w-[700px]">{dict.contact.subtitle}</p>
            <div className="pt-4">
              <AnimatedButton href={`/${lang}/contact`} isRtl={isRtl}>
                {isRtl ? "تواصل معنا الآن" : "Contact Us Now"}
              </AnimatedButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
