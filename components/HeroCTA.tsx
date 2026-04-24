"use client";

import { useMagnetic } from "@/lib/hooks";

type Props = { href: string };

export default function HeroCTA({ href }: Props) {
  const ctaRef = useMagnetic<HTMLAnchorElement>(0.22);
  return (
    <span className="magnetic-wrap">
      <a
        ref={ctaRef}
        href={href}
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
  );
}
