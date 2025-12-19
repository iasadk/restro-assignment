import { HighlightedBlogsBlock } from "@/components/custom/blog/BlogSection"
import { CtaSection } from "@/components/custom/cta-section"
import { FeaturesSection } from "@/components/custom/featured-section"
import { HeroSection } from "@/components/custom/hero-section"
import { TestimonialsSection } from "@/components/custom/testimonials-section"
import { fetchPage } from "@/lib/server-actions"

export default async function HomePage({ params }: any) {
  const prms = await params;
  const page = await fetchPage('first-page', prms.locale)
  const layouts = page.docs[0].layout;
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {layouts.map((layout, i) => {
          if (layout.blockType === 'cta') {
            return layout.variant === 'variant-one' ? <HeroSection layout={layout} key={layout.blockType + i} /> : <CtaSection layout={layout} key={layout.blockType + i} />
          } else if (layout.blockType === 'testimonial') {
            return <TestimonialsSection layout={layout} key={layout.blockType + i} />
          } else if (layout.blockType === 'features') {
            return <FeaturesSection layout={layout} key={layout.blockType + i} />
          } else if (layout.blockType === 'highlighted-blogs') {
            return <HighlightedBlogsBlock layout={layout} key={layout.blockType + i} />
          }
        })}
      </main>
    </div>
  )
}
