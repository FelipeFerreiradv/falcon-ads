"use client";

import type { CSSProperties } from "react";
import { useInView } from "@/lib/hooks";

const thesisStyles = {
  bullets: [
    "O visitante precisa entender rápido o que você faz.",
    "A página precisa transmitir confiança antes do primeiro contato.",
    "O site precisa conduzir para ação, não apenas existir.",
  ],
};

export default function Thesis() {
  return (
    <section id="tese" className="thesis cv-auto">
      <div className="container thesis-grid">
        <div className="reveal">
          <span className="eyebrow">O problema não é só estar online</span>
          <h2 style={{ marginTop: 18 }}>
            Muitas empresas não perdem clientes por falta de qualidade. Perdem
            por falta de <span className="gradient-text">percepção</span>.
          </h2>
          <p style={{ marginTop: 18, color: "var(--text-1)", fontSize: 16 }}>
            Hoje, o cliente pesquisa antes de chamar. Ele entra no seu site,
            compara sua presença digital, observa sua comunicação e decide em
            poucos segundos se confia ou não na sua empresa.
          </p>
          <p style={{ marginTop: 14, color: "var(--text-1)", fontSize: 16 }}>
            Se o seu site parece antigo, confuso ou genérico, ele não apenas
            deixa de ajudar: ele atrapalha sua venda.
          </p>

          <ol className="thesis-bullets">
            {thesisStyles.bullets.map((b, i) => (
              <li
                key={i}
                className="stagger-item"
                style={{ animationDelay: `${i * 90}ms` } as CSSProperties}
              >
                <span className="n">{i + 1}</span>
                <span>{b}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="reveal">
          <GapChart />
        </div>
      </div>
    </section>
  );
}

function GapChart() {
  const [ref, visible] = useInView<HTMLDivElement>({ threshold: 0.35 });
  return (
    <div ref={ref} className={`gap-chart glass ${visible ? "gap-in" : ""}`} style={{ padding: 22 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
        <h3 style={{ fontSize: "1.05rem" }}>Gap de percepção digital</h3>
        <span style={{ fontSize: 12, color: "var(--text-2)" }}>12 meses</span>
      </div>
      <p style={{ fontSize: 13, color: "var(--text-2)", marginBottom: 14 }}>
        Como empresas boas podem parecer fracas no digital.
      </p>

      <svg viewBox="0 0 480 240" preserveAspectRatio="none" role="img" aria-label="Gráfico comparando qualidade real e confiança percebida no digital">
        <defs>
          <linearGradient id="gapGrad" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#FFD600" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FFD600" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="qualityStroke" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#0D6EFD" />
            <stop offset="100%" stopColor="#00C853" />
          </linearGradient>
        </defs>

        {[40, 90, 140, 190].map((y) => (
          <line key={y} x1="0" y1={y} x2="480" y2={y} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        ))}

        <path
          className="gap-area"
          d="M 20 180 C 80 160, 140 130, 200 110 S 320 60, 400 30 L 460 20
             L 460 128 C 400 138, 320 156, 200 172 S 80 190, 20 200 Z"
          fill="url(#gapGrad)"
        />
        <path
          className="gap-path gap-path-quality"
          d="M 20 180 C 80 160, 140 130, 200 110 S 320 60, 400 30 L 460 20"
          stroke="url(#qualityStroke)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <path
          className="gap-path gap-path-perception"
          d="M 20 200 C 80 190, 140 170, 200 172 S 320 156, 400 138 L 460 128"
          stroke="#8A94A6"
          strokeWidth="2.6"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="6 5"
        />

        <g transform="translate(316, 70)" className="gap-label">
          <rect x="-6" y="-16" width="112" height="24" rx="6" fill="#0B0B0B" stroke="rgba(255,214,0,0.55)" />
          <text x="50" y="0" textAnchor="middle" fontSize="11" fontWeight="700" fill="#FFD600">Gap de percepção</text>
        </g>

        <circle className="gap-dot" cx="460" cy="20" r="4" fill="#00C853" />
        <circle className="gap-dot" cx="460" cy="128" r="4" fill="#8A94A6" />
      </svg>

      <div className="legend">
        <span>
          <i style={{ background: "linear-gradient(90deg,#0D6EFD,#00C853)" }} />
          Qualidade real
        </span>
        <span>
          <i style={{ background: "#8A94A6" }} />
          Confiança percebida
        </span>
        <span>
          <i style={{ background: "#FFD600" }} />
          Gap
        </span>
      </div>
    </div>
  );
}
