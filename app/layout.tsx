import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../styles.css";
import "../sections.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

const siteUrl = "https://falconads.com.br";
const title = "Falcon Ads — Sites estratégicos que geram clientes";
const description =
  "Landing pages e sites institucionais modernos, rápidos e estratégicos. Criamos presença digital para empresas que querem transmitir confiança desde o primeiro clique e transformar visitas em oportunidades reais.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s · Falcon Ads",
  },
  description,
  applicationName: "Falcon Ads",
  generator: "Next.js",
  keywords: [
    "landing page",
    "sites institucionais",
    "criação de sites",
    "tráfego pago",
    "SEO",
    "estratégia digital",
    "marketing digital",
    "conversão",
    "WhatsApp",
    "sites para empresas",
    "Falcon Ads",
  ],
  authors: [{ name: "Falcon Ads" }],
  creator: "Falcon Ads",
  publisher: "Falcon Ads",
  referrer: "origin-when-cross-origin",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: {
    canonical: "/",
    languages: { "pt-BR": "/" },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Falcon Ads",
    title,
    description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Falcon Ads — Estratégia, Tráfego, Resultados",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon", type: "image/png" }],
    apple: [{ url: "/icon", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  category: "business",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0B0B0B" },
    { media: "(prefers-color-scheme: light)", color: "#0B0B0B" },
  ],
  colorScheme: "dark",
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Falcon Ads",
    url: siteUrl,
    logo: `${siteUrl}/icon`,
    description,
    slogan: "Estratégia. Tráfego. Resultados.",
    areaServed: { "@type": "Country", name: "Brasil" },
    telephone: "+5555999655995",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+5555999655995",
        contactType: "sales",
        areaServed: "BR",
        availableLanguage: ["pt-BR", "Portuguese"],
      },
    ],
    sameAs: [
      "https://www.instagram.com/falconadss/",
      "https://wa.me/5555999655995",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Falcon Ads",
    url: siteUrl,
    inLanguage: "pt-BR",
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Criação de Landing Pages e Sites Institucionais",
    provider: { "@type": "Organization", name: "Falcon Ads", url: siteUrl },
    areaServed: { "@type": "Country", name: "Brasil" },
    description:
      "Desenvolvimento de landing pages e sites institucionais estratégicos, responsivos e otimizados para conversão, com integração WhatsApp, SEO e copy persuasiva.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Pacotes Falcon Ads",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Landing Page",
          description:
            "Página única focada em conversão de leads. Design responsivo, integração WhatsApp e SEO básico. Entrega em até 3 dias.",
          category: "Landing Page",
        },
        {
          "@type": "Offer",
          name: "Site Institucional",
          description:
            "Site completo com até 10 páginas, SEO avançado, copy estratégica e blog opcional. Entrega em até 5 dias.",
          category: "Site Institucional",
        },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Qual a diferença entre Landing Page e Site Institucional?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Landing Page é uma página única, mais direta e focada em conversão. O Site Institucional é mais completo, ideal para empresas que precisam apresentar serviços, autoridade, equipe, conteúdo e posicionamento com mais profundidade.",
        },
      },
      {
        "@type": "Question",
        name: "Em quanto tempo o projeto fica pronto?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Landing Page pode ser entregue em até 3 dias. O Site Institucional pode ser entregue em até 5 dias, dependendo do alinhamento e do envio dos materiais necessários.",
        },
      },
      {
        "@type": "Question",
        name: "O site funciona bem no celular?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. Toda a estrutura é responsiva, com experiência otimizada para desktop, tablet e celular.",
        },
      },
      {
        "@type": "Question",
        name: "O site terá integração com WhatsApp?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. O site pode ter botões estratégicos e chamadas integradas ao WhatsApp para facilitar o contato imediato do visitante.",
        },
      },
      {
        "@type": "Question",
        name: "Vocês escrevem os textos também?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. A estrutura inclui copy pensada para clareza, posicionamento e conversão, principalmente no site institucional.",
        },
      },
      {
        "@type": "Question",
        name: "O site ajuda no Google?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. A Landing Page pode incluir SEO básico, enquanto o Site Institucional pode ter uma estrutura mais avançada para fortalecer presença orgânica.",
        },
      },
    ],
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="preconnect" href="https://wa.me" crossOrigin="anonymous" />
        <meta name="format-detection" content="telephone=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Pular para o conteúdo
        </a>
        <div id="bg-fx" aria-hidden="true">
          <div className="bg-grid" />
          <div className="bg-aurora" />
          <div className="bg-noise" />
        </div>
        {children}
      </body>
    </html>
  );
}
