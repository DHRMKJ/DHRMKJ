/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "pb-lines":
          "repeating-linear-gradient(to bottom, #f0166f, #f0166f 1px, black, black 5px)",
      },
      colors: {
        "monitor-bg": "#1a1a1a", // Dark background color for the monitor
        "monitor-text": "#00ff00", // Green color for text
      },
      fontFamily: {
        monitor: ['"Courier New"', "Courier", "monospace"], // Monospace font
      },
      backgroundImage: {
        crt: "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255, 255, 255, 0.1) 2px)",
      },
      boxShadow: {
        crt: "inset 0 0 10px rgba(0, 255, 0, 0.5)", // Green glow effect
      },
    },
  },
  plugins: [],
};
