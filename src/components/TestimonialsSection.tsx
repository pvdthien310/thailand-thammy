import Image from "next/image";

import { CUSTOMER_VOICES_DATA } from "@/data/booking";

export default function TestimonialsSection() {
  return (
    <section id="khach-hang-noi-gi" className="bg-cream py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="section-ornament mb-3 text-xs tracking-widest">
            KHÁCH HÀNG NÓI GÌ
          </div>
          <h2 className="font-body! text-secondary text-3xl sm:text-4xl font-bold mb-4">
            Cảm Nhận Sau Khi Trải Nghiệm
          </h2>
          <p className="font-body text-secondary/70 max-w-2xl mx-auto text-base leading-relaxed">
            Những chia sẻ thực tế từ khách hàng đã trải nghiệm dịch vụ tại Maya
            Thai và cảm nhận sự thay đổi rõ rệt về thần thái, diện mạo.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {CUSTOMER_VOICES_DATA.map((item) => (
            <article
              key={item.id}
              className="rounded-3xl border border-primary/25 bg-white p-6 sm:p-7 shadow-[0_18px_50px_rgba(66,18,22,0.08)]"
            >
              <div className="flex items-start gap-4">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded-full object-cover border border-primary/30"
                  placeholder="blur"
                />

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="font-body! text-secondary text-xl font-semibold">
                        {item.name}
                      </h3>
                      <p className="font-body text-secondary/55 text-sm">
                        Khách hàng đã trải nghiệm dịch vụ
                      </p>
                    </div>

                    <span className="font-body text-secondary/45 text-sm whitespace-nowrap">
                      {item.time}
                    </span>
                  </div>
                </div>
              </div>

              <p className="mt-5 font-body text-secondary/80 leading-7">
                &ldquo;{item.comment}&rdquo;
              </p>

              <div className="mt-5 flex items-center gap-4 border-t border-secondary/10 pt-4 font-body text-sm text-secondary/60">
                <span>Yêu thích: {item.likes}</span>
                <span>Bình luận: {item.replies.length}</span>
              </div>

              {item.replies.length > 0 ? (
                <div className="mt-5 space-y-3">
                  {item.replies.map((reply) => (
                    <div
                      key={reply.id}
                      className="rounded-2xl bg-secondary/5 px-4 py-4 border border-secondary/10"
                    >
                      <div className="flex items-start gap-3">
                        <Image
                          src={reply.avatar}
                          alt={reply.name}
                          width={44}
                          height={44}
                          className="h-11 w-11 rounded-full object-cover"
                        />

                        <div className="min-w-0 flex-1">
                          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                            <h4 className="font-body! text-secondary font-semibold">
                              {reply.name}
                            </h4>
                            <span className="font-body text-secondary/45 text-sm whitespace-nowrap">
                              {reply.time}
                            </span>
                          </div>

                          <p className="mt-2 font-body text-secondary/75 leading-6 text-sm">
                            {reply.comment}
                          </p>

                          <span className="mt-3 inline-block font-body text-xs text-secondary/50">
                            Yêu thích: {reply.likes}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
