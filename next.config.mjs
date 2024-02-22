/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
    appDir: false,
    legacyBrowsers: false,
  },
};

export default nextConfig;
