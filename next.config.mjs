/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "dist", // Add this line
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
};

export default nextConfig;
