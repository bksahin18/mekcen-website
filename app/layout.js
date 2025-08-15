import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MEKCEN Elektronik Asansör Kontrol Sistemleri | Ankara",
  description:
    "1997'den beri asansör kontrol sistemlerinde güvenilir çözüm ortağınız. Ankara İvedik OSB'de asansör kartı tasarımı, üretimi ve bakım onarım hizmetleri.",
  keywords: [
    "asansör",
    "asansör kartı",
    "asansör kontrol sistemi",
    "mekcen asansör",
    "ankara asansör",
    "ivedik asansör",
    "ostim asansör",
    "asansör bakım",
    "asansör onarım",
    "asansör kontrol kartı",
    "mehmet kıvrak",
    "elektronik asansör sistemleri",
  ].join(", "),
  authors: [{ name: "MEKCEN Asansör", url: "https://mekcenelektronik.com" }],
  creator: "MEKCEN Elektronik",
  publisher: "MEKCEN Elektronik",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mekcenelektronik.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MEKCEN Elektronik Asansör Kontrol Sistemleri",
    description:
      "1997'den beri asansör kontrol sistemlerinde güvenilir çözüm ortağınız. 25+ yıllık tecrübe, 7/24 teknik destek.",
    url: "https://mekcenelektronik.com",
    siteName: "MEKCEN Asansör",
    images: [
      {
        url: "/og-image.png", // Sosyal medya için logo (1200x630px önerilen)
        width: 1200,
        height: 630,
        alt: "MEKCEN Asansör Logo",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MEKCEN Elektronik Asansör Kontrol Sistemleri",
    description:
      "1997'den beri asansör kontrol sistemlerinde güvenilir çözüm ortağınız",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: (
      <meta
        name="google-site-verification"
        content="xwEzzgK_DESTGkB_4f-Lwemcs8iqLhZMtr20fq-jAn8"
      />
    ), // Google Search Console'dan alacaksınız
    yandex: "yandex-verification-kodunuz", // Opsiyonel
  },
  category: "business",
};

// Viewport ayarları
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1e3c72" },
    { media: "(prefers-color-scheme: dark)", color: "#1e3c72" },
  ],
};

export default function RootLayout({ children }) {
  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MEKCEN Elektronik Asansör Kontrol Sistemleri",
    description:
      "Asansör kontrol kartları tasarımı, üretimi ve bakım-onarım hizmetleri",
    url: "https://mekcenelektronik.com",
    telephone: "+903123951932",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Güneş 90 Sanayi Sitesi, İvedik OSB, 1403. Sk. NO:22",
      addressLocality: "Yenimahalle",
      addressRegion: "Ankara",
      postalCode: "06374",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 39.98907,
      longitude: 32.74749,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    sameAs: ["https://wa.me/905323729511"],
    priceRange: "₺₺",
    image: "https://mekcenelektronik.com/logo.png",
    foundingDate: "1997",
    founder: {
      "@type": "Person",
      name: "Mehmet Kıvrak",
    },
    areaServed: {
      "@type": "City",
      name: "Ankara",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Asansör Kontrol Sistemleri",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "MK-2000 Serisi Asansör Kontrol Kartı",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "MK-3000 Serisi Asansör Kontrol Sistemi",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "MK-ECO Serisi Enerji Tasarruflu Kontrol Kartı",
          },
        },
      ],
    },
  };

  return (
    <html lang="tr">
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Google Analytics */}
        {process.env.NODE_ENV === "production" && (
          <>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-JXHLRL08XT"
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-JXHLRL08XT');
              `}
            </Script>
          </>
        )}
      </head>
      <body className={inter.className}>
        {children}

        {/* WhatsApp Chat Widget (Opsiyonel) */}
        <Script
          id="whatsapp-chat"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // WhatsApp görünüm zamanlaması
              setTimeout(function() {
                var whatsappBtn = document.querySelector('.whatsapp-btn');
                if (whatsappBtn) {
                  whatsappBtn.style.animation = 'pulse 2s infinite';
                }
              }, 3000);
            `,
          }}
        />
      </body>
    </html>
  );
}
