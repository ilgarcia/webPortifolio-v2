import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      fira: "var(--fira-font)",
      neon: "var(--Sriracha-font)",
    },
    extend: {
      colors: {
        theme: { dark: "#040615" },
      },
      dropShadow: {
        neon: [
          "0 0px 3px rgb(121,66,237,0.5)",
          "0 0px 5px rgb(121,66,237,0.5)",
          "0 -6px 10px rgb(121,66,237,0.5)",
          "0 0px 21px rgb(121,66,237,0.6)",
          "0 0px 42px rgb(121,66,237,0.6)",
          "0 0px 72px rgb(121,66,237,0.6)",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
