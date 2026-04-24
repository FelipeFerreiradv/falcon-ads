# Falcon Ads — Landing Page

Landing page institucional / serviço da **Falcon Ads** — Estratégia. Tráfego. Resultados.

Construída em **Next.js 15 (App Router) + TypeScript + Tailwind**, com 13 seções, paleta dark premium tri-color (azul / verde / amarelo) e painel "Tweaks" inline para customizar acento, aurora, grid e intensidade via CSS variables em tempo real.

## Como rodar

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

Para build de produção:

```bash
npm run build
npm start
```

## Estrutura

```
falcon ads/
├── app/
│   ├── layout.tsx        # root layout — Inter font, globals, bg fx
│   └── page.tsx          # client page — monta todas as seções + reveal observer
├── components/
│   ├── FalconLogo.tsx    # logo SVG inline (falcão + wordmark tri-color)
│   ├── Nav.tsx           # nav sticky com CTA WhatsApp
│   ├── Hero.tsx          # chip, título (strike + gradient), lede, 2 CTAs, 3 KPIs, dashboard SVG
│   ├── Marquee.tsx       # faixa horizontal com 15 keywords
│   ├── Thesis.tsx        # eyebrow + H2 + SVG "Gap de percepção digital" + 3 bullets
│   ├── Arguments.tsx     # 6 cards glass
│   ├── PullBand.tsx      # faixa de impacto com glow tri-color
│   ├── WhyNow.tsx        # 3 cards "por que agora"
│   ├── BeforeAfter.tsx   # comparativo com barras animadas (IntersectionObserver)
│   ├── Service.tsx       # descrição + 10 frentes SVG + 2 cards de oferta
│   ├── Process.tsx       # timeline vertical de 6 etapas
│   ├── FAQ.tsx           # accordion com 8 itens (aria-expanded)
│   ├── FinalCTA.tsx      # bloco com glow + botão grande
│   ├── Footer.tsx        # logo + tagline + 3 colunas + copyright
│   └── Tweaks.tsx        # painel fixo bottom-right (acento, aurora, grid, intensidade)
├── styles.css            # tokens, reset, globais, bg fx, utilitários
├── sections.css          # estilos específicos por seção + keyframes + media queries
├── tailwind.config.ts    # tokens de cor exportados como utilitários Tailwind
├── package.json
├── tsconfig.json
├── next.config.mjs
└── postcss.config.mjs
```

## Contatos (já configurados)

- **WhatsApp:** (55) 99965-5995 — mensagens personalizadas por CTA (Nav, Hero, Service, FinalCTA, Footer) linkando `https://wa.me/5555999655995` com `?text=...` adaptado.
- **Instagram:** [@falconadss](https://www.instagram.com/falconadss/)

A logo da Falcon Ads foi **recriada em SVG inline** em `components/FalconLogo.tsx` usando a paleta azul / verde / amarelo da identidade. Se quiser substituir por uma versão mais fiel ao arquivo original, basta editar o SVG desse componente.

## Paleta

| Token              | Valor     |
| ------------------ | --------- |
| `--accent`         | `#0D6EFD` |
| `--accent-2`       | `#00C853` |
| `--accent-3`       | `#FFD600` |
| `--bg-0`           | `#0B0B0B` |
| `--bg-1`           | `#121212` |
| `--bg-2`           | `#003366` |
| `--bg-3`           | `#1E3A8A` |
| `--text-0`         | `#FFFFFF` |
| `--text-1`         | `#CCCCCC` |
| `--text-2`         | `#8A94A6` |

## Personalização em tempo real

O painel **Tweaks** (canto inferior direito) atualiza CSS variables do `:root` ao vivo:

- `--accent` — cor principal dos CTAs e detalhes.
- `--show-aurora` — `1` / `0` liga o glow radial do fundo.
- `--show-grid` — `1` / `0` liga o grid sutil.
- `--intensity` — `0.4` (clean) / `1` (balanced) / `1.4` (high impact).

## Acessibilidade

- Todos os CTAs têm `aria-label` descritivo.
- Accordion de FAQ usa `aria-expanded` + `aria-controls`.
- Foco visível azul em todos os elementos interativos.
- Respeita `prefers-reduced-motion` (anima mínimo).
- Contraste validado em combinações `#FFFFFF` / `#CCCCCC` sobre fundos dark.
