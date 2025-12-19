import { BlogSlider } from '@/components/custom/blog/BlogSlider'

export function HighlightedBlogsBlock({ layout }: any) {
    return (
        <section className="">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                    {layout.heading}
                </h2>
                <BlogSlider blogs={layout.blogs} />
            </div>
        </section>
    )
}
