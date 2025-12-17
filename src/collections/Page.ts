import type { CollectionConfig } from 'payload'
import { Hero } from '../blocks/Hero'
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
            blocks: [Hero/*, Feature, Testimonial, CTA*/],
        },
    ],
}
