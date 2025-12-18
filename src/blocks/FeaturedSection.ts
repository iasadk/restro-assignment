import type { Block } from 'payload'

export const FeaturesBlock: Block = {
    slug: 'features',
    labels: {
        singular: 'Features Section',
        plural: 'Features Sections',
    },
    fields: [
        {
            name: 'heading',
            type: 'text',
            required: true,
        },
        {
            name: 'description',
            type: 'textarea',
        },
        {
            name: 'features',
            type: 'array',
            required: true,
            fields: [
                {
                    name: 'icon',
                    type: 'select',
                    required: true,
                    options: [
                        { label: 'Zap', value: 'zap' },
                        { label: 'Shield', value: 'shield' },
                        { label: 'Trending Up', value: 'trending-up' },
                        { label: 'Users', value: 'users' },
                        { label: 'Code', value: 'code' },
                        { label: 'Rocket', value: 'rocket' },
                    ],
                },
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'description',
                    type: 'textarea',
                },
            ],
        },
    ],
}
