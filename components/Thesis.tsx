import type { CSSProperties } from "react";
import GapChart from "./GapChart";

const thesisStyles = {
  bullets: [
    "O visitante precisa entender rápido o que você faz.",
    "A página precisa transmitir confiança antes do primeiro contato.",
    "O site precisa conduzir para ação, não apenas existir.",
  ],
};

export default function Thesis() {
  return (
    <section id="tese" className="thesis cv-auto">
      <div className="container thesis-grid">
        <div className="reveal">
          <span className="eyebrow">O problema não é só estar online</span>
          <h2 style={{ marginTop: 18 }}>
            Muitas empresas não perdem clientes por falta de qualidade. Perdem
            por falta de <span className="gradient-text">percepção</span>.
          </h2>
          <p style={{ marginTop: 18, color: "var(--text-1)", fontSize: 16 }}>
            Hoje, o cliente pesquisa antes de chamar. Ele entra no seu site,
            compara sua presença digital, observa sua comunicação e decide em
            poucos segundos se confia ou não na sua empresa.
          </p>
          <p style={{ marginTop: 14, color: "var(--text-1)", fontSize: 16 }}>
            Se o seu site parece antigo, confuso ou genérico, ele não apenas
            deixa de ajudar: ele atrapalha sua venda.
          </p>

          <ol className="thesis-bullets">
            {thesisStyles.bullets.map((b, i) => (
              <li
                key={i}
                className="stagger-item"
                style={{ animationDelay: `${i * 90}ms` } as CSSProperties}
              >
                <span className="n">{i + 1}</span>
                <span>{b}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="reveal">
          <GapChart />
        </div>
      </div>
    </section>
  );
}
