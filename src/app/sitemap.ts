import { payload } from "@/lib/payload"

export default async function sitemap() {

    const blogs = await payload.find({ collection: 'blogs', limit: 1000 })

    return blogs.docs.map((b) => ({
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${b.slug}`,
        lastModified: b.updatedAt,
    }))
}
