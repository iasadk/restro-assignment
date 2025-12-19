// import { withPayload } from '@payloadcms/next/withPayload'
// // const createNextIntlPlugin = require('next-intl/plugin');
// import createNextIntlPlugin from 'next-intl/plugin'
 
// const withNextIntl = createNextIntlPlugin();
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // Your Next.js config here
//   webpack: (webpackConfig) => {
//     webpackConfig.resolve.extensionAlias = {
//       '.cjs': ['.cts', '.cjs'],
//       '.js': ['.ts', '.tsx', '.js', '.jsx'],
//       '.mjs': ['.mts', '.mjs'],
//     }

//     return webpackConfig
//   },
// }

// export default withNextIntl(
//   withPayload(nextConfig, { devBundleServerPackages: false })
// );
import path from 'path'
import { fileURLToPath } from 'url'
import { withPayload } from '@payloadcms/next/withPayload'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',

  webpack: (config) => {
    // ✅ FIX: alias works on Render + Linux
    config.resolve.alias['@'] = path.resolve(__dirname, 'src')

    config.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    return config
  },
}

export default withNextIntl(
  withPayload(nextConfig, { devBundleServerPackages: false })
)
