import type { CollectionConfig } from 'payload'

export const Blogs: CollectionConfig = {
    slug: 'blogs',
    admin: {
        useAsTitle: 'title',
    },
    versions: {
        drafts: true,
    },
    access: {
        read: () => true,
    },

    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
            localized: true,
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
        },
        {
            name: 'tag',
            type: 'select',
            options: [
                {
                    label: 'New',
                    value: 'new'
                },
                {
                    label: 'Most Loved',
                    value: 'most-loved'
                },
                {
                    label: 'Featured',
                    value: 'featured'
                },
            ]
        },
        {
            name: 'excerpt',
            type: 'textarea',
            required: true,
        },
        {
            name: 'featuredImage',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'content',
            type: 'richText',
            required: true,
        },
        {
            name: 'publishedAt',
            type: 'date',
            admin: {
                position: 'sidebar',
            },
        },
    ],
}
