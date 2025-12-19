import { withPayload } from '@payloadcms/next/withPayload'
// const createNextIntlPlugin = require('next-intl/plugin');
import createNextIntlPlugin from 'next-intl/plugin'
 
const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    return webpackConfig
  },
}

export default withNextIntl(
  withPayload(nextConfig, { devBundleServerPackages: false })
);