import { BlogDetail } from '../../../../../components/custom/blog/BlogDetail'
import { fetchBlogBySlug, LocaleTypes } from '../../../../../lib/server-actions'
import { notFound } from 'next/navigation'

import { buildMetadata } from '../../../../../lib/seo'
import { payload } from '../../../../../lib/payload'
import { Metadata } from 'next'

type Props = {
    params: Promise<{
        slug: string
        locale: LocaleTypes
    }>
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const prms = await params;
    const blog = await payload.find({
        collection: 'blogs',
        where: { slug: { equals: prms.slug } },
        locale: prms.locale,
        limit: 1,
    })

    const doc = blog.docs[0]

    const metaImage = typeof doc.seo?.metaImage === 'object' && doc.seo.metaImage?.url ? doc.seo.metaImage.url : undefined
    const featuredImage = typeof doc.featuredImage === 'object' && doc.featuredImage?.url ? doc.featuredImage.url : undefined

    return buildMetadata({
        title: doc.seo?.metaTitle || doc.title,
        description: doc.seo?.metaDescription || doc.excerpt,
        image: metaImage || featuredImage,
        url: `/blog/${doc.slug}`,
        noIndex: doc.seo?.noIndex ?? false,
    })
}
export default async function BlogPage({ params }: any) {
    const prms = await params;
    const blog = await fetchBlogBySlug(prms.slug, prms.locale)
    // console.log(blog)
    if (!blog) notFound()

    return (
        <BlogDetail blog={blog} />
    )
}
