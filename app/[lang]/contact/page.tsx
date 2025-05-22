import { getDictionary } from "../dictionaries"
import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const dict = await getDictionary(params.lang as "en" | "ar")

  return {
    title: dict.contact.title,
    description: dict.contact.subtitle,
  }
}

export default async function ContactPage({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang as "en" | "ar")
  const isRtl = params.lang === "ar"

  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-resolve-purple/10 to-transparent opacity-30"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl gradient-text">
              {dict.contact.title}
            </h1>
            <p className="text-muted-foreground md:text-xl max-w-[700px]">{dict.contact.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Contact Form */}
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-2xl font-bold gradient-text">{isRtl ? "أرسل لنا رسالة" : "Send Us a Message"}</h2>
              <ContactForm dictionary={dict.contact} isRtl={isRtl} />
            </div>

            {/* Contact Info */}
            <div className="space-y-6 animate-fade-in animate-delay-100">
              <h2 className="text-2xl font-bold gradient-text">{isRtl ? "معلومات الاتصال" : "Contact Information"}</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mt-1 mr-3 text-primary" />
                  <div className={isRtl ? "pr-[7px]" : ""}>
                    <h3 className="font-medium">{isRtl ? "البريد الإلكتروني" : "Email"}</h3>
                    <p className="text-muted-foreground">info@resolve.agency</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mt-1 mr-3 text-primary" />
                  <div className={isRtl ? "pr-[7px]" : ""}>
                    <h3 className="font-medium">{isRtl ? "الهاتف" : "Phone"}</h3>
                    <p className="text-muted-foreground">+1 (234) 567-890</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mt-1 mr-3 text-primary" />
                  <div className={isRtl ? "pr-[7px]" : ""}>
                    <h3 className="font-medium">{isRtl ? "العنوان" : "Address"}</h3>
                    <p className="text-muted-foreground">
                      {isRtl ? "123 شارع الإبداع، المدينة، البلد" : "123 Creative Street, City, Country"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 mt-1 mr-3 text-primary" />
                  <div className={isRtl ? "pr-[7px]" : ""}>
                    <h3 className="font-medium">{isRtl ? "ساعات العمل" : "Working Hours"}</h3>
                    <p className="text-muted-foreground">
                      {isRtl ? "الاثنين - الجمعة: 9 صباحًا - 6 مساءً" : "Monday - Friday: 9am - 6pm"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-6 aspect-video glassmorphism rounded-lg overflow-hidden p-1">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-resolve-dark/50 rounded-lg">
                  {isRtl ? "خريطة الموقع" : "Location Map"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
