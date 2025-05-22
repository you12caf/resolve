"use client"

import { useRouter } from "next/navigation"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { locales } from "@/middleware"

interface LanguageSwitcherProps {
  currentLang?: string
  pathname?: string
}

export function LanguageSwitcher({ currentLang = "en", pathname = "" }: LanguageSwitcherProps) {
  const router = useRouter()

  // Ensure currentLang is valid
  const validLang = currentLang && locales.includes(currentLang) ? currentLang : "en"
  const targetLang = validLang === "en" ? "ar" : "en"
  const targetPath = `/${targetLang}/${pathname}`

  const handleLanguageChange = () => {
    router.push(targetPath)
  }

  return (
    <Button
      onClick={handleLanguageChange}
      variant="ghost"
      size="sm"
      className="flex items-center gap-2 bg-background/80 rounded-full border border-border/30 px-3 py-1.5"
    >
      <Globe className="h-4 w-4" />
      <span>{validLang === "en" ? "EN" : "AR"}</span>
    </Button>
  )
}
