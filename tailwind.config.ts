import type { Config } from "tailwindcss";
import colors from "./src/theme/colors";
import screens from "./src/theme/screen";
import fontFamily from "./src/theme/fontFamily";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        "signup-shadow": "0px 4px 4px 0px #000",
        "service-shadow": "0px 12px 4px 0px #00000040"
      },
      backgroundImage: {
        "orange-gradient": "linear-gradient(to right, #ff7e5f, #feb47b)",
        "signup-gradient":
          "linear-gradient(90deg, #B2DAE5 5.72%, #63797F 100%)",
        "signup-child-gradient":
          "linear-gradient(290.61deg, #B2DAE5 2.03%, #A4D6E3 98.12%"
      },
      colors,
      screens,
      fontFamily
    }
  },
  plugins: []
};
export default config;