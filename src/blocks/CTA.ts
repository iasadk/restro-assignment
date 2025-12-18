import type { Block } from 'payload'

export const CTA: Block = {
  slug: 'cta',

  fields: [
    {
      name: 'tag',
      type: 'text',
      required: false,
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
    },
    {
      name: 'subheading',
      type: 'textarea',
    },
    {
      name: 'primaryCTA',
      type: 'group',
      fields: [
        { name: 'label', type: 'text' },
        { name: 'url', type: 'text' },
      ],
    },
    {
      name: 'secondaryCTA',
      type: 'group',
      fields: [
        { name: 'label', type: 'text' },
        { name: 'url', type: 'text' },
      ],
    },
  ],
}
