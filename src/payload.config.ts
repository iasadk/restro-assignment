import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'
import { en } from '@payloadcms/translations/languages/en'
import { fr } from '@payloadcms/translations/languages/fr'
import { es } from '@payloadcms/translations/languages/es'
import { Media } from './collections/Media'
import { Page } from './collections/Page'
import { Users } from './collections/Users'
import { ContactSubmissions } from './collections/Contact'
import { Blogs } from './collections/Blog'
import englishTranslation from '../messages/en.json'
import frenchTranslation from '../messages/en.json'
import espaniolTranslation from '../messages/en.json'
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const config = buildConfig({
  i18n: {
    fallbackLanguage: 'en',
    supportedLanguages: { en, fr, es },
    translations: {
      'en': englishTranslation,
      'fr': frenchTranslation,
      'es': espaniolTranslation,
    }
  },
  localization: {
    locales: ['en', 'fr', 'es'],
    defaultLocale: 'en',
    fallback: true,
  },
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    Page,
    ContactSubmissions,
    Blogs
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || '',
  }),
  sharp,
  plugins: [],
})

export default config;