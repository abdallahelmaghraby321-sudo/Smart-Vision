import { useState, useEffect } from "react";

const mono = "'Courier New', Courier, monospace";

const css = `
  @keyframes fadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
  @keyframes timerBlink { 0%,100%{opacity:1} 50%{opacity:.7} }
  .node-box { transition: filter .25s; }
  .node-box:hover { filter: brightness(1.2); }
  .dash-row:hover td { border-top-color: rgba(255,255,255,.1) !important; }
  ::-webkit-scrollbar { width:4px; height:4px; }
  ::-webkit-scrollbar-thumb { background:rgba(34,211,238,.3); border-radius:2px; }
`;

// ─── Icons ────────────────────────────────────────────────────────────────────

const IconBox = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
  </svg>
);

const IconStar = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
  </svg>
);

const IconBuilding = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
  </svg>
);

const IconGrid = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
  </svg>
);

const IconCheck = () => (
  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
    <path
      d="M2 6l3 3 5-5"
      stroke="#22d3ee"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

const NODES = [
  { label: "PRODUCT", color: "cyan", Icon: IconBox },
  { label: "LOCATIONS", color: "purple", Icon: IconStar },
  { label: "STAND", color: "purple", Icon: IconBuilding },
  { label: "SECTIONS", color: "purple", Icon: IconGrid },
];

const ROWS = [
  {
    id: "SV-ALPHA-01",
    stand: "ST-004",
    section: "SEC-09",
    qty: "1,240",
    status: "STABLE",
  },
  {
    id: "SV-BETA-44",
    stand: "ST-112",
    section: "SEC-01",
    qty: "840",
    status: "PICKING",
  },
  {
    id: "SV-GAMMA-12",
    stand: "ST-088",
    section: "SEC-22",
    qty: "3,120",
    status: "STABLE",
  },
];

const BULLETS = [
  "6-Axis Degrees of Freedom",
  "Dynamic Load Balancing",
  "Collision Prediction Neural Net",
];

// ─── Small Components ─────────────────────────────────────────────────────────

function FlowNode({ label, color, Icon, delay }) {
  const isCyan = color === "cyan";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 10,
        animation: `fadeUp .6s ease ${delay}s both`,
      }}
    >
      <div
        className="node-box"
        style={{
          width: 52,
          height: 52,
          borderRadius: 10,
          background: "#0d1219",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: isCyan
            ? "1px solid rgba(34,211,238,.75)"
            : "1px solid rgba(167,139,250,.6)",
          boxShadow: isCyan
            ? "0 0 16px rgba(34,211,238,.35), inset 0 0 10px rgba(34,211,238,.07)"
            : "0 0 16px rgba(167,139,250,.28), inset 0 0 10px rgba(167,139,250,.06)",
        }}
      >
        <span
          style={{
            color: isCyan ? "#22d3ee" : "#a78bfa",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            filter: isCyan
              ? "drop-shadow(0 0 5px rgba(34,211,238,.9))"
              : "drop-shadow(0 0 5px rgba(167,139,250,.9))",
          }}
        >
          <Icon />
        </span>
      </div>
      <span
        style={{
          fontSize: 9.5,
          fontWeight: 700,
          letterSpacing: "0.2em",
          color: "rgba(180,190,210,.6)",
          fontFamily: mono,
        }}
      >
        {label}
      </span>
    </div>
  );
}

function Connector() {
  return (
    <div
      style={{
        flex: 1,
        height: 1,
        position: "relative",
        minWidth: 24,
        background:
          "linear-gradient(90deg,rgba(34,211,238,.55),rgba(167,139,250,.55))",
        boxShadow: "0 0 6px rgba(34,211,238,.3)",
        marginBottom: 24,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 5,
          height: 5,
          borderRadius: "50%",
          background: "rgba(167,139,250,.9)",
          boxShadow: "0 0 8px rgba(167,139,250,.9)",
        }}
      />
    </div>
  );
}

function StatusBadge({ status }) {
  const stable = status === "STABLE";
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2px 8px",
        borderRadius: 4,
        fontSize: 9.5,
        fontWeight: 700,
        letterSpacing: "0.14em",
        fontFamily: mono,
        color: stable ? "#4ade80" : "#38bdf8",
        background: stable ? "rgba(74,222,128,.08)" : "rgba(56,189,248,.08)",
        border: stable
          ? "1px solid rgba(74,222,128,.4)"
          : "1px solid rgba(56,189,248,.4)",
        boxShadow: stable
          ? "0 0 8px rgba(74,222,128,.22)"
          : "0 0 8px rgba(56,189,248,.22)",
      }}
    >
      {status}
    </span>
  );
}

function UptimeBar() {
  const states = ["dim", "dim", "on", "on", "on", "on", "off", "off"];
  const bg = {
    dim: "rgba(100,116,139,.45)",
    on: "rgba(34,211,238,.88)",
    off: "rgba(30,40,55,.8)",
  };
  const glow = { on: "0 0 8px rgba(34,211,238,.48)" };
  return (
    <div style={{ display: "flex", gap: 5, marginTop: 8 }}>
      {states.map((s, i) => (
        <div
          key={i}
          style={{
            width: 26,
            height: 20,
            borderRadius: 3,
            background: bg[s],
            boxShadow: glow[s] || "none",
          }}
        />
      ))}
    </div>
  );
}

// ─── Sections ─────────────────────────────────────────────────────────────────

function SectionOne() {
  return (
    <section
      id="Dashbord"
      style={{
        padding: "52px 0 40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 40,
      }}
    >
      <h2
        style={{
          fontSize: 22,
          fontWeight: 700,
          color: "#e2e8f0",
          textAlign: "center",
          letterSpacing: ".06em",
          margin: 0,
          fontFamily: mono,
          animation: "fadeUp .6s ease both",
        }}
      >
        Hierarchical Data
        <span
          style={{
            background: "linear-gradient(90deg,#22d3ee,#a78bfa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            margin: "3px",
          }}
        >
          Architecture
        </span>
      </h2>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          maxWidth: 560,
          padding: "0 12px",
        }}
      >
        {NODES.map((node, i) => (
          <div
            key={node.label}
            style={{
              display: "flex",
              alignItems: "center",
              flex: i < NODES.length - 1 ? 1 : "0 0 auto",
            }}
          >
            <FlowNode {...node} delay={i * 0.08} />
            {i < NODES.length - 1 && <Connector />}
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionTwo() {
  const [time, setTime] = useState({ h: 4, m: 32, s: 16 });
  useEffect(() => {
    const id = setInterval(
      () =>
        setTime((t) => {
          let { h, m, s } = t;
          s++;
          if (s >= 60) {
            s = 0;
            m++;
          }
          if (m >= 60) {
            m = 0;
            h++;
          }
          return { h, m, s };
        }),
      1000,
    );
    return () => clearInterval(id);
  }, []);
  const pad = (n) => String(n).padStart(2, "0");
  const timerStr = `${pad(time.h)}:${pad(time.m)}:${pad(time.s)}`;

  return (
    <section style={{ animation: "fadeUp .7s ease .15s both" }}>
      <div
        style={{
          background: "rgba(255,255,255,.04)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(255,255,255,.08)",
          borderRadius: 18,
          boxShadow: "0 8px 32px rgba(0,0,0,.45)",
          padding: "28px 32px",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 12,
            flexWrap: "wrap",
            marginBottom: 28,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: "#e2e8f0",
                fontFamily: mono,
                marginBottom: 4,
              }}
            >
              Live Controller Interface
            </div>
            <div
              style={{
                fontSize: 11,
                color: "rgba(150,165,185,.55)",
                fontFamily: mono,
              }}
            >
              Managing 42,000+ units across Zone A-12.
            </div>
          </div>
          <div
            style={{
              padding: "5px 12px",
              borderRadius: 6,
              fontSize: 11,
              fontFamily: mono,
              background: "rgba(255,255,255,.05)",
              border: "1px solid rgba(255,255,255,.1)",
              color: "rgba(200,215,235,.8)",
              whiteSpace: "nowrap",
              animation: "timerBlink 2s ease-in-out infinite",
            }}
          >
            Active Session: {timerStr}
          </div>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 20,
            paddingBottom: 24,
            borderBottom: "1px solid rgba(255,255,255,.05)",
            marginBottom: 24,
          }}
        >
          {/* Volume */}
          <div>
            <div
              style={{
                fontSize: 9.5,
                textTransform: "uppercase",
                letterSpacing: ".18em",
                color: "rgba(150,165,185,.5)",
                fontFamily: mono,
                marginBottom: 6,
              }}
            >
              Total Volume
            </div>
            <div
              style={{
                fontSize: 34,
                fontWeight: 700,
                color: "#f0f4ff",
                fontFamily: mono,
                textShadow: "0 0 18px rgba(34,211,238,.22)",
                lineHeight: 1,
              }}
            >
              894k
            </div>
            <div
              style={{
                height: 2,
                width: 56,
                borderRadius: 1,
                marginTop: 8,
                background: "linear-gradient(90deg,#22d3ee,transparent)",
              }}
            />
          </div>
          {/* Speed */}
          <div>
            <div
              style={{
                fontSize: 9.5,
                textTransform: "uppercase",
                letterSpacing: ".18em",
                color: "rgba(150,165,185,.5)",
                fontFamily: mono,
                marginBottom: 6,
              }}
            >
              Scanning Speed
            </div>
            <div
              style={{
                fontSize: 34,
                fontWeight: 700,
                color: "#f0f4ff",
                fontFamily: mono,
                textShadow: "0 0 18px rgba(167,139,250,.28)",
                lineHeight: 1,
              }}
            >
              12ms
            </div>
            <div
              style={{
                height: 2,
                width: 56,
                borderRadius: 1,
                marginTop: 8,
                background: "linear-gradient(90deg,#a78bfa,transparent)",
              }}
            />
          </div>
          {/* Uptime */}
          <div>
            <div
              style={{
                fontSize: 9.5,
                textTransform: "uppercase",
                letterSpacing: ".18em",
                color: "rgba(150,165,185,.5)",
                fontFamily: mono,
                marginBottom: 6,
              }}
            >
              Robotic Uptime
            </div>
            <UptimeBar />
          </div>
        </div>

        {/* Table */}
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              minWidth: 440,
              borderCollapse: "separate",
              borderSpacing: "0 1px",
              fontFamily: mono,
            }}
          >
            <thead>
              <tr>
                {["Product ID", "Stand", "Section", "Qty", "Status"].map(
                  (col, i) => (
                    <th
                      key={col}
                      style={{
                        textAlign: i === 4 ? "right" : "left",
                        paddingBottom: 10,
                        paddingRight: i < 4 ? 16 : 0,
                        fontSize: 9.5,
                        fontWeight: 600,
                        letterSpacing: ".18em",
                        textTransform: "uppercase",
                        color: "rgba(150,165,185,.48)",
                      }}
                    >
                      {col}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.id} className="dash-row">
                  <td
                    style={{
                      padding: "12px 16px 12px 0",
                      fontSize: 12.5,
                      color: "rgba(34,211,238,.92)",
                      borderTop: "1px solid rgba(255,255,255,.04)",
                    }}
                  >
                    {row.id}
                  </td>
                  {[row.stand, row.section, row.qty].map((v, i) => (
                    <td
                      key={i}
                      style={{
                        padding: "12px 16px 12px 0",
                        fontSize: 12.5,
                        color: "rgba(180,195,220,.75)",
                        borderTop: "1px solid rgba(255,255,255,.04)",
                      }}
                    >
                      {v}
                    </td>
                  ))}
                  <td
                    style={{
                      padding: "12px 0",
                      textAlign: "right",
                      borderTop: "1px solid rgba(255,255,255,.04)",
                    }}
                  >
                    <StatusBadge status={row.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function SectionThree() {
  return (
    <section
      style={{ padding: "48px 0 0", animation: "fadeUp .7s ease .3s both" }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 52,
          alignItems: "center",
        }}
      >
        {/* Left */}
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <h2
            style={{
              fontSize: 40,
              fontWeight: 900,
              lineHeight: 1.15,
              margin: 0,
              fontFamily: mono,
            }}
          >
            <span style={{ color: "#e2e8f0" }}>Kinetic </span>
            <span
              style={{
                background: "linear-gradient(90deg,#22d3ee,#a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Automation.
            </span>
          </h2>
          <p
            style={{
              fontSize: 12.5,
              color: "rgba(150,165,185,.68)",
              lineHeight: 1.85,
              margin: 0,
              fontFamily: mono,
            }}
          >
            Our proprietary robotic controller interface allows for
            sub-millimeter precision in item retrieval. Fully integrated with
            our computer vision stack for obstacle avoidance and dynamic
            pathing.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
            {BULLETS.map((text) => (
              <div
                key={text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  fontSize: 12.5,
                  color: "rgba(180,195,220,.8)",
                  fontFamily: mono,
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(34,211,238,.1)",
                    border: "1px solid rgba(34,211,238,.4)",
                    boxShadow: "0 0 7px rgba(34,211,238,.28)",
                  }}
                >
                  <IconCheck />
                </span>
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div
          style={{
            borderRadius: 18,
            overflow: "hidden",
            border: "1px solid rgba(34,211,238,.22)",
            boxShadow:
              "0 0 36px rgba(34,211,238,.1), 0 0 70px rgba(167,139,250,.07), 0 20px 50px rgba(0,0,0,.5)",
          }}
        >
          <img
            src="/src/assets/arm.jpeg"
            alt="arm"
            style={{
              padding :0 ,
              width: "100%",
              height: 260,
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      </div>
    </section>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────

export default function WarehouseDashboard() {
  return (
    <div
      style={{ background: "#0b0f14", minHeight: "100vh", fontFamily: mono }}
    >
      <style>{css}</style>

      {/* Ambient glow */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          background: `radial-gradient(ellipse 80% 50% at 50% -10%,
          rgba(34,211,238,.05) 0%, transparent 60%),
          radial-gradient(ellipse 60% 40% at 80% 110%,
          rgba(167,139,250,.05) 0%, transparent 60%)`,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 860,
          margin: "0 auto",
          padding: "0 24px 72px",
        }}
      >
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </div>
    </div>
  );
}
