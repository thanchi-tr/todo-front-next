import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#DCE7E9",
        foreground: "#d9d9d9",
        textbase: "#545454",
        progressbar: "#C48787",
        bordercolour: "#7C3023",
      },
      height: {
        screen: "100vh",
      },
      width: {
        screen: "100vw",
      },

      fontFamily: {
        secondaryfont: ["GeistMono", "sans-serif"], // Add your custom fonts
        mainfont: ["CodaCaption", "sans-serif"],
      },
      fontWeight: {
        hairline: "100",
        thin: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
    },
  },
  plugins: [],
} satisfies Config;
