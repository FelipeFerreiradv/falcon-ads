"use client";

import FalconLogo from "./FalconLogo";

const navStyles = {
  wa: "https://wa.me/[NÚMERO DO WHATSAPP]?text=Ol%C3%A1%2C+quero+um+site+Falcon+Ads",
};

const links = [
  { href: "#tese", label: "O problema" },
  { href: "#servico", label: "Solução" },
  { href: "#argumentos", label: "Benefícios" },
  { href: "#processo", label: "Processo" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="nav-brand" aria-label="Falcon Ads — início">
          <FalconLogo size={36} />
        </a>
        <nav className="nav-links" aria-label="principal">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={navStyles.wa}
          className="btn btn-primary nav-cta"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Quero vender mais — abrir WhatsApp"
        >
          Quero vender mais
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
      </div>
    </header>
  );
}
