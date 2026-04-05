"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

const contactInfo = [
  {
    icon: "📍",
    label: "Địa Chỉ",
    value: "192 Trần Hưng Đạo, phường Thới Bình, quận Ninh Kiều, thành phố Cần Thơ",
  },
  {
    icon: "📞",
    label: "Điện Thoại",
    value: "0838 580 001",
    href: "tel:0987654321",
  },
  {
    icon: "✉️",
    label: "Email",
    value: "chanmaymayathai@gmail.com",
    href: "mailto:chanmaymayathai@gmail.com",
  },
  {
    icon: "🕐",
    label: "Giờ Làm Việc",
    value: "08:00 – 20:00 (Thứ 2 – Chủ Nhật)",
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Gửi thất bại");

      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMsg("Có lỗi xảy ra. Vui lòng thử lại hoặc liên hệ trực tiếp.");
    }
  };

  const inputClass =
    "w-full bg-white/5 border border-primary/20 rounded-xl px-4 py-3 font-body text-white placeholder-white/30 focus:outline-none focus:border-primary/60 focus:bg-white/10 transition-all duration-200 text-sm";

  return (
    <section id="lien-he" className="bg-secondary py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="section-ornament mb-3 text-xs tracking-widest">LIÊN HỆ</div>
          <h2 className="font-heading text-primary text-3xl sm:text-4xl font-bold mb-4">
            Đặt Lịch Ngay Hôm Nay
          </h2>
          <p className="font-body text-white/60 max-w-xl mx-auto text-base leading-relaxed">
            Điền thông tin bên dưới — chúng tôi sẽ liên hệ xác nhận lịch hẹn
            trong thời gian sớm nhất.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <div className="space-y-6">
            <h3 className="font-heading text-white text-xl font-semibold mb-6">
              Thông Tin Liên Hệ
            </h3>
            {contactInfo.map((info) => (
              <div key={info.label} className="flex items-start gap-4">
                <span className="text-2xl mt-0.5">{info.icon}</span>
                <div>
                  <p className="font-body text-primary/70 text-xs tracking-widest uppercase mb-1">
                    {info.label}
                  </p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="font-body text-white text-sm hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="font-body text-white/80 text-sm">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social links */}
            <div className="pt-6 border-t border-primary/20">
              <p className="font-body text-primary/70 text-xs tracking-widest uppercase mb-3">
                Kết Nối
              </p>
              <div className="flex gap-3">
                {[
                  { label: "Facebook", href: "https://www.facebook.com/mayathaicantho?locale=vi_VN" },
                  { label: "Youtube", href: "https://www.youtube.com/@Th%C3%A1iMaya192" },
                  { label: "Zalo", href: "https://zalo.me/0838580001" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="px-4 py-2 border border-primary/30 text-primary/80 font-body text-xs rounded-full hover:border-primary hover:text-primary transition-colors duration-200"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            {status === "success" ? (
              <div className="bg-primary/10 border border-primary/30 rounded-2xl p-8 text-center">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="font-heading text-primary text-xl font-semibold mb-2">
                  Đặt Lịch Thành Công!
                </h3>
                <p className="font-body text-white/70 text-sm leading-relaxed">
                  Cảm ơn bạn đã liên hệ. Chúng tôi sẽ gọi xác nhận lịch hẹn trong vòng 24 giờ.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 px-6 py-2.5 bg-primary text-secondary font-body font-semibold text-sm rounded-full hover:bg-primary/90 transition-colors"
                >
                  Đặt Lịch Khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-white/60 text-xs tracking-wide uppercase mb-1.5 block">
                      Họ & Tên *
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Nguyễn Văn A"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="font-body text-white/60 text-xs tracking-wide uppercase mb-1.5 block">
                      Số Điện Thoại *
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="0838 580 001"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="font-body text-white/60 text-xs tracking-wide uppercase mb-1.5 block">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="font-body text-white/60 text-xs tracking-wide uppercase mb-1.5 block">
                    Tin Nhắn / Dịch Vụ Muốn Đặt
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Bạn muốn đặt lịch dịch vụ gì? Thời gian nào phù hợp?"
                    className={inputClass + " resize-none"}
                  />
                </div>

                {status === "error" && (
                  <p className="font-body text-red-400 text-sm">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3.5 bg-primary text-secondary font-body font-bold text-base rounded-xl hover:bg-primary/90 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Đang Gửi..." : "Đặt Lịch Ngay ✦"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
