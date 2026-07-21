import { ImageResponse } from "next/og";

export const alt = "Kwabena Owusu Soadwa — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", padding: 72, color: "white", background: "linear-gradient(135deg,#020617 0%,#172554 55%,#4c1d95 100%)", fontFamily: "Arial", position: "relative" }}>
      <div style={{ position: "absolute", width: 420, height: 420, borderRadius: 999, background: "rgba(37,99,235,.3)", filter: "blur(90px)", top: -120, right: -60 }} />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 72, height: 72, borderRadius: 20, background: "white", color: "#0f172a", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 28 }}>KS</div>
          <div style={{ fontSize: 26, color: "#bfdbfe", letterSpacing: 3 }}>SOFTWARE ENGINEER</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, fontWeight: 900, lineHeight: 1.02, letterSpacing: -4 }}>Kwabena Owusu Soadwa</div>
          <div style={{ marginTop: 24, fontSize: 34, color: "#cbd5e1" }}>Full-Stack Developer · Accra, Ghana</div>
          <div style={{ marginTop: 20, fontSize: 24, color: "#93c5fd" }}>Python · Flask · JavaScript · SQL · Next.js</div>
        </div>
      </div>
    </div>,
    size,
  );
}
