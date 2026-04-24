"use client";

const marqueeStyles = {
  keywords: [
    "Estratégia digital",
    "Landing Pages",
    "Sites Institucionais",
    "Conversão",
    "Autoridade",
    "WhatsApp",
    "SEO",
    "Design Premium",
    "Alta Performance",
    "Experiência do Usuário",
    "Mais Leads",
    "Mais Confiança",
    "Posicionamento",
    "Tráfego Pago",
    "Resultado Comercial",
  ],
};

export default function Marquee() {
  const loop = [...marqueeStyles.keywords, ...marqueeStyles.keywords];
  return (
    <section className="marquee" aria-label="Palavras-chave do serviço">
      <div className="marquee-track">
        {loop.map((k, i) => (
          <span key={`${k}-${i}`}>{k}</span>
        ))}
      </div>
    </section>
  );
}
