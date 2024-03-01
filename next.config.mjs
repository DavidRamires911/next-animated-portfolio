/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "i.ibb.co" },
      { protocol: "https", hostname: "www.canva.com" },
    ],
  },
};

export default nextConfig;
