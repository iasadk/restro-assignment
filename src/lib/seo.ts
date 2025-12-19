import type { Metadata } from 'next'

export function buildMetadata({
    title,
    description,
    image,
    url,
    noIndex,
}: {
    title: string
    description: string
    image?: string
    url: string
    noIndex?: boolean
}): Metadata {
    return {
        title,
        description,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title,
            description,
            url,
            images: image ? [{ url: image }] : [],
            type: 'article',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: image ? [image] : [],
        },
        robots: {
            index: !noIndex,
            follow: !noIndex,
        },
    }
}
