/** @type {import('next').NextConfig} */
const repo = 'Space-Portfolio';
const isProd = process.env.NODE_ENV === 'production';

export default {
  output: 'export',
  images: { unoptimized: true },
  basePath: isProd ? `/${repo}` : undefined,
  assetPrefix: isProd ? `/${repo}/` : undefined,
};
