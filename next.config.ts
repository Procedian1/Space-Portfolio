/** @type {import('next').NextConfig} */
const isGH = process.env.GITHUB_PAGES === 'true'
const repo = 'Space-Portfolio'

const nextConfig = {
  output: 'export',                 // produce a static site
  images: { unoptimized: true },    // no Image Optimization on GH Pages
  basePath: isGH ? `/${repo}` : undefined,   // needed for project pages
  assetPrefix: isGH ? `/${repo}/` : undefined
}

export default nextConfig
