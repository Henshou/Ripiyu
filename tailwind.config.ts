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
      white: "white",
      black: "black",
      "vibrant": "#0077b6",
      "darkblue": "#03045e",
      "bluey": "#142B4D",
      "blueish": "#0078B7",
      slate: {
        200: "#e2e8f0",
        300: "#cbd5e1",
        400: "#94a3b8",
        500: "#64748b"
      },
      "cloudblue": "#caf0f8" 
    },
    fontFamily: {
      "ptserif": ["PT Serif"],
      "poppin": ["Poppins"]
    }
  },
  plugins: [],
};
export default config;


