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
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "192 Trần Hưng Đạo",
      addressLocality: "Cần Thơ",
      addressRegion: "Ninh Kiều",
      addressCountry: "VN",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/mayathaicantho",
      "https://www.youtube.com/@ThaiMaya192",
      "https://zalo.me/0838580001",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "5000",
      bestRating: "5",
      worstRating: "1",
    },
    areaServed: {
      "@type": "City",
      name: "Cần Thơ",
    },
    slogan: "Chân Mày Chuẩn Tướng - Vẻ Đẹp Trường Tồn",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Maya Thai cung cấp những dịch vụ gì?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Maya Thai chuyên xăm chân mày phong cách Thái Lan cho nam và nữ, phun môi nano Thái, đo vẽ chân mày theo tỷ lệ vàng và tư vấn diện tướng miễn phí.",
        },
      },
      {
        "@type": "Question",
        name: "Maya Thai ở đâu tại Cần Thơ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Maya Thai tọa lạc tại 192 Trần Hưng Đạo, phường Thới Bình, quận Ninh Kiều, thành phố Cần Thơ. Mở cửa từ 08:00 đến 20:00 tất cả các ngày trong tuần.",
        },
      },
      {
        "@type": "Question",
        name: "Giờ làm việc của Maya Thai là bao nhiêu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Maya Thai phục vụ từ 08:00 đến 20:00, từ Thứ 2 đến Chủ Nhật. Bạn có thể đặt lịch trước qua số điện thoại 0838 580 001.",
        },
      },
      {
        "@type": "Question",
        name: "Tư vấn chân mày tại Maya Thai có mất phí không?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dịch vụ tư vấn thiết kế chân mày theo diện tướng Thái Lan tại Maya Thai hoàn toàn miễn phí. Chuyên gia sẽ đo vẽ theo tỷ lệ vàng khuôn mặt riêng của bạn.",
        },
      },
    ],
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
