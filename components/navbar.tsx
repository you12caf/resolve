"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { LanguageSwitcher } from "@/components/language-switcher"
import { locales } from "@/middleware"

interface NavbarProps {
  lang?: string
}

export function Navbar({ lang = "en" }: NavbarProps) {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  // Ensure lang is either "en" or "ar", default to "en" if invalid
  const validLang = lang && locales.includes(lang) ? lang : "en"
  const isRtl = validLang === "ar"

  // Extract the base path without the language prefix
  const basePath = pathname.split("/").slice(2).join("/")

  // Hardcoded translations instead of using getDictionary
  const translations = {
    en: {
      home: "Home",
      services: "Services",
      portfolio: "Portfolio",
      about: "About",
      contact: "Contact",
    },
    ar: {
      home: "الرئيسية",
      services: "خدماتنا",
      portfolio: "أعمالنا",
      about: "من نحن",
      contact: "اتصل بنا",
    },
  }

  const navLabels = translations[validLang]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: `/${validLang}`, label: navLabels.home },
    { href: `/${validLang}/services`, label: navLabels.services },
    { href: `/${validLang}/portfolio`, label: navLabels.portfolio },
    { href: `/${validLang}/about`, label: navLabels.about },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-4 py-4 md:py-6 ${
        isScrolled ? "mt-2" : "mt-6"
      }`}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="glassmorphism capsule px-4 py-2">
          <div className="flex h-14 items-center justify-between">
            <div className="flex items-center">
              <Link href={`/${validLang}`} className="text-2xl font-bold tracking-tighter gradient-text pr-5">
                {isRtl ? "ريسولف" : "Resolve"}
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname === item.href ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <LanguageSwitcher currentLang={validLang} pathname={basePath} />
              <Link
                href={`/${validLang}/contact`}
                className="contact-button px-6 py-2 bg-white text-black font-bold rounded-full transition-all duration-300 hover:shadow-md hover:scale-105"
              >
                {navLabels.contact}
              </Link>
            </nav>

            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side={isRtl ? "right" : "left"} className="glassmorphism border-0">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`text-lg font-medium transition-colors hover:text-primary ${
                        pathname === item.href ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="flex items-center justify-between pt-4">
                    <LanguageSwitcher currentLang={validLang} pathname={basePath} />
                    <Link
                      href={`/${validLang}/contact`}
                      className="contact-button px-6 py-2 bg-white text-black font-bold rounded-full transition-all duration-300 hover:shadow-md hover:scale-105"
                    >
                      {navLabels.contact}
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
