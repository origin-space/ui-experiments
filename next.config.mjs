/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: "/exp1-static",
  transpilePackages: ["@workspace/ui"],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
    ],    
  },  
}

export default nextConfig
