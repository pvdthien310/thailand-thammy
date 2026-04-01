import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PostersSection from "@/components/PostersSection";
import GallerySection from "@/components/GallerySection";
import ArtistsSection from "@/components/ArtistsSection";
import SalonSection from "@/components/SalonSection";
import CustomerSection from "@/components/CustomerSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PostersSection />
        <GallerySection />
        <ArtistsSection />
        <SalonSection />
        <CustomerSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
