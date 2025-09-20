const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["lowiwed-api.wooshelf.com"], // ✅ allow API images
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
export default nextConfig;
