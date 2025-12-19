import { BlogDetail } from '@/components/custom/blog/BlogDetail'
import { fetchBlogBySlug } from '@/lib/server-actions'
import { notFound } from 'next/navigation'

export default async function BlogPage({ params }: any) {
    const prms = await params;
    const blog = await fetchBlogBySlug(prms.slug)
    // console.log(blog)
    if (!blog) notFound()

    return (
        <BlogDetail blog={blog} />
    )
}
