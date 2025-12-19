import type { CollectionConfig } from 'payload'
import { CTA } from '../blocks/CTA'
import { FeaturesBlock } from '@/blocks/FeaturedSection'
import { TestimonialBlock } from '../blocks/Testimonial'
import { HighlightedBlogs } from '@/blocks/HighlightedBlog'

export const Page: CollectionConfig = {
    slug: 'pages',

    admin: {
        useAsTitle: 'title',
    },

    fields: [
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
