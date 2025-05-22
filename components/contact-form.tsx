"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle } from "lucide-react"

interface ContactFormProps {
  dictionary: {
    name: string
    email: string
    message: string
    submit: string
    success: string
  }
  isRtl: boolean
}

export function ContactForm({ dictionary, isRtl }: ContactFormProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSuccess(true)
    setFormState({ name: "", email: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000)
  }

  return (
    <>
      {isSuccess ? (
        <div className="flex items-center p-4 bg-primary/20 text-primary-foreground rounded-lg">
          <CheckCircle className="h-5 w-5 mr-2" />
          <p>{dictionary.success}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              {dictionary.name}
            </label>
            <Input
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
              className="glassmorphism"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              {dictionary.email}
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
              required
              className="glassmorphism"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              {dictionary.message}
            </label>
            <Textarea
              id="message"
              name="message"
              rows={5}
              value={formState.message}
              onChange={handleChange}
              required
              className="glassmorphism"
            />
          </div>
          <Button type="submit" disabled={isSubmitting} className="w-full bg-resolve-gradient hover:shadow-glow">
            {isSubmitting ? (
              <span className="flex items-center">
                <span className="animate-spin mr-2">⟳</span>
                {isRtl ? "جاري الإرسال..." : "Sending..."}
              </span>
            ) : (
              dictionary.submit
            )}
          </Button>
        </form>
      )}
    </>
  )
}
