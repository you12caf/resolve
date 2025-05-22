import "server-only"
import { locales } from "@/middleware"

interface Dictionary {
  metadata: {
    title: string
    description: string
  }
  navigation: {
    home: string
    services: string
    portfolio: string
    about: string
    contact: string
  }
  hero: {
    title: string
    subtitle: string
    cta: string
    typingTexts: string[]
  }
  services: {
    title: string
    subtitle: string
    items: {
      editing: {
        title: string
        description: string
      }
      design: {
        title: string
        description: string
      }
      motion: {
        title: string
        description: string
      }
      social: {
        title: string
        description: string
      }
      voice: {
        title: string
        description: string
      }
      shooting: {
        title: string
        description: string
      }
    }
  }
  about: {
    title: string
    subtitle: string
    description: string
  }
  portfolio: {
    title: string
    subtitle: string
    viewProject: string
    categories: {
      all: string
      editing: string
      design: string
      motion: string
      social: string
      voice: string
      shooting: string
    }
  }
  contact: {
    title: string
    subtitle: string
    name: string
    email: string
    message: string
    submit: string
    success: string
  }
  footer: {
    rights: string
    newsletter: {
      title: string
      placeholder: string
      button: string
      success: string
    }
  }
}

const dictionaries: Record<string, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  ar: () => import("./dictionaries/ar.json").then((module) => module.default),
}

export const getDictionary = async (locale: string) => {
  // Ensure locale is valid
  const validLocale = locale && locales.includes(locale) ? locale : "en"
  return dictionaries[validLocale as "en" | "ar"]()
}
