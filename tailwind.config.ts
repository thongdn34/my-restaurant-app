import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      textPrimary: "#344054",
      textSecondary: "#667085",
      bgLightWhite: "#F9FAFB"
    },
  },
  plugins: [],
} satisfies Config;
