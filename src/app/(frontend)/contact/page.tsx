import { ContactForm } from "@/components/custom/contact-form"

export default function ContactPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">
                <section className="py-20 sm:py-32">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl">
                            <div className="mb-12 text-center">
                                <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                                    Get in touch
                                </h1>
                                <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                                    Have a question or want to work together? We&apos;d love to hear from you.
                                </p>
                            </div>

                            <ContactForm />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
