import type { Config } from "tailwindcss";

export default {
  
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    './src/styles/**/*.{css}',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  }, 
  corePlugins: {
    preflight: true,
  },
  plugins: [],
} satisfies Config;
