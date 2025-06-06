/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: { 
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET || 'fallback-secret-for-build',
    NEXTAUTH_URL: process.env.NEXTAUTH_URL || 'http://localhost:3000',
  },
  async redirects() {
    return [
      // Redirect old case studies to disability project
      {
        source: '/case-studies/:path*',
        destination: '/projects/disability-rights-ai/case-studies/:path*',
        permanent: true,
      },
      // Redirect services to projects
      {
        source: '/services/:path*',
        destination: '/projects',
        permanent: true,
      },
      // Redirect early access to disability project
      {
        source: '/early-access',
        destination: '/projects/disability-rights-ai/early-access',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
// Force new Vercel deployment with DATABASE_URL environment variable