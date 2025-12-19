import type { Field } from 'payload'

export const SEOFields: Field[] = [
    {
        name: 'metaTitle',
        type: 'text',
        localized: true,
        admin: {
            description: 'SEO title (max 60 chars)',
        },
    },
    {
        name: 'metaDescription',
        type: 'textarea',
        localized: true,
        admin: {
            description: 'SEO description (max 160 chars)',
        },
    },
    {
        name: 'metaImage',
        type: 'upload',
        relationTo: 'media',
        admin: {
            description: 'OG / Social image',
        },
    },
    {
        name: 'noIndex',
        type: 'checkbox',
        defaultValue: false,
        admin: {
            description: 'Prevent indexing',
        },
    },
    {
        name: 'canonicalUrl',
        type: 'text',
        admin: {
            description: 'Optional canonical URL',
        },
    },
]
