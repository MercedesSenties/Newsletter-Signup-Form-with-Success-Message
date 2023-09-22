import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "dark-grey": "#242742",
      "charcoal-grey": "#36384e",
      grey: "#9294a0",
      orange: "#FE6939",
      "wild-watermelon": {
        50: "#FFFFFF",
        100: "#FFF5F8",
        200: "#FFCCD8",
        300: "#FFA4B9",
        400: "#FF7B9A",
        DEFAULT: "#FF527B",
        600: "#FF1A50",
        700: "#E10035",
        800: "#A90028",
        900: "#71001B",
        950: "#550014",
      },
    },
  },
  plugins: [],
};
export default config;
