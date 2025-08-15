/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Görsel optimizasyonu
  images: {
    domains: [],
    formats: ["image/avif", "image/webp"],
  },

  // Güvenlik başlıkları - Google Maps için güncellenmiş
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
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(self), payment=(), usb=(), magnetometer=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            // Content Security Policy - Google Maps için güncellenmiş
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.google.com https://*.googleapis.com https://*.gstatic.com https://*.googletagmanager.com https://www.google-analytics.com https://vercel.live",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://*.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com data:",
              "img-src 'self' data: https: blob: https://*.googleapis.com https://*.gstatic.com https://*.google.com https://*.googleusercontent.com",
              "media-src 'self'",
              "connect-src 'self' https://*.google.com https://*.googleapis.com https://*.gstatic.com https://www.google-analytics.com https://analytics.google.com https://vitals.vercel-insights.com",
              // Google Maps iframe için önemli
              "frame-src 'self' https://www.google.com/maps/ https://www.google.com/maps/embed https://maps.google.com https://www.youtube.com",
              "frame-ancestors 'self'",
              "base-uri 'self'",
              "form-action 'self'",
              "manifest-src 'self'",
              "worker-src 'self' blob:",
              "child-src 'self' https://www.google.com",
            ].join("; "),
          },
        ],
      },
      // Statik dosyalar için cache ayarları
      {
        source: "/(.*).png",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/(.*).jpg",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Performans optimizasyonu
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Deneysel özellikler
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
