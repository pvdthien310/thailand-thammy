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

const socials = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "Zalo", href: "#" },
  { label: "YouTube", href: "#" },
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
                />
              </div>
              <div>
                <p className="font-heading text-primary font-bold text-xl">Maya Thai</p>
                <p className="font-body text-white/40 text-xs">Chân Mày Diện Tướng Thái Lan</p>
              </div>
            </div>
            <p className="font-body text-white/50 text-sm leading-relaxed max-w-sm">
              Nghệ thuật xăm chân mày cao cấp phong cách Thái Lan — nơi vẻ đẹp gặp gỡ
              tinh hoa văn hóa, nâng tầm thần thái từng người.
            </p>
            <div className="flex gap-3 mt-5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="w-9 h-9 rounded-full border border-primary/25 flex items-center justify-center text-primary/60 text-xs font-body hover:border-primary hover:text-primary transition-colors duration-200"
                  aria-label={s.label}
                >
                  {s.label[0]}
                </a>
              ))}
            </div>
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
                  TP. Hồ Chí Minh
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary text-xs">📞</span>
                <a
                  href="tel:0987654321"
                  className="font-body text-white/50 text-sm hover:text-primary transition-colors"
                >
                  0987 654 321
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary text-xs">✉️</span>
                <a
                  href="mailto:mayathai@gmail.com"
                  className="font-body text-white/50 text-sm hover:text-primary transition-colors"
                >
                  mayathai@gmail.com
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
    </footer>
  );
}
