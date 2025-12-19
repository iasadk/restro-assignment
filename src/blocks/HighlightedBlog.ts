import type { Block } from 'payload'

export const HighlightedBlogs: Block = {
    slug: 'highlighted-blogs',
    fields: [
        {
            name: 'heading',
            type: 'text',
            defaultValue: 'Latest Blogs',
        },
        {
            name: 'blogs',
            type: 'relationship',
            relationTo: 'blogs',
            hasMany: true,
            required: true,
        },
    ],
}
