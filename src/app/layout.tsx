import type { Metadata } from "next";
import { Playfair_Display, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  variable: "--font-be-vietnam",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maya Thai – Chân Mày Diện Tướng Phong Cách Thái Lan",
  description:
    "Maya Thai – Tiệm xăm chân mày cao cấp phong cách Thái Lan. Nghệ thuật đo vẽ chân mày chuẩn tướng diện, nâng tầm thần thái và vẻ đẹp trường tồn.",
  keywords: [
    "xăm chân mày",
    "chân mày Thái Lan",
    "Maya Thai",
    "chân mày nam",
    "chân mày nữ",
    "đo vẽ chân mày",
    "chân mày diện tướng",
  ],
  openGraph: {
    title: "Maya Thai – Chân Mày Diện Tướng Phong Cách Thái Lan",
    description:
      "Nghệ thuật xăm chân mày cao cấp phong cách Thái Lan tại Maya Thai.",
    type: "website",
  },
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
