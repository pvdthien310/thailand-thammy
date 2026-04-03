export const siteName = "Maya Thai";

export const siteTitle = "Maya Thai | Chân Mày Diện Tướng Phong Cách Thái Lan";

export const siteDescription =
  "Maya Thai là tiệm xăm chân mày cao cấp phong cách Thái Lan, chuyên đo vẽ chân mày, chăm sóc dáng mày và tôn lên thần thái cho cả nam và nữ.";

export const siteLocale = "vi_VN";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "http://localhost:3000";

export const siteUrlObject = new URL(siteUrl);
