import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { format } from 'date-fns'

// If you use Payload Lexical renderer
import { RichText } from '@payloadcms/richtext-lexical/react'
import { Blog } from '@/payload-types'
import { getImageUrl } from '@/lib/utils'


export type BlogDetailProps = {
    blog: Blog
}

export function BlogDetail({ blog }: BlogDetailProps) {
    const featuredImage = getImageUrl(blog.featuredImage)
    return (
        <article className="border-b border-border/40 py-20 sm:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Tag + Date */}
                <div className="flex items-center gap-3">
                    {blog.tag && (
                        <Badge variant="secondary" className="capitalize">
                            {blog.tag.replace('-', ' ')}
                        </Badge>
                    )}
                    {blog.publishedAt && (
                        <span className="text-sm text-muted-foreground">
                            {format(new Date(blog.publishedAt), 'MMMM dd, yyyy')}
                        </span>
                    )}
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                    {blog.title}
                </h1>

                {/* Excerpt */}
                <p className="text-lg text-muted-foreground">
                    {blog.excerpt}
                </p>

                {/* Featured Image */}
                {featuredImage && (
                    <div className="relative w-full h-55 sm:h-90 rounded-xl overflow-hidden">
                        <Image
                            src={featuredImage}
                            alt={blog.slug}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

                <Separator />

                {/* Content */}
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                    <RichText data={blog.content} />
                </div>
            </div>
        </article>
    )
}
