import Link from "next/link"
import { getDictionary } from "@/app/[lang]/dictionaries"
import { NewsletterForm } from "@/components/newsletter-form"
import { Instagram, Twitter, Facebook, Linkedin, Youtube } from "lucide-react"
import { locales } from "@/middleware"

interface FooterProps {
  lang?: string
}

// Change the function signature to make lang optional with a default value
export async function Footer({ lang = "en" }: FooterProps) {
  // Validate the language parameter
  const validLang = locales.includes(lang) ? lang : "en"

  const dict = await getDictionary(validLang as "en" | "ar")
  const isRtl = validLang === "ar"

  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Instagram, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Facebook, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Youtube, href: "#" },
  ]

  return (
    <footer className="border-t border-muted/20 bg-resolve-darker">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href={`/${validLang}`} className="text-2xl font-bold tracking-tighter gradient-text pr-[5px]">
              {isRtl ? "ريسولف" : "Resolve"}
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              {isRtl
                ? "وكالة إبداعية متميزة تقدم حلولًا إعلامية عالية الجودة لتعزيز هوية علامتك التجارية."
                : "A premium creative agency delivering high-quality media solutions to enhance your brand identity."}
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                )
              })}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">{isRtl ? "روابط سريعة" : "Quick Links"}</h3>
            <nav className="flex flex-col space-y-2">
              <Link href={`/${validLang}`} className="text-sm text-muted-foreground hover:text-foreground">
                {dict.navigation.home}
              </Link>
              <Link href={`/${validLang}/services`} className="text-sm text-muted-foreground hover:text-foreground">
                {dict.navigation.services}
              </Link>
              <Link href={`/${validLang}/portfolio`} className="text-sm text-muted-foreground hover:text-foreground">
                {dict.navigation.portfolio}
              </Link>
              <Link href={`/${validLang}/about`} className="text-sm text-muted-foreground hover:text-foreground">
                {dict.navigation.about}
              </Link>
              <Link href={`/${validLang}/contact`} className="text-sm text-muted-foreground hover:text-foreground">
                {dict.navigation.contact}
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">{isRtl ? "خدماتنا" : "Our Services"}</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href={`/${validLang}/services#editing`}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {dict.services.items.editing.title}
              </Link>
              <Link
                href={`/${validLang}/services#design`}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {dict.services.items.design.title}
              </Link>
              <Link
                href={`/${validLang}/services#motion`}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {dict.services.items.motion.title}
              </Link>
              <Link
                href={`/${validLang}/services#social`}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {dict.services.items.social.title}
              </Link>
              <Link
                href={`/${validLang}/services#voice`}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {dict.services.items.voice.title}
              </Link>
              <Link
                href={`/${validLang}/services#shooting`}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {dict.services.items.shooting.title}
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">{dict.footer.newsletter.title}</h3>
            <NewsletterForm dictionary={dict.footer.newsletter} isRtl={isRtl} />
          </div>
        </div>
        <div className="mt-12 border-t border-muted/20 pt-8">
          <p className="text-center text-xs text-muted-foreground">
            {dict.footer.rights.replace("2025", currentYear.toString())}
          </p>
        </div>
      </div>
    </footer>
  )
}
