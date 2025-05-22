import Link from "next/link"
import { Button } from "@/components/ui/button"
import { locales } from "@/middleware"

export default function NotFound({
  params,
}: {
  params?: { lang?: string }
}) {
  // Ensure params.lang is valid
  const validLang = params?.lang && locales.includes(params.lang) ? params.lang : "en"
  const isRtl = validLang === "ar"

  return (
    <div className="flex flex-col min-h-screen items-center justify-center text-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-resolve-purple/10 to-transparent opacity-30"></div>
      <div className="relative z-10 animate-fade-in">
        <h1 className="text-6xl font-bold gradient-text">404</h1>
        <h2 className="text-2xl font-semibold mt-4">{isRtl ? "الصفحة غير موجودة" : "Page Not Found"}</h2>
        <p className="text-muted-foreground mt-2 max-w-md">
          {isRtl
            ? "عذرًا، الصفحة التي تبحث عنها غير موجودة أو تم نقلها."
            : "Sorry, the page you are looking for doesn't exist or has been moved."}
        </p>
        <Button asChild className="mt-6 bg-resolve-gradient hover:shadow-glow">
          <Link href={`/${validLang}`}>{isRtl ? "العودة إلى الصفحة الرئيسية" : "Back to Home"}</Link>
        </Button>
      </div>
    </div>
  )
}
