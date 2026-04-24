"use client";

import type { CSSProperties } from "react";

const whyNowStyles = {
  cards: [
    {
      title: "O cliente pesquisa antes de comprar",
      body: "Mesmo quando vem por indicação, o cliente valida sua empresa no digital. Se a presença não transmite confiança, você perde força no momento mais importante.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="11" cy="11" r="6.5" stroke="#0D6EFD" strokeWidth="1.8" />
          <path d="m20 20-3.5-3.5" stroke="#00C853" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "Concorrentes já estão se posicionando",
      body: "Em mercados competitivos, a percepção conta muito. Quem comunica melhor, organiza melhor sua oferta e passa mais autoridade tende a sair na frente.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 19 L 9 11 L 13 15 L 20 6" stroke="#0D6EFD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 6 H 20 V 12" stroke="#FFD600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "Tráfego sem estrutura desperdiça dinheiro",
      body: "Anunciar sem uma boa página é como levar pessoas para uma loja desorganizada. O site precisa estar pronto para receber, convencer e converter.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M3 7 H 21 L 18 14 H 7 Z" stroke="#0D6EFD" strokeWidth="1.8" strokeLinejoin="round" />
          <circle cx="9" cy="19" r="1.6" fill="#00C853" />
          <circle cx="17" cy="19" r="1.6" fill="#FFD600" />
          <path d="M3 7 L 2 4 H 5" stroke="#0D6EFD" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ],
};

export default function WhyNow() {
  return (
    <section className="whynow cv-auto">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Por que agora</span>
          <h2>O melhor momento para corrigir a percepção digital é <span className="gradient-text">antes dela custar um negócio</span>.</h2>
        </div>
        <div className="whynow-grid">
          {whyNowStyles.cards.map((c, i) => (
            <article
              key={i}
              className="whynow-card glass reveal card-glow"
              style={{ transitionDelay: `${i * 90}ms` } as CSSProperties}
            >
              <div className="card-glow-border" aria-hidden="true" />
              <span className="ic" aria-hidden="true">{c.icon}</span>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
