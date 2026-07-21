import { ImageResponse } from "next/og";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";
export default function Icon() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 16, color: "white", background: "linear-gradient(135deg,#2563eb,#7c3aed)", fontWeight: 900, fontSize: 24 }}>KS</div>,
    size,
  );
}
