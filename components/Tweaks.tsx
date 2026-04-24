"use client";

import { useEffect, useState } from "react";

const tweaksStyles = {
  accents: [
    { name: "Azul", value: "#0D6EFD" },
    { name: "Azul escuro", value: "#1E3A8A" },
    { name: "Verde", value: "#00C853" },
    { name: "Verde equilibrado", value: "#2ECC71" },
    { name: "Amarelo", value: "#FFD600" },
  ],
  intensities: [
    { key: "clean", label: "Clean", value: 0.4 },
    { key: "balanced", label: "Balanced", value: 1 },
    { key: "impact", label: "High impact", value: 1.4 },
  ],
};

export default function Tweaks() {
  const [open, setOpen] = useState(false);
  const [accent, setAccent] = useState<string>("#0D6EFD");
  const [aurora, setAurora] = useState(true);
  const [grid, setGrid] = useState(true);
  const [intensity, setIntensity] = useState<string>("balanced");

  useEffect(() => {
    document.documentElement.style.setProperty("--accent", accent);
  }, [accent]);

  useEffect(() => {
    document.documentElement.style.setProperty("--show-aurora", aurora ? "1" : "0");
  }, [aurora]);

  useEffect(() => {
    document.documentElement.style.setProperty("--show-grid", grid ? "1" : "0");
  }, [grid]);

  useEffect(() => {
    const val = tweaksStyles.intensities.find((i) => i.key === intensity)?.value ?? 1;
    document.documentElement.style.setProperty("--intensity", String(val));
  }, [intensity]);

  return (
    <div className="tweaks" aria-label="Personalizar visual">
      {open && (
        <div className="tweaks-panel" role="region" aria-label="Painel Tweaks">
          <div className="tweaks-row">
            <h5>Cor de acento</h5>
            <div className="tweaks-swatches">
              {tweaksStyles.accents.map((a) => (
                <button
                  key={a.value}
                  type="button"
                  title={a.name}
                  aria-label={`Trocar acento para ${a.name}`}
                  aria-pressed={accent === a.value}
                  className={`tweaks-sw ${accent === a.value ? "active" : ""}`}
                  onClick={() => setAccent(a.value)}
                  style={{ background: a.value }}
                />
              ))}
            </div>
          </div>

          <div className="tweaks-row">
            <h5>Efeitos</h5>
            <div className="tweaks-toggle-row">
              <span>Aurora/glow</span>
              <button
                type="button"
                aria-pressed={aurora}
                aria-label="Alternar aurora"
                className={`tog ${aurora ? "on" : ""}`}
                onClick={() => setAurora((v) => !v)}
              />
            </div>
            <div className="tweaks-toggle-row">
              <span>Grid de fundo</span>
              <button
                type="button"
                aria-pressed={grid}
                aria-label="Alternar grid"
                className={`tog ${grid ? "on" : ""}`}
                onClick={() => setGrid((v) => !v)}
              />
            </div>
          </div>

          <div className="tweaks-row">
            <h5>Intensidade</h5>
            <div className="tweaks-intensity">
              {tweaksStyles.intensities.map((i) => (
                <button
                  key={i.key}
                  type="button"
                  aria-pressed={intensity === i.key}
                  className={intensity === i.key ? "active" : ""}
                  onClick={() => setIntensity(i.key)}
                >
                  {i.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        className="tweaks-toggle"
        aria-expanded={open}
        aria-label={open ? "Fechar painel Tweaks" : "Abrir painel Tweaks"}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </button>
    </div>
  );
}
