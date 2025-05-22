"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle } from "lucide-react"

interface NewsletterFormProps {
  dictionary: {
    title: string
    placeholder: string
    button: string
    success: string
  }
  isRtl: boolean
}

export function NewsletterForm({ dictionary, isRtl }: NewsletterFormProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSuccess(true)
    setEmail("")

    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000)
  }

  return (
    <div className="space-y-4">
      {isSuccess ? (
        <div className="flex items-center p-4 bg-primary/20 text-primary-foreground rounded-lg">
          <CheckCircle className="h-5 w-5 mr-2" />
          <p>{dictionary.success}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-2">
          <div className="flex flex-col sm:flex-row gap-2">
            <Input
              type="email"
              placeholder={dictionary.placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="glassmorphism"
            />
            <Button type="submit" disabled={isSubmitting} className="bg-resolve-gradient hover:shadow-glow">
              {isSubmitting ? (
                <span className="flex items-center">
                  <span className="animate-spin mr-2">⟳</span>
                  {isRtl ? "جاري الإرسال..." : "Sending..."}
                </span>
              ) : (
                dictionary.button
              )}
            </Button>
          </div>
        </form>
      )}
    </div>
  )
}
