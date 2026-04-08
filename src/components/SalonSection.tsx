import Image from "next/image";
import { ngoaiCanh } from "@/data/images";

export default function SalonSection() {
  const featured = ngoaiCanh.slice(0, 9);
  const rest = ngoaiCanh.slice(9, 10);

  return (
    <section id="khong-gian" className="bg-cream py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="section-ornament mb-3 text-xs tracking-widest">KHÔNG GIAN</div>
          <h2 className="font-heading text-secondary text-3xl sm:text-4xl font-bold mb-4">
            Không Gian Maya Thai
          </h2>
          <p className="font-body text-dark/60 max-w-xl mx-auto text-base leading-relaxed">
            Không gian sang trọng mang đậm tinh hoa Thái Lan — nơi bạn được thư giãn
            và trải nghiệm dịch vụ đẳng cấp.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-3">
          {/* Large feature image */}
          <div className="col-span-2 md:col-span-1 row-span-2 relative aspect-[4/5] md:aspect-auto md:h-full min-h-[300px] rounded-2xl overflow-hidden img-hover-zoom">
            <Image
              src={featured[0]}
              alt="Maya Thai không gian 1"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              placeholder="blur"
            />
          </div>
          {featured.slice(1, 5).map((img, i) => (
            <div
              key={i}
              className="relative aspect-square rounded-2xl overflow-hidden img-hover-zoom"
            >
              <Image
                src={img}
                alt={`Maya Thai không gian ${i + 2}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
                placeholder="blur"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {[...featured.slice(5), ...rest].map((img, i) => (
            <div
              key={i}
              className="relative aspect-square rounded-xl overflow-hidden img-hover-zoom"
            >
              <Image
                src={img}
                alt={`Maya Thai ngoại cảnh ${i + 6}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                placeholder="blur"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
