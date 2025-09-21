import { withContentlayer } from 'next-contentlayer'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router is enabled by default in Next.js 13+
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default withContentlayer(nextConfig)