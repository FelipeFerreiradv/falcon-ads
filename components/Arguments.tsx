"use client";

import type { CSSProperties } from "react";

const argumentStyles = {
  cards: [
    {
      title: "Percepção vende",
      lede: "O cliente decide se confia em você antes de chamar.",
      body: "Um site mal estruturado faz sua empresa parecer menor, mesmo que o serviço seja bom. Criamos uma presença digital que transmite profissionalismo, autoridade e clareza desde o primeiro acesso.",
      stat: "7s",
      label: "para causar a primeira impressão",
    },
    {
      title: "Clareza gera ação",
      lede: "Se o visitante não entende, ele não compra.",
      body: "A página precisa explicar de forma simples o que sua empresa faz, por que ela é confiável e qual é o próximo passo. Cada seção é pensada para reduzir dúvida e aumentar intenção.",
      stat: "1",
      label: "objetivo claro por página",
    },
    {
      title: "Menos tráfego perdido",
      lede: "De nada adianta atrair pessoas para uma página que não converte.",
      body: "Seja por indicação, anúncio, Google ou WhatsApp, quem chega até você precisa encontrar uma estrutura preparada para gerar contato. O site deve aproveitar melhor cada oportunidade.",
      stat: "100%",
      label: "foco em conversão",
    },
    {
      title: "Design com estratégia",
      lede: "Bonito é o mínimo. Estratégico é o que vende.",
      body: "O visual precisa reforçar posicionamento, guiar o olhar e destacar o que importa. Unimos design moderno com copy, hierarquia e experiência pensada para decisão.",
      stat: "3",
      label: "pilares: design, copy e UX",
    },
    {
      title: "Mobile primeiro",
      lede: "Boa parte das decisões começa pelo celular.",
      body: "A experiência mobile precisa ser rápida, clara e fácil de navegar. Desenvolvemos páginas responsivas para que sua empresa transmita confiança em qualquer tela.",
      stat: "100%",
      label: "responsivo",
    },
    {
      title: "Velocidade importa",
      lede: "Sua empresa não precisa esperar meses para ter presença digital forte.",
      body: "Criamos uma estrutura objetiva, validada e organizada para tirar o projeto do papel com agilidade, sem perder estratégia, estética ou qualidade.",
      stat: "3–5",
      label: "dias de entrega",
    },
  ],
};

export default function Arguments() {
  return (
    <section id="argumentos" className="arguments cv-auto">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Por que faz diferença</span>
          <h2>Não é sobre ter um site. É sobre como ele <span className="gradient-text">trabalha por você</span>.</h2>
          <p>
            Seis princípios que guiam cada projeto entregue pela Falcon Ads.
            Cada card conecta uma decisão estratégica a um resultado visível no
            comercial.
          </p>
        </div>

        <div className="args-grid">
          {argumentStyles.cards.map((c, i) => (
            <article
              key={i}
              className="arg-card glass reveal card-glow"
              style={{ transitionDelay: `${i * 70}ms` } as CSSProperties}
            >
              <div className="card-glow-border" aria-hidden="true" />
              <h3>{c.title}</h3>
              <p className="arg-lede">{c.lede}</p>
              <p className="arg-body">{c.body}</p>
              <div className="arg-stat">
                <span className="n">{c.stat}</span>
                <span className="l">{c.label}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
