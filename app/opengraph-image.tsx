import { ImageResponse } from "next/og";

export const alt = "Mahmudul Hasan Khan — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 100px",
          background: "linear-gradient(135deg, #000e04 0%, #05160a 100%)",
          color: "#e8dcc0",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#d9c49c",
            marginBottom: 24,
          }}
        >
          Portfolio
        </div>
        <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.1 }}>
          Mahmudul Hasan Khan
        </div>
        <div
          style={{
            fontSize: 34,
            marginTop: 20,
            color: "#c0c0c0",
            fontWeight: 500,
          }}
        >
          Full-Stack Developer — Next.js · React · Node.js · TypeScript
        </div>
      </div>
    ),
    { ...size },
  );
}
