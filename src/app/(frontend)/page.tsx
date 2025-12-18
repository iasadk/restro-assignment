import { Header } from "@/components/custom/header"
import { HeroSection } from "@/components/custom/hero-section"
import { FeaturesSection } from "@/components/custom/featured-section"
import { TestimonialsSection } from "@/components/custom/testimonials-section"
import { CtaSection } from "@/components/custom/cta-section"
import { Footer } from "@/components/custom/footer"
import { payload } from "@/lib/payload"

export default async function HomePage() {
  const page = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: 'first-page',
      },
    },
  });

  const layouts = page.docs[0].layout;
  console.log(page)
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {layouts.map(layout => {
          if (layout.blockType === 'cta') {
            return layout.variant === 'variant-one' ? <HeroSection layout={layout} /> : <CtaSection layout={layout} />
          } else if (layout.blockType === 'features') {
            return <FeaturesSection layout={layout} />
          }
        })}
        <TestimonialsSection />

      </main>
      <Footer />
    </div>
  )
}
