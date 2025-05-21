/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'cdn.jsdelivr.net', 'junit.org', 'testing-library.com', 'miro.medium.com', 'w7.pngwing.com'],
  },
};

export default nextConfig;