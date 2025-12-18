"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsSubmitting(true)

        const form = e.currentTarget
        const formData = new FormData(e.currentTarget)
        const data = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            company: formData.get("company") as string,
            message: formData.get("message") as string,
        }

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })

            console.log(response)
            if (!response.ok) {
                throw new Error("Failed to submit form")
            }

            toast("Message sent!", {
                description: "We'll get back to you shortly.",
            })

            form.reset()
        } catch (error) {
            toast("Submission failed", {
                description: "Please try again later.",
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 rounded-lg border border-border/50 bg-card p-8">
            <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" name="name" placeholder="John Doe" required disabled={isSubmitting} />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" placeholder="john@example.com" required disabled={isSubmitting} />
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" name="company" placeholder="Acme Inc." disabled={isSubmitting} />
            </div>

            <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    rows={6}
                    required
                    disabled={isSubmitting}
                />
            </div>

            <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                    </>
                ) : (
                    "Send Message"
                )}
            </Button>
        </form>
    )
}
