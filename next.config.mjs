/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["github.com"], // Add GitHub as an allowed image domain
  },
};

export default nextConfig;
