import type { MetadataRoute } from "next";

const baseUrl = "https://falconads.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const anchors = [
    "",
    "#tese",
    "#argumentos",
    "#servico",
    "#processo",
    "#faq",
  ];

  return anchors.map((a) => ({
    url: `${baseUrl}/${a}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: a === "" ? 1 : 0.75,
  }));
}
