"use client";

import { useState } from "react";

const faqStyles = {
  items: [
    {
      q: "Qual a diferença entre Landing Page e Site Institucional?",
      a: "A Landing Page é uma página única, mais direta e focada em conversão. O Site Institucional é mais completo, ideal para empresas que precisam apresentar serviços, autoridade, equipe, conteúdo e posicionamento com mais profundidade.",
    },
    {
      q: "Em quanto tempo o projeto fica pronto?",
      a: "A Landing Page pode ser entregue em até 3 dias. O Site Institucional pode ser entregue em até 5 dias, dependendo do alinhamento e do envio dos materiais necessários.",
    },
    {
      q: "O site funciona bem no celular?",
      a: "Sim. Toda a estrutura é responsiva, com experiência otimizada para desktop, tablet e celular.",
    },
    {
      q: "O site terá integração com WhatsApp?",
      a: "Sim. O site pode ter botões estratégicos e chamadas integradas ao WhatsApp para facilitar o contato imediato do visitante.",
    },
    {
      q: "Vocês escrevem os textos também?",
      a: "Sim. A estrutura inclui copy pensada para clareza, posicionamento e conversão, principalmente no site institucional.",
    },
    {
      q: "E se eu não souber qual opção escolher?",
      a: "Pelo WhatsApp analisamos seu momento e indicamos se faz mais sentido começar com uma Landing Page ou com um Site Institucional.",
    },
    {
      q: "O site ajuda no Google?",
      a: "Sim. A Landing Page pode incluir SEO básico, enquanto o Site Institucional pode ter uma estrutura mais avançada para fortalecer presença orgânica.",
    },
    {
      q: "E se eu investir e não funcionar?",
      a: "A proposta não promete resultados irreais. A ideia é reduzir risco criando uma estrutura mais clara, profissional e estratégica para melhorar percepção, confiança e conversão.",
    },
  ],
};

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">FAQ</span>
          <h2>Perguntas frequentes</h2>
          <p>Tire as principais dúvidas antes de chamar no WhatsApp.</p>
        </div>

        <div className="faq-list reveal">
          {faqStyles.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={`faq-item ${isOpen ? "open" : ""}`}>
                <button
                  className="faq-q"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-btn-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>{item.q}</span>
                  <span className="ico" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  className="faq-a"
                >
                  <div className="faq-a-inner">{item.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
