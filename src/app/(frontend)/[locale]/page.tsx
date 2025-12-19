import { HighlightedBlogsBlock } from "../../../components/custom/blog/BlogSection"
import { CtaSection } from "../../../components/custom/cta-section"
import { FeaturesSection } from "../../../components/custom/featured-section"
import { HeroSection } from "../../../components/custom/hero-section"
import { TestimonialsSection } from "../../../components/custom/testimonials-section"
import { buildMetadata } from "../../../lib/seo"
import { fetchPage, LocaleTypes } from "../../../lib/server-actions"
import { getImageUrl } from "../../../lib/utils"
import { Metadata } from "next"



type Props = {
  params: Promise<{
    slug: string
    locale: LocaleTypes
  }>
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const prms = await params;
  const blog = await fetchPage('first-page', prms.locale)

  const doc = blog.docs[0]


  return buildMetadata({
    title: doc.seo?.metaTitle || doc.title,
    description: doc.seo?.metaDescription ?? '',
    image: getImageUrl(doc.seo?.metaImage ?? '') || '',
    url: `${prms.locale}`,
    noIndex: doc.seo?.noIndex ?? false,
  })
}
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
