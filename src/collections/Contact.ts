import type { CollectionConfig } from 'payload'

export const ContactSubmissions: CollectionConfig = {
    slug: 'contact-submissions',
    admin: {
        useAsTitle: 'name',
    },
    access: {
        create: () => true,
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
        },
        {
            name: 'email',
            type: 'email',
            required: true,
        },
        {
            name: 'company',
            type: 'text',
        },
        {
            name: 'message',
            type: 'textarea',
            required: true,
        },
    ],
}
