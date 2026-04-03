import Image from "next/image";
import { logos } from "@/data/images";

const highlights = [
  {
    icon: "✦",
    title: "Kỹ Thuật Thái Lan",
    desc: "Ứng dụng nghệ thuật xăm truyền thống Thái Lan với công nghệ hiện đại, mang đến đường nét hoàn hảo.",
  },
  {
    icon: "✦",
    title: "Đo Vẽ Chuẩn Tướng",
    desc: "Kỹ thuật đo vẽ theo tỷ lệ vàng khuôn mặt — cân đối, hài hòa với từng cá tính riêng.",
  },
  {
    icon: "✦",
    title: "An Toàn & Bền Màu",
    desc: "Mực xăm nhập khẩu cao cấp, dụng cụ vô trùng, đảm bảo an toàn tuyệt đối và màu bền đẹp.",
  },
  {
    icon: "✦",
    title: "Chuyên Gia Tư Vấn",
    desc: "Đội ngũ chuyên gia tư vấn tận tâm, giúp bạn chọn dáng mày phù hợp nhất với khuôn mặt.",
  },
];

export default function AboutSection() {
  return (
    <section id="gioi-thieu" className="bg-cream py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="section-ornament mb-3 text-xs tracking-widest">GIỚI THIỆU</div>
          <h2 className="font-heading text-secondary text-3xl sm:text-4xl font-bold mb-4">
            Về Maya Thai
          </h2>
          <p className="font-body text-dark/70 max-w-2xl mx-auto text-base leading-relaxed">
            Maya Thai là điểm đến thẩm mỹ cao cấp mang đậm tinh hoa nghệ thuật Thái Lan.
            Chúng tôi tin rằng mỗi đôi chân mày không chỉ là vẻ đẹp — mà còn là dấu ấn
            của khí chất và tướng diện.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Logo showcase */}
          <div className="flex flex-col items-center gap-6">
            <div className="relative w-56 h-56 sm:w-72 sm:h-72">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl" />
              <Image
                src={logos.logo1}
                alt="Maya Thai Logo"
                fill
                className="object-contain relative z-10"
                sizes="(max-width: 640px) 224px, 288px"
              />
            </div>
            <div className="text-center">
              <p className="font-heading text-secondary text-xl font-semibold italic">
                &ldquo;Chân Mày Chuẩn Tướng – Vẻ Đẹp Trường Tồn&rdquo;
              </p>
            </div>
          </div>

          {/* Story text */}
          <div className="space-y-5">
            <p className="font-body text-dark/80 leading-relaxed">
              Được thành lập với đam mê và khát vọng mang nghệ thuật thẩm mỹ Thái Lan
              đến với khách hàng Việt Nam, Maya Thai là nơi hội tụ của kỹ thuật điêu luyện
              và tâm huyết nghề.
            </p>
            <p className="font-body text-dark/80 leading-relaxed">
              Mỗi đường nét chân mày tại Maya Thai đều được thực hiện với sự tỉ mỉ,
              chuẩn xác cao — từ khâu tư vấn, đo vẽ thiết kế cho đến thực hiện,
              đảm bảo kết quả tự nhiên, phù hợp với tướng diện và cá tính từng khách.
            </p>
            <p className="font-body text-dark/80 leading-relaxed">
              Hơn 5.000 khách hàng, bao gồm nhiều nghệ sĩ nổi tiếng, đã tin tưởng
              và hài lòng với dịch vụ tại Maya Thai.
            </p>
            <a
              href="#lien-he"
              className="inline-block mt-2 px-6 py-2.5 bg-secondary text-primary font-body font-semibold text-sm rounded-full hover:bg-mid transition-colors duration-200"
            >
              Đặt Lịch Tư Vấn
            </a>
          </div>
        </div>

        {/* Highlights grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-secondary/10 rounded-2xl p-6 hover:border-primary/40 hover:shadow-md transition-all duration-300 group"
            >
              <div className="text-primary text-xl mb-3">{item.icon}</div>
              <h3 className="font-heading text-secondary font-semibold text-base mb-2">
                {item.title}
              </h3>
              <p className="font-body text-dark/60 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
