import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        main: "#302f3d",
        sub: "#35334f",
        "gray-e": "#eee",
        "light-yellow": "#ffeaa2",
        "dark-navy": "#130e55",
        "code-red": "#f87171",
        "code-purple": "#d1a4ff",
        "code-lime": "#d9ff98",
      },
    },
  },
  plugins: [],
};
export default config;
