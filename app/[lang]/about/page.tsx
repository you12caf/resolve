import { getDictionary } from "../dictionaries"
import type { Metadata } from "next"
import Image from "next/image"
import { Award, Users, Clock, Globe } from "lucide-react"

// Define fallback dictionary for static generation
const fallbackDictionary = {
  about: {
    title: "About Resolve",
    subtitle: "Our story and mission",
    description:
      "Resolve is a premium creative media agency founded on the principle that exceptional media can transform businesses.",
  },
  services: {
    items: {
      editing: { title: "Editing" },
      design: { title: "Design" },
      motion: { title: "Motion Graphics" },
      social: { title: "Social Media" },
      voice: { title: "Voice Over" },
      shooting: { title: "Shooting" },
    },
  },
}

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  try {
    // Use fallback if params is undefined
    if (!params || !params.lang) {
      return {
        title: fallbackDictionary.about.title,
        description: fallbackDictionary.about.subtitle,
      }
    }

    const dict = await getDictionary(params.lang as "en" | "ar")

    return {
      title: dict.about.title,
      description: dict.about.subtitle,
    }
  } catch (error) {
    console.error("Error in generateMetadata:", error)
    return {
      title: fallbackDictionary.about.title,
      description: fallbackDictionary.about.subtitle,
    }
  }
}

export default function AboutPage({ params }: { params?: { lang?: string } }) {
  // Safe default values
  const lang = params?.lang || "en"
  const isRtl = lang === "ar"

  // Use static content for now to avoid async issues
  const title = isRtl ? "عن Resolve" : "About Resolve"
  const subtitle = isRtl ? "قصتنا ومهمتنا" : "Our story and mission"
  const description = isRtl
    ? "ريسولف هي وكالة إبداعية متميزة تأسست على مبدأ أن الوسائط الإعلامية الاستثنائية يمكن أن تحول الأعمال."
    : "Resolve is a premium creative media agency founded on the principle that exceptional media can transform businesses."

  const stats = [
    {
      icon: Award,
      value: "50+",
      label: isRtl ? "مشاريع مكتملة" : "Completed Projects",
    },
    {
      icon: Users,
      value: "20+",
      label: isRtl ? "عملاء سعداء" : "Happy Clients",
    },
    {
      icon: Clock,
      value: "5+",
      label: isRtl ? "سنوات خبرة" : "Years Experience",
    },
    {
      icon: Globe,
      value: "10+",
      label: isRtl ? "دول نخدمها" : "Countries Served",
    },
  ]

  const team = [
    {
      name: isRtl ? "سماتي إدريس" : "Smati Idris",
      role: isRtl ? "المدير التنفيذي" : "CEO & Founder",
      image: "/images/ceo.jpeg",
    },
    {
      name: isRtl ? "سارة أحمد" : "Sarah Johnson",
      role: isRtl ? "مدير الإبداع" : "Creative Director",
      image: "/placeholder.svg?height=400&width=400&text=Creative+Director",
    },
    {
      name: isRtl ? "محمد علي" : "Michael Brown",
      role: isRtl ? "مدير التسويق" : "Marketing Director",
      image: "/placeholder.svg?height=400&width=400&text=Marketing+Director",
    },
    {
      name: isRtl ? "ليلى حسن" : "Emily Davis",
      role: isRtl ? "مصمم رئيسي" : "Lead Designer",
      image: "/placeholder.svg?height=400&width=400&text=Lead+Designer",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 to-transparent opacity-30"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl pb-[17px]"
              style={{
                background: "linear-gradient(135deg, #8e2de2, #4a00e0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {title}
            </h1>
            <p className="text-gray-400 md:text-xl max-w-[700px]">{subtitle}</p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2
                className="text-3xl font-bold tracking-tighter"
                style={{
                  background: "linear-gradient(135deg, #8e2de2, #4a00e0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {isRtl ? "قصتنا" : "Our Story"}
              </h2>
              <p className="text-gray-400">{description}</p>
              <p className="text-gray-400">
                {isRtl
                  ? "نحن نؤمن بقوة الإبداع والابتكار في تحويل العلامات التجارية وإلهام الجماهير."
                  : "We believe in the power of creativity and innovation to transform brands and inspire audiences."}
              </p>
            </div>
            <div
              className="relative aspect-video overflow-hidden rounded-lg p-1"
              style={{ background: "rgba(10, 10, 15, 0.6)", backdropFilter: "blur(20px)" }}
            >
              <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center">
                <span>About Resolve</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 md:py-24 bg-gray-900/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-pink-500/10 to-transparent opacity-30"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon

              return (
                <div key={index} className="flex flex-col items-center text-center space-y-2">
                  <div className="rounded-full bg-purple-500/10 p-3">
                    <IconComponent className="h-6 w-6 text-purple-500" />
                  </div>
                  <h3
                    className="text-3xl font-bold"
                    style={{
                      background: "linear-gradient(135deg, #8e2de2, #4a00e0)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {stat.value}
                  </h3>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2
              className="text-3xl font-bold tracking-tighter"
              style={{
                background: "linear-gradient(135deg, #8e2de2, #4a00e0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {isRtl ? "فريقنا" : "Our Team"}
            </h2>
            <p className="text-gray-400 max-w-[700px]">
              {isRtl
                ? "تعرف على الأشخاص المبدعين الذين يقفون وراء عملنا الاستثنائي"
                : "Meet the creative minds behind our exceptional work"}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-2">
                <div
                  className="relative w-full aspect-square overflow-hidden rounded-lg p-1 mb-4"
                  style={{ background: "rgba(10, 10, 15, 0.6)", backdropFilter: "blur(20px)" }}
                >
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-sm text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
