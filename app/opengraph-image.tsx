import { ImageResponse } from "next/og";

export const alt =
  "Tasnim Munawar Rafee — Full-Stack Software Engineer portfolio";
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
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f5f1e8",
          color: "#142a3a",
          padding: "62px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "2px solid #c9a963",
            paddingBottom: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: "0.22em",
            }}
          >
            RAFEE / PORTFOLIO
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#5d6a70",
              fontSize: 21,
              letterSpacing: "0.05em",
            }}
          >
            DHAKA, BANGLADESH
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "64px",
          }}
        >
          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                color: "#9b7830",
                fontSize: 23,
                fontWeight: 700,
                letterSpacing: "0.18em",
                marginBottom: "22px",
              }}
            >
              FULL-STACK SOFTWARE ENGINEER
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 70,
                fontWeight: 800,
                letterSpacing: "-0.045em",
                lineHeight: 1.04,
              }}
            >
              Tasnim Munawar Rafee
            </div>
            <div
              style={{
                display: "flex",
                color: "#4e6069",
                fontSize: 26,
                lineHeight: 1.45,
                marginTop: "26px",
              }}
            >
              Web, desktop, and database-driven software with practical,
              maintainable engineering.
            </div>
          </div>

          <div
            style={{
              width: 228,
              height: 228,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid #c9a963",
              background: "#142a3a",
              color: "#f5f1e8",
              fontSize: 61,
              fontWeight: 800,
              letterSpacing: "0.08em",
            }}
          >
            TMR
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #b9b2a2",
            paddingTop: "23px",
            color: "#53636a",
            fontSize: 21,
          }}
        >
          <div style={{ display: "flex", letterSpacing: "0.04em" }}>
            NEXT.JS · TYPESCRIPT · .NET · ORACLE
          </div>
          <div style={{ display: "flex", fontWeight: 700 }}>
            www.rafeeportfolio.com
          </div>
        </div>
      </div>
    ),
    size,  
  );
}
