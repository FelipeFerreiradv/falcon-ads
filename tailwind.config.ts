import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      colors: {
        accent: "#0D6EFD",
        "accent-2": "#00C853",
        "accent-3": "#FFD600",
        "bg-0": "#0B0B0B",
        "bg-1": "#121212",
        "bg-2": "#003366",
        "bg-3": "#1E3A8A",
      },
    },
  },
  plugins: [],
};

export default config;
