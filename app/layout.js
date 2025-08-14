import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MEKCEN Elektronik Asansör Kontrol Sistemleri",
  description:
    "1997'den beri asansör kontrol sistemlerinde güvenilir çözüm ortağınız",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
