import dynamic from "next/dynamic";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PostersSection from "@/components/PostersSection";
import SalonSection from "@/components/SalonSection";
import CustomerSection from "@/components/CustomerSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

import { siteDescription, siteName, siteUrl } from "@/lib/site";

const GallerySection = dynamic(() => import("@/components/GallerySection"));
const ArtistsSection = dynamic(() => import("@/components/ArtistsSection"));
const RandomBooking = dynamic(() => import("@/components/RandomBooking"));

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    inLanguage: "vi-VN",
    description: siteDescription,
  },
  {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: siteName,
    url: siteUrl,
    description: siteDescription,
    image: `${siteUrl}/opengraph-image`,
    telephone: "+84-838-580-001",
    email: "chanmaymayathai@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "192 Trần Hưng Đạo, phường Thới Bình, quận Ninh Kiều, thành phố Cần Thơ",
      addressCountry: "VN",
    },
    areaServed: "VN",
    slogan: "Chân Mày Chuẩn Tướng - Vẻ Đẹp Trường Tồn",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <div className="content-auto-section">
          <PostersSection />
        </div>
        <div className="content-auto-section">
          <GallerySection />
        </div>
        <div className="content-auto-section">
          <ArtistsSection />
        </div>
        <div className="content-auto-section">
          <SalonSection />
        </div>
        <div className="content-auto-section">
          <CustomerSection />
        </div>
        <div className="content-auto-section">
          <TestimonialsSection />
        </div>
        <div className="content-auto-section">
          <ContactSection />
        </div>
        <RandomBooking />
      </main>
      <Footer />
    </>
  );
}
