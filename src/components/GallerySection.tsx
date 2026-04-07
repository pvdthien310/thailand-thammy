"use client";

import Image from "next/image";
import { useState } from "react";
import { mayNu, mayNam, doVeChanMay } from "@/data/images";
import type { StaticImageData } from "next/image";

const tabs = [
  { id: "may-nu", label: "Chân Mày Maya Thái", images: mayNu },
  { id: "may-nam", label: "Chân Mày Nam Thái", images: mayNam },
  { id: "do-ve", label: "Tư Vấn Thiết Kế Chân Mày", images: doVeChanMay },
];

function ImageGrid({ images }: { images: StaticImageData[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      {images.map((img, i) => (
        <div
          key={i}
          className="relative aspect-[3/4] rounded-xl overflow-hidden img-hover-zoom gold-border"
        >
          <Image
            src={img}
            alt={`Kết quả ${i + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            placeholder="blur"
          />
        </div>
      ))}
    </div>
  );
}

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState("may-nu");

  const current = tabs.find((t) => t.id === activeTab)!;

  return (
    <section id="ket-qua" className="bg-cream py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="section-ornament mb-3 text-xs tracking-widest">KẾT QUẢ</div>
          <h2 className="font-heading text-secondary text-3xl sm:text-4xl font-bold mb-4">
            Thành Quả Thực Tế
          </h2>
          <p className="font-body text-dark/60 max-w-xl mx-auto text-base leading-relaxed">
            Hàng nghìn khách hàng đã trải nghiệm và hài lòng với kết quả tại Maya Thai.
          </p>
        </div>

        {/* Tab bar */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full font-body text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-secondary text-primary shadow-md"
                  : "bg-white border border-secondary/20 text-secondary/70 hover:border-secondary/50 hover:text-secondary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <ImageGrid images={current.images} />

        <div className="text-center mt-10">
          <a
            href="#lien-he"
            className="inline-block px-8 py-3 bg-secondary text-primary font-body font-semibold rounded-full hover:bg-mid transition-colors duration-200"
          >
            Đặt Lịch Để Có Kết Quả Như Trên
          </a>
        </div>
      </div>
    </section>
  );
}
