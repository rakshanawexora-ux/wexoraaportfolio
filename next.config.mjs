/** @type {import('next').NextConfig} */
const nextConfig = {
  // Generate a static site in out/ that can be hosted without a Node server.
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
