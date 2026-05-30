import type { Metadata } from "next";
import localFont from "next/font/local";
import { Be_Vietnam_Pro } from "next/font/google";

import {
  siteDescription,
  siteName,
  siteTitle,
  siteUrlObject,
} from "@/lib/site";

import "./globals.css";

const playfair = localFont({
  src: "../assets/fonts/SVN-NakhonKanlaya/SVN-Nakhon Kanlaya.ttf",
  variable: "--font-playfair",
  display: "swap",
  preload: false,
});

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  variable: "--font-be-vietnam",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: siteUrlObject,
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "xăm chân mày Cần Thơ",
    "tiệm xăm chân mày Cần Thơ",
    "chân mày Thái Lan",
    "xăm chân mày phong cách Thái Lan",
    "Maya Thai",
    "Maya Thai Cần Thơ",
    "chân mày nam",
    "chân mày nữ",
    "đo vẽ chân mày",
    "chân mày diện tướng",
    "phun môi nano Cần Thơ",
    "xăm lông mày Cần Thơ",
    "tư vấn chân mày miễn phí",
    "chân mày tỷ lệ vàng",
  ],
  alternates: {
    canonical: "/",
  },
  referrer: "origin-when-cross-origin",
  category: "beauty",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    url: "/",
    siteName,
    locale: "vi_VN",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: siteTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/opengraph-image"],
  },
};

export const viewport = {
  themeColor: "#421216",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${playfair.variable} ${beVietnam.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WPSB4H4S');`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WPSB4H4S"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
