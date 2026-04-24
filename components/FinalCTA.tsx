"use client";

const finalCtaStyles = {
  wa: "https://wa.me/5555999655995?text=Ol%C3%A1!%20Quero%20transformar%20meu%20site%20em%20uma%20m%C3%A1quina%20de%20oportunidades%20com%20a%20Falcon%20Ads.",
};

export default function FinalCTA() {
  return (
    <section className="final-cta-section">
      <div className="container">
        <div className="final-cta reveal">
          <span className="eyebrow">É agora</span>
          <h2 style={{ marginTop: 18 }}>
            Seu negócio pode continuar sendo bom e ainda assim passar
            despercebido no digital.
          </h2>
          <p>
            Ou pode ter uma presença que transmite valor, prende atenção e faz
            mais pessoas quererem falar com você. Um site bem construído não é
            detalhe. É posicionamento, confiança e oportunidade.
          </p>
          <a
            href={finalCtaStyles.wa}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Quero transformar meu site em uma máquina de oportunidades — abrir WhatsApp"
          >
            Quero transformar meu site em uma máquina de oportunidades
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <p className="mc">
            Clique, fale no WhatsApp e descubra qual estrutura faz mais sentido
            para sua empresa hoje.
          </p>
        </div>
      </div>
    </section>
  );
}
