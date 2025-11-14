/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "toast-primary": "#e8d197",
        "toast-secondary": "#f0e1bb",
        "toast-tertiary": "#f8f1de",
        "toast-text-dark": "#3d3d3d",
        "toast-text-light": "#666",
      },
      boxShadow: {
        toast: "0 2px 8px rgba(0, 0, 0, 0.1)",
        "toast-hover": "0 4px 12px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        toasttheme: {
          primary: "#e8d197",
          "primary-content": "#3d3d3d",
          secondary: "#f0e1bb",
          "secondary-content": "#3d3d3d",
          accent: "#f8f1de",
          "accent-content": "#3d3d3d",
          neutral: "#3d3d3d",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#f8f1de",
          "base-300": "#f0e1bb",
          "base-content": "#3d3d3d",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
      },
    ],
    base: true,
    styled: true,
    utils: true,
  },
};
