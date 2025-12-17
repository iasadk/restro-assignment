import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CtaSection() {
    return (
        <section className="py-20 sm:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card">
                    <div className="relative z-10 px-6 py-20 sm:px-12 sm:py-28 lg:px-16">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                                Ready to get started?
                            </h2>
                            <p className="mb-10 text-pretty text-lg leading-relaxed text-muted-foreground">
                                Join thousands of teams building the future of the web. Start your free trial today.
                            </p>
                            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                <Button size="lg" className="w-full sm:w-auto">
                                    Start Free Trial
                                </Button>
                                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent" asChild>
                                    <Link href="/contact">Contact Sales</Link>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Background decoration */}
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute right-0 top-0 h-full w-1/2 bg-accent/5 blur-3xl" />
                    </div>
                </div>
            </div>
        </section>
    )
}
