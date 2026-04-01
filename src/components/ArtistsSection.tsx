"use client";

import Image from "next/image";
import { useState } from "react";
import { ngheSi } from "@/data/images";

export default function ArtistsSection() {
  const [activeArtist, setActiveArtist] = useState(ngheSi[0].name);

  const artist = ngheSi.find((a) => a.name === activeArtist) ?? ngheSi[0];

  return (
    <section id="nghe-si" className="bg-secondary py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="section-ornament mb-3 text-xs tracking-widest">NGHỆ SĨ</div>
          <h2 className="font-heading text-primary text-3xl sm:text-4xl font-bold mb-4">
            Nghệ Sĩ Tin Dùng Maya Thai
          </h2>
          <p className="font-body text-white/60 max-w-xl mx-auto text-base leading-relaxed">
            Những nghệ sĩ, diễn viên nổi tiếng đã lựa chọn Maya Thai để hoàn thiện
            vẻ đẹp và phong thái sân khấu.
          </p>
        </div>

        {/* Artist name pills */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {ngheSi.map((a) => (
            <button
              key={a.name}
              onClick={() => setActiveArtist(a.name)}
              className={`px-5 py-2 rounded-full font-body text-sm font-medium transition-all duration-200 ${
                activeArtist === a.name
                  ? "bg-primary text-secondary shadow-lg shadow-primary/20"
                  : "border border-primary/30 text-primary/70 hover:border-primary hover:text-primary"
              }`}
            >
              {a.name}
            </button>
          ))}
        </div>

        {/* Active artist gallery */}
        <div className="space-y-4">
          <h3 className="font-heading text-white text-xl text-center">
            {artist.name}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {artist.images.map((img, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-xl overflow-hidden img-hover-zoom gold-border"
              >
                <Image
                  src={img}
                  alt={`${artist.name} ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  placeholder="blur"
                />
              </div>
            ))}
          </div>
        </div>

        {/* All artists overview grid */}
        <div className="mt-14 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {ngheSi.map((a) => (
            <button
              key={a.name}
              onClick={() => setActiveArtist(a.name)}
              className={`group relative aspect-square rounded-xl overflow-hidden img-hover-zoom cursor-pointer ${
                activeArtist === a.name ? "ring-2 ring-primary ring-offset-2 ring-offset-secondary" : ""
              }`}
            >
              <Image
                src={a.images[0]}
                alt={a.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 33vw, 14vw"
                placeholder="blur"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-2 text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-body text-primary text-xs font-medium truncate">
                  {a.name}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
