import FalconLogo from "./FalconLogo";

const footerStyles = {
  wa: "https://wa.me/5555999655995?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Falcon%20Ads.",
  waLabel: "(55) 99965-5995",
  ig: "https://www.instagram.com/falconadss/",
  igLabel: "@falconadss",
  cols: [
    {
      title: "Serviços",
      links: [
        { label: "Landing Pages", href: "#servico" },
        { label: "Sites Institucionais", href: "#servico" },
        { label: "SEO", href: "#servico" },
        { label: "Estratégia Digital", href: "#tese" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { label: "Sobre", href: "#tese" },
        { label: "Processo", href: "#processo" },
        { label: "Portfólio", href: "#" },
        { label: "Contato", href: "#" },
      ],
    },
  ],
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <FalconLogo size={40} />
            <p>
              Estratégia. Tráfego. Resultados. Sites estratégicos criados para
              posicionar sua empresa e gerar oportunidades reais.
            </p>
          </div>

          {footerStyles.cols.map((c) => (
            <div className="footer-col" key={c.title}>
              <h4>{c.title}</h4>
              <ul>
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer-col">
            <h4>Contato</h4>
            <ul>
              <li>
                <a
                  href={footerStyles.wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Falcon Ads"
                >
                  WhatsApp: {footerStyles.waLabel}
                </a>
              </li>
              <li>
                <a
                  href={footerStyles.ig}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Falcon Ads"
                >
                  Instagram: {footerStyles.igLabel}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Falcon Ads. Todos os direitos reservados.</span>
          <span>Estratégia. Tráfego. Resultados.</span>
        </div>
      </div>
    </footer>
  );
}
