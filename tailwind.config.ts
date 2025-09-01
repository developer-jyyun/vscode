import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        main: "#302f3d",
        "gray-e": "#eee",
        "gray-c": "#94A3B8",
        "light-yellow": "#f7ffac",
        "dark-navy": "#130e55",
        "main-navy": "#35334f",
        "contents-navy": "#0f172a",
        "dark-red": "#8b0000",
        "light-navy": "#312e63",
        "code-red": "#f87171",
        "code-purple": "#d1a4ff",
        "code-lime": "#CFF09E",
      },
      fontFamily: {
        dunggeunmo: ["DungGeunMo", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
