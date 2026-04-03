import { ImageResponse } from "next/og";

import { siteDescription, siteName } from "@/lib/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          padding: "64px",
          background:
            "linear-gradient(135deg, rgb(26, 6, 8) 0%, rgb(66, 18, 22) 55%, rgb(123, 33, 39) 100%)",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            border: "2px solid rgba(228, 200, 99, 0.45)",
            borderRadius: "28px",
            padding: "48px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 30,
              letterSpacing: 8,
              color: "rgb(228, 200, 99)",
            }}
          >
            MAYA THAI
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              maxWidth: "820px",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 68,
                lineHeight: 1.08,
                fontWeight: 700,
              }}
            >
              Chan May Chuan Tuong
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 34,
                lineHeight: 1.3,
                color: "rgba(255, 255, 255, 0.82)",
              }}
            >
              Ve dep truong ton theo phong cach Thai Lan
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: 24,
              color: "rgba(255, 255, 255, 0.72)",
            }}
          >
            <div style={{ display: "flex" }}>{siteName}</div>
            <div style={{ display: "flex", maxWidth: "520px", textAlign: "right" }}>
              {siteDescription}
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
