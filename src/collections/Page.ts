import type { CollectionConfig } from 'payload'
import { CTA } from '../blocks/CTA'
import { FeaturesBlock } from '@/blocks/FeaturedSection'
import { TestimonialBlock } from '../blocks/Testimonial'
// import { Feature } from '../blocks/Feature'
// import { Testimonial } from '../blocks/Testimonial'
// import { CTA } from '../blocks/CTA'

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
            blocks: [CTA, FeaturesBlock, TestimonialBlock],
        },
    ],
}
