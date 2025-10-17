/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'toast-primary': '#e8d197',
        'toast-secondary': '#f0e1bb', 
        'toast-tertiary': '#f8f1de',
        'toast-text-dark': '#3d3d3d',
        'toast-text-light': '#666',
      },
      boxShadow: {
        'toast': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'toast-hover': '0 4px 12px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        toasttheme: {
          "primary": "#e8d197",
          "secondary": "#f0e1bb", 
          "accent": "#f8f1de",
          "neutral": "#3d3d3d",
          "base-100": "#f8f1de",
          "base-200": "#f0e1bb",
          "base-300": "#e8d197",
          "base-content": "#3d3d3d",
        },
      },
    ],
  },
}