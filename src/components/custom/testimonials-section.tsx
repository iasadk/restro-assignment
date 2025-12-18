import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Page } from "@/payload-types"

interface Props {
    layout: Extract<Page['layout'][number], { blockType: 'testimonial' }>
}
export function TestimonialsSection({ layout }: Props) {
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
                    {layout.testimonials.map((testimonial) => {
                        const avatarUrl = typeof testimonial.avatar === 'object'
                            ? testimonial.avatar?.url
                            : testimonial.avatar || '/placeholder.svg'
                        return (
                            <Card key={testimonial.author} className="border-border/50 bg-card p-8">
                                <p className="mb-6 leading-relaxed text-card-foreground">&ldquo;{testimonial.quote}&rdquo;</p>
                                <div className="flex items-center gap-4">
                                    <Avatar>
                                        <AvatarImage src={avatarUrl || "/placeholder.svg"} alt={testimonial.author} />
                                        <AvatarFallback>
                                            {testimonial.author
                                                .split(" ")
                                                .map((n) => n[0])
                                                .join("")}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <div className="font-semibold text-card-foreground">{testimonial.author}</div>
                                        <div className="text-sm text-muted-foreground">
                                            {testimonial.role}
                                            {testimonial.company ? ` at ${testimonial.company}` : null}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        )
                    })}
                </div>

                {/* Company Logos */}
                {/* <div className="mx-auto mt-16 max-w-4xl">
                    <div className="grid grid-cols-2 gap-8 opacity-50 sm:grid-cols-4">
                        {layout.companies?.map((company) => (
                            <div key={company.id} className="flex items-center justify-center">
                                <span className="text-2xl font-bold">{company.name}</span>
                            </div>
                        ))}
                    </div>
                </div> */}
                <div className="mx-auto mt-16 max-w-6xl overflow-hidden">
                    <div className="group relative">
                        <div className="flex w-max animate-marquee gap-8 group-hover:paused">
                            {[...(layout.companies ?? []), ...(layout.companies ?? [])].map((company, index) => (
                                <div
                                    key={`${company.id}-${index}`}
                                    className="flex min-w-50 items-center justify-center opacity-50"
                                >
                                    <span className="text-2xl font-bold whitespace-nowrap">
                                        {company.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
