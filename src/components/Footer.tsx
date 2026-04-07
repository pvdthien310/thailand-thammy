import Image from "next/image";
import { logos } from "@/data/images";

const quickLinks = [
  { label: "Giới Thiệu", href: "#gioi-thieu" },
  { label: "Dịch Vụ", href: "#dich-vu" },
  { label: "Kết Quả", href: "#ket-qua" },
  { label: "Nghệ Sĩ", href: "#nghe-si" },
  { label: "Không Gian", href: "#khong-gian" },
  { label: "Liên Hệ", href: "#lien-he" },
];

const actions = [
  {
    title: "Call Hotline",
    iconSrc: "/images/phone.webp",
    href: "tel:0838580001",
  },
  {
    title: "Zalo",
    iconSrc: "/images/zalo.webp",
    href: "https://zalo.me/0838580001",
  },
  {
    title: "Messenger",
    iconSrc: "/images/messenger.webp",
    href: "https://m.me/mayathaicantho",
  },
];

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-primary/10">
      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 shrink-0">
                <Image
                  src={logos.logo2}
                  alt="Maya Thai"
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
              <div>
                <p className="font-heading text-primary font-bold text-xl">
                  Maya Thai
                </p>
                <p className="font-body text-white/40 text-xs">
                  Chân Mày Diện Tướng Thái Lan
                </p>
              </div>
            </div>
            <p className="font-body text-white/50 text-sm leading-relaxed max-w-sm">
              Nghệ thuật xăm chân mày cao cấp phong cách Thái Lan — nơi vẻ đẹp
              gặp gỡ tinh hoa văn hóa, nâng tầm thần thái từng người.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading text-primary font-semibold text-base mb-4">
              Liên Kết Nhanh
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-white/50 text-sm hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-primary font-semibold text-base mb-4">
              Liên Hệ
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-primary text-xs mt-1">📍</span>
                <span className="font-body text-white/50 text-sm leading-relaxed">
                  192 Trần Hưng Đạo, phường Thới Bình, quận Ninh Kiều, thành phố Cần Thơ
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary text-xs">📞</span>
                <a
                  href="tel:0838580001"
                  className="font-body text-white/50 text-sm hover:text-primary transition-colors"
                >
                  0838 580 001
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary text-xs">✉️</span>
                <a
                  href="mailto:chanmaymayathai@gmail.com"
                  className="font-body text-white/50 text-sm hover:text-primary transition-colors"
                >
                  chanmaymayathai@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary text-xs">🕐</span>
                <span className="font-body text-white/50 text-sm">
                  08:00 – 20:00 hàng ngày
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-white/30 text-xs text-center sm:text-left">
            © 2025 Maya Thai. Tất cả quyền được bảo lưu.
          </p>
          <p className="font-body text-white/20 text-xs">
            Nghệ thuật xăm chân mày cao cấp phong cách Thái Lan
          </p>
        </div>
      </div>

      <div className="fixed flex flex-col bottom-4 gap-4 left-4">
        {actions.map((action) => (
          <a
            className="animate-zoom"
            href={action.href}
            target="_blank"
            key={action.title}
          >
            <Image
              key={action.title}
              src={action.iconSrc}
              alt={action.title}
              width={40}
              height={40}
            />
          </a>
        ))}
      </div>
    </footer>
  );
}
