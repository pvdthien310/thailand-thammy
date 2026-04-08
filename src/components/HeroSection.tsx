import Image from "next/image";
import { covers } from "@/data/images";

export default function HeroSection() {
  return (
    <section className="relative bg-dark overflow-hidden">
      {/* Primary banner */}
      <div className="relative w-full pt-[calc(100vw*0.38)] sm:pt-[calc(100vw*0.33)] lg:pt-[35%] max-h-[100vh] overflow-hidden mt-16 md:mt-20">
        <Image
          src={covers[2]}
          alt="Maya Thai – Chân Mày Diện Tướng Thái Lan"
          fill
          preload
          className="object-cover object-center"
          sizes="1000vw"
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/20 via-transparent to-dark/60" />
      </div>

      {/* Tagline + CTA */}
      <div className="flex flex-col items-center text-center px-4 py-12 sm:py-16">
        <div className="section-ornament mb-4 text-sm">✦ MAYA THAI ✦</div>
        <h1 className="font-heading text-primary text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 max-w-3xl">
          Chân Mày Chuẩn Tướng
          <br />
          <span className="text-2xl sm:text-4xl lg:text-5xl font-medium text-white/90">
            Vẻ Đẹp Trường Tồn
          </span>
        </h1>
        <p className="font-body text-white/60 text-base sm:text-lg max-w-xl mb-8 leading-relaxed">
          Nghệ thuật xăm chân mày cao cấp phong cách Thái Lan — đo vẽ chuẩn
          tướng diện, tôn lên thần thái và khí chất riêng của từng người.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a
            href="#lien-he"
            className="px-8 py-3.5 bg-primary text-secondary font-body font-bold text-base rounded-full hover:bg-primary/90 transition-all duration-200 hover:scale-105 shadow-lg shadow-primary/20"
          >
            Đặt Lịch Ngay
          </a>
          <a
            href="#ket-qua"
            className="px-8 py-3.5 border border-primary/50 text-primary font-body font-medium text-base rounded-full hover:border-primary hover:bg-primary/10 transition-all duration-200"
          >
            Xem Kết Quả
          </a>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-3 gap-8 sm:gap-16">
          {[
            { value: "5000+", label: "Khách Hài Lòng" },
            { value: "10+", label: "Năm Kinh Nghiệm" },
            { value: "100%", label: "Cam Kết Chất Lượng" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-primary text-2xl sm:text-3xl font-bold">
                {stat.value}
              </div>
              <div className="font-body text-white/50 text-xs sm:text-sm mt-1 leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
