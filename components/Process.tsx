"use client";

import type { CSSProperties } from "react";

const processStyles = {
  steps: [
    {
      title: "Diagnóstico rápido",
      body: "Entendimento do negócio, objetivo, público e melhor estrutura.",
    },
    {
      title: "Direção estratégica",
      body: "Definição da mensagem, oferta, CTA e arquitetura da página.",
    },
    {
      title: "Copy e estrutura",
      body: "Criação dos textos, blocos, hierarquia e fluxo de conversão.",
    },
    {
      title: "Design e desenvolvimento",
      body: "Construção visual moderna, responsiva e alinhada à marca.",
    },
    {
      title: "Integrações e ajustes",
      body: "WhatsApp, formulário, SEO, performance e revisões essenciais.",
    },
    {
      title: "Publicação",
      body: "Página no ar, pronta para receber visitantes e gerar oportunidades.",
    },
  ],
};

export default function Process() {
  return (
    <section id="processo" className="process cv-auto">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Processo</span>
          <h2>Seis etapas objetivas, do briefing à <span className="gradient-text">página no ar</span>.</h2>
          <p>
            Um fluxo enxuto, pensado para entregar com velocidade sem
            sacrificar estratégia, estética ou qualidade.
          </p>
        </div>

        <div className="process-list">
          <span className="process-spine" aria-hidden="true" />
          {processStyles.steps.map((s, i) => (
            <div
              className="process-step glass reveal card-glow"
              key={i}
              style={{ transitionDelay: `${i * 80}ms` } as CSSProperties}
            >
              <div className="card-glow-border" aria-hidden="true" />
              <span className="num">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
