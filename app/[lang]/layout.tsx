import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { locales } from "@/middleware"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import { getDictionary } from "./dictionaries"

const inter = Inter({ subsets: ["latin", "latin-ext"] })

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  // Validate the language parameter
  if (!params?.lang || !locales.includes(params.lang)) {
    return {
      title: "Resolve | Creative Media Agency",
      description:
        "Resolve is a premium creative media agency specializing in editing, design, motion graphics, social media management, voice over, and shooting services.",
    }
  }

  const dict = await getDictionary(params.lang as "en" | "ar")

  return {
    title: {
      template: `%s | ${dict.metadata.title}`,
      default: dict.metadata.title,
    },
    description: dict.metadata.description,
  }
}

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  // Validate the language parameter with a default
  const validLang = params?.lang && locales.includes(params.lang) ? params.lang : "en"
  const isRtl = validLang === "ar"

  return (
    <html lang={validLang} dir={isRtl ? "rtl" : "ltr"} suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="flex min-h-screen flex-col">
            <Navbar lang={validLang} />
            <main className="flex-1">{children}</main>
            <Footer lang={validLang} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
