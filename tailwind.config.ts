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
      screens: {
        "sk": "1260px",
        "2xl": "1440px",
      },
      maxWidth: {
        "8xl": "1440px",
      },
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
      animation: {
        rubberBand: "rubberBand 1s",
        meteorEffect: "meteor 5s linear infinite"
        
      },
      keyframes: {
        rubberBand: {
          "0%" : {transform: "scaleX(1)"},
          "30%" : {transform: "scale3d(1.25,.75,1)"},
          "40%" : {transform: "scale3d(.75,1.25,1)"},
          "50%" : {transform: "scale3d(1.15,.85,1)"},
          "65%" : {transform: "scale3d(.95,1.05,1)"},
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
