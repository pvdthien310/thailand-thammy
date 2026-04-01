"use client";

import Image from "next/image";
import { logos } from "@/data/images";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Giới Thiệu", href: "#gioi-thieu" },
  { label: "Dịch Vụ", href: "#dich-vu" },
  { label: "Kết Quả", href: "#ket-qua" },
  { label: "Nghệ Sĩ", href: "#nghe-si" },
  { label: "Không Gian", href: "#khong-gian" },
  { label: "Liên Hệ", href: "#lien-he" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-secondary/95 shadow-lg shadow-black/30 backdrop-blur-sm py-2"
          : "bg-gradient-to-b from-dark/70 to-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 shrink-0">
            <Image
              src={logos.logo1}
              alt="Maya Thai Logo"
              fill
              className="object-contain"
            />
          </div>
          <span
            className="font-heading text-primary font-semibold text-xl leading-tight tracking-wide"
          >
            Maya Thai
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-primary/80 hover:text-primary transition-colors duration-200 tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#lien-he"
            className="ml-2 px-5 py-2 bg-primary text-secondary font-body font-semibold text-sm rounded-full hover:bg-primary/90 transition-colors duration-200"
          >
            Đặt Lịch
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Mở menu"
        >
          <span
            className={`block w-6 h-0.5 bg-primary transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-primary transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-primary transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-secondary/98 backdrop-blur-sm border-t border-primary/20 px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-body text-primary/80 hover:text-primary text-sm tracking-wide uppercase py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#lien-he"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-5 py-2 bg-primary text-secondary font-semibold text-sm rounded-full text-center"
          >
            Đặt Lịch Ngay
          </a>
        </nav>
      )}
    </header>
  );
}
