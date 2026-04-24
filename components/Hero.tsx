"use client";

import type { CSSProperties } from "react";
import { useMagnetic, useTilt } from "@/lib/hooks";

const heroStyles = {
  wa: "https://wa.me/5555999655995?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Falcon%20Ads%20e%20quero%20um%20site%20que%20gere%20mais%20clientes.",
};

export default function Hero() {
  const ctaRef = useMagnetic<HTMLAnchorElement>(0.22);

  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy reveal">
          <span className="chip">
            <span className="dot" />
            Sites estratégicos para empresas que querem vender mais
          </span>
          <h1 className="hero-title">
            Sua empresa não precisa de um{" "}
            <span className="strike">site bonito</span>. Precisa de uma
            estrutura digital que{" "}
            <span className="gradient-text gradient-text-anim">gere clientes</span>.
          </h1>
          <p className="hero-lede">
            Criamos landing pages e sites institucionais modernos, rápidos e
            estratégicos para empresas que querem transmitir mais confiança
            desde o primeiro clique. Não é só design: é clareza, posicionamento,
            experiência e conversão trabalhando juntos para transformar visitas
            em oportunidades reais.
          </p>
          <div className="hero-ctas">
            <span className="magnetic-wrap">
              <a
                ref={ctaRef}
                href={heroStyles.wa}
                className="btn btn-primary btn-sheen"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Quero um site que gere mais clientes — abrir WhatsApp"
              >
                <span className="btn-label">Quero um site que gere mais clientes</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M5 12h14m-6-6 6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </span>
            <a href="#processo" className="btn btn-ghost">
              Ver como funciona
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
          <p className="hero-microcopy">
            Fale pelo WhatsApp e receba uma proposta sob medida, sem enrolação.
          </p>
          <div className="hero-kpis">
            <div className="hero-kpi">
              <div className="stat">
                Até <b>3 dias</b>
              </div>
              <div className="lab">Landing Page no ar</div>
            </div>
            <div className="hero-kpi">
              <div className="stat">
                Até <b>5 dias</b>
              </div>
              <div className="lab">Site institucional completo</div>
            </div>
            <div className="hero-kpi">
              <div className="stat">
                <b>100%</b>
              </div>
              <div className="lab">Responsivo e focado em conversão</div>
            </div>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  const tiltRef = useTilt<HTMLDivElement>({ max: 6, perspective: 1200, scale: 1.015 });
  return (
    <div className="hero-visual reveal">
      <div className="halo" />
      <div ref={tiltRef} className="hero-tilt">
        <HeroDashboard />
        <div className="hero-spotlight" aria-hidden="true" />
        <div className="hero-float hero-float-a" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M12 3v18M3 12h18" stroke="#FFD600" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        </div>
        <div className="hero-float hero-float-b" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M4 16 10 10 14 14 20 6" stroke="#00C853" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function HeroDashboard() {
  return (
    <div className="hero-dashboard" aria-label="Painel de métricas Falcon Ads (ilustrativo)">
      <div className="dash-head">
        <div className="dash-title">
          <span className="blip" />
          Performance · Falcon Ads
        </div>
        <div className="dash-dots">
          <i />
          <i />
          <i />
        </div>
      </div>

      <div className="dash-body">
        <div className="dash-card dash-card-shine">
          <div className="lab">Leads gerados</div>
          <div className="val">+248</div>
          <div className="trend up">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
              <path d="M2 7 L 5 3 L 8 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            +32%
          </div>
        </div>
        <div className="dash-card dash-card-shine">
          <div className="lab">Taxa conversão</div>
          <div className="val">8,4%</div>
          <div className="trend up">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
              <path d="M2 7 L 5 3 L 8 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            +2,1pp
          </div>
        </div>
        <div className="dash-card dash-card-shine">
          <div className="lab">Confiança</div>
          <div className="val">9.1</div>
          <div className="trend up">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
              <path d="M2 7 L 5 3 L 8 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            +1.4
          </div>
        </div>
      </div>

      <div className="dash-chart">
        <svg viewBox="0 0 400 140" preserveAspectRatio="none">
          <defs>
            <linearGradient id="heroLineGrad" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#0D6EFD" />
              <stop offset="55%" stopColor="#00C853" />
              <stop offset="100%" stopColor="#FFD600" />
            </linearGradient>
            <linearGradient id="heroAreaGrad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#0D6EFD" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0D6EFD" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[20, 50, 80, 110].map((y) => (
            <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          ))}
          <path
            d="M 0 110 C 40 100, 70 95, 100 88 S 160 70, 200 60 S 280 46, 320 34 S 380 20, 400 14 L 400 140 L 0 140 Z"
            fill="url(#heroAreaGrad)"
          />
          <path
            className="hero-chart-path"
            d="M 0 110 C 40 100, 70 95, 100 88 S 160 70, 200 60 S 280 46, 320 34 S 380 20, 400 14"
            stroke="url(#heroLineGrad)"
            strokeWidth="2.6"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="400" cy="14" r="4" fill="#FFD600">
            <animate attributeName="r" values="4;6;4" dur="1.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="400" cy="14" r="10" fill="#FFD600" opacity="0.2">
            <animate attributeName="r" values="8;14;8" dur="1.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.25;0;0.25" dur="1.8s" repeatCount="indefinite" />
          </circle>
        </svg>

        <div className="dash-bars" aria-hidden="true">
          {[38, 54, 46, 72, 58, 84, 66].map((h, i) => (
            <span key={i} style={{ "--h": `${h}%`, animationDelay: `${i * 90}ms` } as CSSProperties} />
          ))}
        </div>
      </div>

      <div className="dash-chips">
        <span>WhatsApp integrado</span>
        <span>SEO aplicado</span>
        <span>Página otimizada</span>
      </div>
    </div>
  );
}
