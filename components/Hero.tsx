import HeroCTA from "./HeroCTA";
import HeroVisual from "./HeroVisual";

const heroStyles = {
  wa: "https://wa.me/5555999655995?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Falcon%20Ads%20e%20quero%20um%20site%20que%20gere%20mais%20clientes.",
};

export default function Hero() {
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
            <HeroCTA href={heroStyles.wa} />
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
