import Image from "next/image";
import { doVeChanMay, hinhThietKe, mayNu, mayNam, moi } from "@/data/images";

const services = [
  {
    id: "may-nu",
    title: "Chân Mày Maya Thái",
    subtitle: "Thanh Tú · Nữ Tính · Tự Nhiên",
    desc: "Đường nét mềm mại, tinh tế theo chuẩn thẩm mỹ Thái Lan — tôn lên vẻ đẹp nữ tính và sự tự tin.",
    image: mayNu[0],
    href: "#ket-qua",
  },
  {
    id: "may-nam",
    title: "Chân Mày Nam Thái",
    subtitle: "Mạnh Mẽ · Lịch Lãm · Khí Chất",
    desc: "Dáng mày nam tính, rõ nét — tôn lên khí chất và phong thái đàn ông đích thực.",
    image: mayNam[0],
    href: "#ket-qua",
  },
  {
    id: "phun-moi",
    title: "Phun Môi Nano Thái ",
    subtitle: "Mạnh Mẽ · Lịch Lãm · Khí Chất",
    desc: "Dáng mày nam tính, rõ nét — tôn lên khí chất và phong thái đàn ông đích thực.",
    image: moi[0],
    href: "#ket-qua",
  },
  {
    id: "do-ve",
    title: "Tư Vấn Thiết Kế Chân Mày Theo Diện Tướng Thái Lan ( Miễn Phí )",
    subtitle: "Chuẩn Xác · Tỷ Lệ Vàng · Chuyên Nghiệp",
    desc: "Kỹ thuật đo vẽ theo tỷ lệ vàng khuôn mặt — thiết kế riêng cho từng người, đảm bảo cân đối hoàn hảo.",
    image: doVeChanMay[0],
    href: "#ket-qua",
  }
];

export default function ServicesSection() {
  return (
    <section id="dich-vu" className="bg-secondary py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="section-ornament mb-3 text-xs tracking-widest">
            DỊCH VỤ
          </div>
          <h2 className="font-heading text-primary text-3xl sm:text-4xl font-bold mb-4">
            Dịch Vụ Của Chúng Tôi
          </h2>
          <p className="font-body text-white/60 max-w-xl mx-auto text-base leading-relaxed">
            Mỗi dịch vụ tại Maya Thai đều được thực hiện bởi chuyên gia có tay nghề cao,
            ứng dụng kỹ thuật Thái Lan tiên tiến.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc) => (
            <a
              key={svc.id}
              href={svc.href}
              className="group block bg-dark/40 rounded-2xl overflow-hidden gold-border hover:border-primary/60 hover:bg-dark/60 transition-all duration-300"
            >
              <div className="relative aspect-[3/4] img-hover-zoom">
                <Image
                  src={svc.image}
                  alt={svc.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  placeholder="blur"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-body text-primary/80 text-xs tracking-widest uppercase mb-1">
                    {svc.subtitle}
                  </p>
                  <h3 className="font-heading text-white text-xl font-semibold">
                    {svc.title}
                  </h3>
                </div>
              </div>
              <div className="p-4">
                <p className="font-body text-white/60 text-sm leading-relaxed">
                  {svc.desc}
                </p>
                <span className="inline-block mt-3 text-primary text-xs font-body font-semibold tracking-wide group-hover:underline">
                  Xem thêm →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
