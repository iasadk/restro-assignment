import { Button } from "@/components/ui/button"
import { Page } from "@/payload-types"
import { ArrowRight } from "lucide-react"

interface Props {
    layout: Extract<Page['layout'][number], { blockType: 'cta' }>
}
export function HeroSection({ layout }: Props) {
    const { primaryCTA, secondaryCTA } = layout

    return (
        <section className="relative overflow-hidden border-b border-border/40 py-20 sm:py-32 lg:py-40">
            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center flex items-center flex-col">
                    <div className="mb-6 inline-block rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5">
                        <span className="text-sm font-medium text-accent">{layout.tag}</span>
                    </div>

                    <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl m-0!">
                        {layout.heading}
                    </h1>

                    <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
                        {layout.subheading}
                    </p>

                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button size="lg" className="group w-full sm:w-auto">
                            {primaryCTA?.label}
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                            {secondaryCTA?.label}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute left-1/2 top-0 -translate-x-1/2">
                    <div className="h-125 w-200 rounded-full bg-accent/5 blur-3xl" />
                </div>
            </div>
        </section>
    )
}
