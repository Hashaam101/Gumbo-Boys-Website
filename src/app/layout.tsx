import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TabTitleHandler from "@/components/TabTitleHandler";
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// --- METADATA STAYS HERE ---
export const metadata: Metadata = {
  metadataBase: new URL("https://gumboboys.com"),
  title: "Gumbo Boys | Authentic Cajun & Creole in DTLA",
  description: "Authentic New Orleans Flavor in the Heart of DTLA. Serving the most authentic, soul-warming Gumbo and Po'boys in California.",
  keywords: [
    "gumbo", "po-boys", "cajun", "creole", "los angeles", "dtla", "food delivery", "uber eats", "seafood platter", "fried alligator", "new orleans food"
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Gumbo Boys | Authentic Cajun & Creole in DTLA",
    description: "Authentic New Orleans Flavor in the Heart of DTLA. Serving the most authentic, soul-warming Gumbo and Po'boys in California.",
    url: "https://gumboboys.com/",
    siteName: "Gumbo Boys",
    images: [
      {
        url: "/Images/Logo.png",
        width: 400,
        height: 400,
        alt: "Gumbo Boys Logo"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    site: "https://gumboboys.com/",
    title: "Gumbo Boys | Authentic Cajun & Creole in DTLA",
    description: "Authentic New Orleans Flavor in the Heart of DTLA. Serving the most authentic, soul-warming Gumbo and Po'boys in California.",
    images: ["/Images/Logo.png"]
  }
};
// --- END METADATA ---


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaMeasurementId = 'G-E7K6Z23GXM';


  return (
    <html lang="en" className="dark">
      <head>

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TabTitleHandler />

        {children}


        {gaMeasurementId && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                   window.dataLayer = window.dataLayer || [];
                   function gtag(){dataLayer.push(arguments);}
                   gtag('js', new Date());
                   gtag('config', '${gaMeasurementId}');
                 `
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}