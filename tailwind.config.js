/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        archive: {
          bg: "#f3f2ed",
          card: "#fbfaf6",
          dark: "#1c1b18",
          darkCard: "#22211e",
          amber: "#d4701a",
          orange: "#b45a12",
          gold: "#f0a04b",
          green: "#3f7a4e",
          muted: "#66625a",
          subtle: "#a39d8e",
          border: "#1c1b18",
          borderMuted: "#cfcabb",
        }
      },
      fontFamily: {
        display: ["'Big Shoulders Display'", "Impact", "sans-serif"],
        mono: ["'IBM Plex Mono'", "ui-monospace", "monospace"],
      },
      animation: {
        'blink': 'blink 1.1s steps(1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'radar-sweep': 'radarSweep 4s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        radarSweep: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}
