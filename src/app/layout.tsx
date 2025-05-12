import type { Metadata } from "next";
import { Providers } from "./providers";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { generatePreloadLinks, criticalAssets } from "../lib/preload-assets";
import ClientBody from "./ClientBody";
import { MobileOptimizedLayout } from "../components/MobileOptimizedLayout";
import "./globals.css";

// Layout metadata
export const metadata: Metadata = {
  title: {
    template: "%s | The Growth MD",
    default: "The Growth MD | Accelerating Growth for Behavioral Health Facilities",
  },
  description:
    "Specialized growth strategies for behavioral health facilities. Increase patient acquisition, optimize operations, and improve profitability.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#121212" },
  ],
  metadataBase: new URL(process.env.SITE_URL || "https://the-growth-md.netlify.app"),
  openGraph: {
    title: "The Growth MD | Accelerating Growth for Behavioral Health Facilities",
    description: "Specialized growth strategies for behavioral health facilities. Increase patient acquisition, optimize operations, and improve profitability.",
    url: "https://the-growth-md.netlify.app",
    siteName: "The Growth MD",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Growth MD | Accelerating Growth for Behavioral Health Facilities",
    description: "Specialized growth strategies for behavioral health facilities. Increase patient acquisition, optimize operations, and improve profitability.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://the-growth-md.netlify.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Generate preload links for critical assets
  const preloadLinks = generatePreloadLinks(criticalAssets);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to font providers */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Viewport and theme color meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#121212" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />

        {/* Preload critical assets */}
        {criticalAssets.map((asset, index) => (
          <link
            key={index}
            rel="preload"
            href={asset.href}
            as={
              asset.as ||
              (asset.type === "image"
                ? "image"
                : asset.type === "style"
                ? "style"
                : asset.type === "script"
                ? "script"
                : "font")
            }
            type={
              asset.href.endsWith(".svg")
                ? "image/svg+xml"
                : asset.href.endsWith(".png")
                ? "image/png"
                : asset.href.endsWith(".jpg") || asset.href.endsWith(".jpeg")
                ? "image/jpeg"
                : undefined
            }
          />
        ))}
      </head>
      <body>
        <Providers>
          <Header />
          <MobileOptimizedLayout>
            <main>{children}</main>
          </MobileOptimizedLayout>
          <Footer />

          {/* Client-side only components loaded after page hydration */}
          <ClientBody />
        </Providers>
      </body>
    </html>
  );
}
