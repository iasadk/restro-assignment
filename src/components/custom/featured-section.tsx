import { Zap, Shield, TrendingUp, Users, Code, Rocket } from "lucide-react"

const features = [
    {
        icon: Zap,
        title: "Lightning Fast",
        description: "Build and ship at the speed of thought with optimized performance.",
    },
    {
        icon: Shield,
        title: "Enterprise Security",
        description: "Bank-level security with automated compliance and monitoring.",
    },
    {
        icon: TrendingUp,
        title: "Scale Effortlessly",
        description: "From startup to enterprise, scale seamlessly with zero config.",
    },
    {
        icon: Users,
        title: "Team Collaboration",
        description: "Work together in real-time with powerful collaboration tools.",
    },
    {
        icon: Code,
        title: "Developer First",
        description: "Built by developers, for developers. Intuitive and powerful.",
    },
    {
        icon: Rocket,
        title: "Deploy Instantly",
        description: "Push to deploy. Go live in seconds, not hours.",
    },
]

export function FeaturesSection() {
    return (
        <section className="border-b border-border/40 py-20 sm:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        Everything you need to build modern web apps
                    </h2>
                    <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                        A complete toolkit designed to help you ship faster and build better.
                    </p>
                </div>

                <div className="mx-auto mt-16 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => {
                        const Icon = feature.icon
                        return (
                            <div
                                key={feature.title}
                                className="group relative overflow-hidden rounded-lg border border-border/50 bg-card p-8 transition-colors hover:border-accent/50"
                            >
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                                    <Icon className="h-6 w-6 text-accent" />
                                </div>
                                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                                <p className="leading-relaxed text-muted-foreground">{feature.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
