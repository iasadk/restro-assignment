import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'

export type Blog = {
    id: string
    title: string
    slug: string
    excerpt: string
    featuredImage: {
        url: string
        alt?: string
    }
}

export function BlogCard({ blog }: { blog: Blog }) {
    return (
        <Link href={`/blogs/${blog.slug}`}>
            <Card className="h-full cursor-pointer hover:shadow-lg transition">
                <Image
                    src={blog.featuredImage.url}
                    alt={blog.featuredImage.alt ?? blog.title}
                    width={400}
                    height={240}
                    className="rounded-t-lg object-cover h-48 w-full"
                />
                <CardContent className="p-4 space-y-2">
                    <h3 className="text-lg font-semibold line-clamp-2">
                        {blog.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                        {blog.excerpt}
                    </p>
                </CardContent>
            </Card>
        </Link>
    )
}
