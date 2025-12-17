import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
    {
        quote: "Modern has transformed how we build and deploy. We went from monthly releases to daily deployments.",
        author: "Sarah Chen",
        role: "CTO at TechCorp",
        avatar: "/diverse-woman-portrait.png",
        company: "Netflix",
    },
    {
        quote: "The developer experience is unmatched. Our team is more productive than ever before.",
        author: "Michael Rodriguez",
        role: "Engineering Lead",
        avatar: "/man.jpg",
        company: "Spotify",
    },
    {
        quote: "Security and compliance built-in from day one. It gave us peace of mind to focus on innovation.",
        author: "Emily Johnson",
        role: "Head of Infrastructure",
        avatar: "/woman-2.jpg",
        company: "Airbnb",
    },
]

export function TestimonialsSection() {
    return (
        <section className="border-b border-border/40 py-20 sm:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        Trusted by industry leaders
                    </h2>
                    <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                        See what our customers have to say about their experience.
                    </p>
                </div>

                <div className="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <Card key={testimonial.author} className="border-border/50 bg-card p-8">
                            <p className="mb-6 leading-relaxed text-card-foreground">&ldquo;{testimonial.quote}&rdquo;</p>
                            <div className="flex items-center gap-4">
                                <Avatar>
                                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                                    <AvatarFallback>
                                        {testimonial.author
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")}
                                    </AvatarFallback>
                                </Avatar>
                                <div>
                                    <div className="font-semibold text-card-foreground">{testimonial.author}</div>
                                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Company Logos */}
                <div className="mx-auto mt-16 max-w-4xl">
                    <div className="grid grid-cols-2 gap-8 opacity-50 sm:grid-cols-4">
                        {["Netflix", "Spotify", "Airbnb", "Uber"].map((company) => (
                            <div key={company} className="flex items-center justify-center">
                                <span className="text-2xl font-bold">{company}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
