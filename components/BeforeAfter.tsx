"use client";

import type { CSSProperties } from "react";
import { useCountUp, useInView } from "@/lib/hooks";

const beforeAfterStyles = {
  before: {
    title: "Site comum",
    bars: [
      { label: "Confiança percebida", value: 35 },
      { label: "Clareza da oferta", value: 40 },
      { label: "Conversão em contato", value: 28 },
      { label: "Experiência mobile", value: 45 },
    ],
  },
  after: {
    title: "Site estratégico Falcon Ads",
    bars: [
      { label: "Confiança percebida", value: 90 },
      { label: "Clareza da oferta", value: 92 },
      { label: "Conversão em contato", value: 85 },
      { label: "Experiência mobile", value: 96 },
    ],
  },
};

type Bar = { label: string; value: number };

function BarRow({ bar, active, delay }: { bar: Bar; active: boolean; delay: number }) {
  const value = useCountUp(bar.value, active, 1400 + delay);
  return (
    <div className="ba-bar">
      <div className="lbl">
        <span>{bar.label}</span>
        <b>{value}%</b>
      </div>
      <div className="track">
        <div
          className="fill"
          style={{ "--target": `${bar.value}%`, transitionDelay: `${delay}ms` } as CSSProperties}
        />
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  const [ref, active] = useInView<HTMLDivElement>({ threshold: 0.25 });

  return (
    <section className="before-after cv-auto">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Diferencial operacional</span>
          <h2>A diferença não está no layout. Está na <span className="gradient-text">estrutura</span>.</h2>
        </div>

        <div ref={ref} className={`ba-wrap ${active ? "in" : ""}`}>
          <div className="ba-col before glass">
            <span className="tag">Antes</span>
            <h3>{beforeAfterStyles.before.title}</h3>
            <div className="ba-bars">
              {beforeAfterStyles.before.bars.map((b, i) => (
                <BarRow key={i} bar={b} active={active} delay={i * 110} />
              ))}
            </div>
          </div>

          <div className="ba-col after glass">
            <span className="tag">Depois</span>
            <h3>{beforeAfterStyles.after.title}</h3>
            <div className="ba-bars">
              {beforeAfterStyles.after.bars.map((b, i) => (
                <BarRow key={i} bar={b} active={active} delay={i * 110 + 240} />
              ))}
            </div>
          </div>
        </div>

        <p className="ba-note reveal">
          A diferença não está apenas no layout. Está na estrutura: copy,
          hierarquia, velocidade, responsividade, CTA, experiência e
          posicionamento.
        </p>
      </div>
    </section>
  );
}
