import type { CollectionConfig } from 'payload'
import { CTA } from '../blocks/CTA'
import { FeaturesBlock } from '@/blocks/FeaturedSection'
import { TestimonialBlock } from '../blocks/Testimonial'
import { HighlightedBlogs } from '@/blocks/HighlightedBlog'
import { SEOFields } from '@/blocks/Seo'

export const Page: CollectionConfig = {
    slug: 'pages',

    admin: {
        useAsTitle: 'title',
    },

    fields: [
        {
            name: 'seo',
            type: 'group',
            fields: SEOFields,
        },
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'slug',
            type: 'text',
            unique: true,
        },
        {
            name: 'layout',
            type: 'blocks',
            required: true,
            blocks: [CTA, FeaturesBlock, TestimonialBlock, HighlightedBlogs],
        },
    ],
}
