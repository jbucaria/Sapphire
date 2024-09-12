/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.clerk.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/checkout',
        destination: '/checkout', // Redirect to the same route for dynamic handling
        permanent: false,
      },
    ]
  },
}

export default nextConfig
