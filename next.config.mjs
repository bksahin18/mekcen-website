/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Görsel optimizasyonu
  images: {
    domains: [],
    formats: ["image/avif", "image/webp"],
  },

  // Güvenlik başlıkları"
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },

  // Performans optimizasyonu
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Deneysel özellikler (opsiyonel)
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
