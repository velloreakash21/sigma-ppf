import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sigmappf-website.vercel.app"),
  title: "Sigma PPF | Premium Paint Protection Film",
  description: "The invisible armour your car deserves. Premium automotive paint protection film solutions with 7-year warranty. Self-healing, hydrophobic, UV protection.",
  keywords: ["PPF", "paint protection film", "car protection", "automotive", "Sigma PPF", "self-healing", "Hyderabad"],
  authors: [{ name: "Sigma PPF" }],
  creator: "Sigma PPF",
  icons: {
    icon: [
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "Sigma PPF | Premium Paint Protection Film",
    description: "The invisible armour your car deserves. Premium automotive paint protection film solutions.",
    url: "https://sigmappf-website.vercel.app",
    siteName: "Sigma PPF",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/assets/brand/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sigma PPF - Premium Paint Protection Film",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sigma PPF | Premium Paint Protection Film",
    description: "The invisible armour your car deserves.",
    images: ["/assets/brand/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-dark text-white min-h-screen`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
