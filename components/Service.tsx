"use client";

import type { ReactNode } from "react";

const serviceStyles = {
  waLanding: "https://wa.me/5555999655995?text=Ol%C3%A1!%20Quero%20uma%20proposta%20de%20Landing%20Page%20da%20Falcon%20Ads.",
  waInstitucional: "https://wa.me/5555999655995?text=Ol%C3%A1!%20Quero%20uma%20proposta%20de%20Site%20Institucional%20da%20Falcon%20Ads.",
};

type IconProps = { d: string; d2?: string; fill?: boolean };
const Icon = ({ d, d2, fill }: IconProps) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d={d} stroke="#E6F1FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill={fill ? "#E6F1FF" : "none"} />
    {d2 && <path d={d2} stroke="#FFD600" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />}
  </svg>
);

const frentes: { label: string; icon: ReactNode }[] = [
  { label: "Estratégia da página", icon: <Icon d="M12 3 l 9 5 -9 5 -9-5 9-5 z" d2="M3 13 l 9 5 9-5 M3 17 l 9 5 9-5" /> },
  { label: "Copy persuasiva", icon: <Icon d="M4 4 h 16 v 12 H 8 l -4 4 V 4 z" d2="M8 9 h 8 M8 12 h 5" /> },
  { label: "Design responsivo", icon: <Icon d="M4 6 h 14 v 10 H 4 z M10 20 h 10 M14 16 v 4" d2="" /> },
  { label: "Integração WhatsApp", icon: <Icon d="M4 20 l 1.4 -4 A 8 8 0 1 1 9 20 z" d2="M9 12 c 1 2 3 4 6 4" /> },
  { label: "SEO básico ou avançado", icon: <Icon d="M3 21 l 6-6 M9 15 a 6 6 0 1 0 -6-6" d2="M9 9 l 4 4 4-4" /> },
  { label: "Performance e velocidade", icon: <Icon d="M4 14 a 8 8 0 0 1 16 0 M12 14 l 4-4" d2="M8 18 h 8" /> },
  { label: "Formulários de contato", icon: <Icon d="M4 5 h 16 v 14 H 4 z M4 9 h 16 M7 13 h 6 M7 16 h 10" d2="" /> },
  { label: "Estrutura institucional", icon: <Icon d="M4 21 V 9 l 8-5 8 5 v 12 M8 21 v-8 h 8 v 8" d2="" /> },
  { label: "Ajustes de conversão", icon: <Icon d="M4 12 a 8 8 0 1 1 16 0 a 8 8 0 0 1 -16 0 z M12 8 v 4 l 3 2" d2="" /> },
  { label: "Direção visual premium", icon: <Icon d="M12 2 l 3 6 7 1 -5 5 1 7 -6-3 -6 3 1-7 -5-5 7-1 z" d2="" /> },
];

export default function Service() {
  return (
    <section id="servico" className="service cv-auto">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">O serviço</span>
          <h2>Sites criados para <span className="gradient-text">posicionar, convencer e gerar oportunidades</span>.</h2>
        </div>

        <div className="svc-top">
          <div className="reveal">
            <p>
              Desenvolvemos landing pages e sites institucionais para empresas
              que precisam de uma presença digital mais forte, moderna e
              comercial. A estrutura é pensada para transmitir autoridade,
              explicar sua oferta com clareza e levar o visitante até o próximo
              passo: chamar no WhatsApp, pedir orçamento ou iniciar uma conversa.
            </p>
            <p>
              Você não recebe apenas páginas bonitas. Recebe uma vitrine
              digital estratégica, construída para apoiar seu comercial.
            </p>
          </div>

          <div className="reveal">
            <div className="svc-frentes">
              {frentes.map((f, i) => (
                <div className="svc-frente" key={i}>
                  <span className="ic" aria-hidden="true">{f.icon}</span>
                  {f.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="svc-offers">
          <article className="svc-offer glass reveal card-glow">
            <div className="card-glow-border" aria-hidden="true" />
            <span className="tag">Landing Page</span>
            <h3>Página única focada em conversão de leads</h3>
            <p className="sub">Entrada rápida, validação de oferta e geração de contatos em uma página objetiva.</p>
            <ul>
              {[
                "Estrutura pensada para conversão",
                "Design responsivo e moderno",
                "Formulário de contato integrado",
                "Integração com WhatsApp",
                "SEO básico",
                "Entrega em até 3 dias",
              ].map((li) => (
                <li key={li}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M3 7.5 L 6 10 L 11 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {li}
                </li>
              ))}
            </ul>
            <p className="ideal">
              <b style={{ color: "#fff" }}>Ideal para:</b> empresas que querem
              entrar rápido no digital, validar uma oferta, gerar contatos ou
              ter uma página objetiva para vender.
            </p>
            <a
              href={serviceStyles.waLanding}
              className="btn btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pedir proposta de Landing Page via WhatsApp"
            >
              Pedir proposta
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </article>

          <article className="svc-offer glass featured reveal card-glow">
            <div className="card-glow-border" aria-hidden="true" />
            <span className="tag">Site Institucional · Mais completo</span>
            <h3>Site completo para posicionar sua empresa com mais força no digital</h3>
            <p className="sub">Autoridade, arquitetura completa e estrutura SEO avançada para consolidar presença.</p>
            <ul>
              {[
                "Até 10 páginas personalizadas",
                "Áreas de atuação ou serviços detalhadas",
                "Página da equipe",
                "Blog integrado opcional",
                "SEO avançado",
                "Copy que converte",
                "Entrega em até 5 dias",
              ].map((li) => (
                <li key={li}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M3 7.5 L 6 10 L 11 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {li}
                </li>
              ))}
            </ul>
            <p className="ideal">
              <b style={{ color: "#fff" }}>Ideal para:</b> empresas que querem
              consolidar marca, transmitir autoridade e ter uma presença
              digital mais robusta.
            </p>
            <a
              href={serviceStyles.waInstitucional}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pedir proposta de Site Institucional via WhatsApp"
            >
              Quero esta estrutura
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
