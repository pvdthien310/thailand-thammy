import Image from "next/image";
import { khachDong } from "@/data/images";

const marqueeImages = khachDong.slice(0, 10);
const featuredCustomers = khachDong.slice(0, 10);

export default function CustomerSection() {
  return (
    <section className="bg-dark py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="section-ornament mb-3 text-xs tracking-widest">KHÁCH ĐÔNG</div>
          <h2 className="font-heading text-primary text-3xl sm:text-4xl font-bold mb-4">
            Khách Hàng Tin Tưởng
          </h2>
          <p className="font-body text-white/50 max-w-xl mx-auto text-base leading-relaxed">
            Hàng nghìn lượt khách hàng đã đến và quay lại với Maya Thai.
            Sự tin tưởng của các bạn là nguồn động lực lớn nhất của chúng tôi.
          </p>
        </div>

        {/* Scrolling marquee row 1 */}
        <div className="relative mb-3 overflow-hidden">
          <div className="animate-marquee flex gap-3 w-max">
            {[...marqueeImages, ...marqueeImages].map((img, i) => (
              <div
                key={i}
                className="relative w-48 h-48 sm:w-56 sm:h-56 shrink-0 rounded-xl overflow-hidden img-hover-zoom gold-border"
              >
                <Image
                  src={img}
                  alt={`Khách hàng ${(i % 20) + 1}`}
                  fill
                  className="object-cover"
                  sizes="200px"
                  placeholder="blur"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Grid fallback + extras */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2 mt-4">
          {featuredCustomers.map((img, i) => (
            <div
              key={i}
              className="relative aspect-square rounded-lg overflow-hidden img-hover-zoom opacity-90 hover:opacity-100 transition-opacity"
            >
              <Image
                src={img}
                alt={`Khách đông ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 33vw, 20vw"
                placeholder="blur"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="font-body text-white/40 text-sm">
            Và còn rất nhiều khách hàng hài lòng khác...
          </p>
          <a
            href="#lien-he"
            className="inline-block mt-4 px-8 py-3 bg-primary text-secondary font-body font-bold rounded-full hover:bg-primary/90 transition-colors duration-200"
          >
            Trở Thành Khách Hàng Của Maya Thai
          </a>
        </div>
      </div>
    </section>
  );
}
