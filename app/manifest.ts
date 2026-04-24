import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Falcon Ads — Estratégia, Tráfego, Resultados",
    short_name: "Falcon Ads",
    description:
      "Landing pages e sites institucionais modernos, rápidos e estratégicos para empresas que querem vender mais.",
    start_url: "/",
    display: "standalone",
    background_color: "#0B0B0B",
    theme_color: "#0B0B0B",
    orientation: "portrait",
    lang: "pt-BR",
    categories: ["business", "productivity", "marketing"],
    icons: [
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
