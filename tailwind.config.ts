import flowbite from "flowbite/plugin";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./node_modules/flowbite-react/lib/**/*.js",
    "./src/**/*.tsx",
  ],
  plugins: [flowbite],
  theme: {
    colors: {
      creme: "#FFF5EA",
      grape: "#9873E6",
      grass: "#22CFAE",
    },
  },
};


export default config;
