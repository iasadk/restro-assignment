import type { Block } from 'payload'

export const CTA: Block = {
  slug: 'cta',

  fields: [
    {
      name: 'tag',
      type: 'text',
      required: false,
      localized: true
    },
    {
      name: 'variant',
      type: 'select',
      required: false,
      options: [
        { label: 'For Hero Section', value: 'variant-one' },
        { label: 'For E.O.P', value: 'variant-two' },
      ]
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
      localized: true

    },
    {
      name: 'subheading',
      type: 'textarea',
      localized: true
    },
    {
      name: 'primaryCTA',
      type: 'group',
      fields: [
        { name: 'label', type: 'text', localized: true },
        { name: 'url', type: 'text', localized: true },
      ],
    },
    {
      name: 'secondaryCTA',
      type: 'group',
      fields: [
        { name: 'label', type: 'text', localized: true },
        { name: 'url', type: 'text', localized: true },
      ],
    },
  ],
}
