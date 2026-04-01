import Image from "next/image";
import { hinhThietKe } from "@/data/images";

export default function PostersSection() {
  return (
    <section className="bg-cream py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="section-ornament mb-3 text-xs tracking-widest">ƯU ĐÃI</div>
          <h2 className="font-heading text-secondary text-3xl sm:text-4xl font-bold mb-3">
            Hình Ảnh Nổi Bật
          </h2>
          <p className="font-body text-dark/60 max-w-xl mx-auto text-sm leading-relaxed">
            Những chương trình đặc biệt và thông điệp từ Maya Thai dành cho bạn.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
          {hinhThietKe.map((poster, i) => (
            <a
              key={i}
              href="#lien-he"
              className="group block relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-400 img-hover-zoom"
            >
              <Image
                src={poster}
                alt={`Maya Thai poster ${i + 1}`}
                className="w-full h-auto object-contain"
                sizes="(max-width: 640px) 100vw, 33vw"
                placeholder="blur"
              />
              <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/10 transition-colors duration-300 rounded-2xl" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
