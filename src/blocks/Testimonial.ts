// blocks/Testimonial.ts
import type { Block } from 'payload'

export const TestimonialBlock: Block = {
    slug: 'testimonial',
    labels: {
        singular: 'Testimonial Section',
        plural: 'Testimonial Sections',
    },
    fields: [
        {
            name: 'heading',
            type: 'text',
            required: true,
        },
        {
            name: 'subheading',
            type: 'textarea',
        },
        {
            name: 'testimonials',
            type: 'array',
            required: true,
            fields: [
                {
                    name: 'quote',
                    type: 'textarea',
                    required: true,
                },
                {
                    name: 'author',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'role',
                    type: 'text',
                },
                {
                    name: 'company',
                    type: 'text',
                },
                {
                    name: 'avatar',
                    type: 'upload',
                    relationTo: 'media',
                },
            ],
        },
        {
            name: 'companies',
            type: 'array',
            fields: [
                {
                    name: 'name',
                    type: 'text',
                    required: true,
                },
            ],
        },
    ],
}
